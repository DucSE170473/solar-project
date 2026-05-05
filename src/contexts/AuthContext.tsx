import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { type User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase'; // Đảm bảo đường dẫn này đúng

interface AuthContextType {
  user: User | null;
  role: string;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string>("user");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (fbUser) => {
      if (fbUser) {
        const docRef = doc(db, "users", fbUser.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setRole(docSnap.data().role);
        } else {
          await setDoc(docRef, { 
            email: fbUser.email, 
            role: "user",
            displayName: fbUser.displayName 
          });
          setRole("user");
        }
        setUser(fbUser);
      } else {
        setUser(null);
        setRole("user");
      }
      setLoading(false);
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
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};