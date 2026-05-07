import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from "react";
import { type User, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

interface AuthContextType {
  user: User | null;
  role: string;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 👉 Hàm xử lý user (best practice)
async function getOrCreateUser(fbUser: User) {
  const docRef = doc(db, "users", fbUser.uid);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().role;
    } else {
      await setDoc(docRef, {
        email: fbUser.email,
        role: "user",
        displayName: fbUser.displayName
      });
      return "user";
    }
  } catch (error) {
    console.error("Firestore error:", error);
    return "user"; // fallback
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string>("user");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      try {
        if (fbUser) {
          const userRole = await getOrCreateUser(fbUser);

          setUser(fbUser);
          setRole(userRole);
        } else {
          setUser(null);
          setRole("user");
        }
      } catch (error) {
        console.error("AuthContext error:", error);
        setUser(null);
        setRole("user");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};