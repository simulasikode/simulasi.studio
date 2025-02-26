// hooks/auth/useSignOut.ts
import { useState } from "react";
import { getAuth, signOut, signInAnonymously } from "firebase/auth"; // Import signInAnonymously

const useSignOut = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut(getAuth()); // Sign out the current user
      await signInAnonymously(getAuth()); // Immediately sign in anonymously
      // No toast notifications anymore
    } catch (error) {
      console.error("Sign-out error:", error);
      // No toast notifications anymore
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { signUserOut, isLoading };
};

export default useSignOut;
