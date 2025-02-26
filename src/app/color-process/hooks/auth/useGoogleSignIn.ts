// hooks/auth/useGoogleSignIn.ts
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const useGoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const googleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(getAuth(), provider);
      const user = result.user;

      // Check if user document exists. If not, create one.
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(
          docRef,
          {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            provider: "google",
            createdAt: new Date(),
            role: "user",
          },
          { merge: true },
        );
        // No toast here
      } else {
        // No toast here
      }
      return user; // Return the user after successful Google Sign-in
    } catch (error) {
      throw error; // Re-throw the error for the component to handle if needed
    } finally {
      setIsLoading(false);
    }
  };

  return { googleSignIn, isLoading };
};

export default useGoogleSignIn;
