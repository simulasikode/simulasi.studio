// hooks/auth/useSignOut.ts
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth"; // Remove signInAnonymously import

const useSignOut = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut(getAuth()); // Just sign out, no anonymous sign-in after
      // Removed automatic signInAnonymously call
    } catch (error: unknown) {
      console.error("Sign-out error:", error);
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error("An unknown error occurred during sign-out.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signUserOut, isLoading };
};

export default useSignOut;
