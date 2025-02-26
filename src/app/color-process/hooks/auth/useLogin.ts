// hooks/auth/useLogin.ts
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // No toast here!
      return getAuth().currentUser; // Return the current user after login
    } catch (error) {
      // No toast here!
      throw error; // Re-throw the error for the component to handle if needed
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};

export default useLogin;
