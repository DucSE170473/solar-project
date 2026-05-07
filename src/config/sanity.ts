import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: false, // set to false since we are writing
  apiVersion: "2024-03-17", // use current date or latest version
  token: import.meta.env.VITE_SANITY_TOKEN,
});
