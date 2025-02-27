// hooks/auth/authUtils.ts
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth"; // Import the User type

export const createUserDocument = async (
  user: User, // Specify the type as Firebase User
  provider: string,
  displayName: string,
) => {
  await setDoc(
    doc(db, "users", user.uid),
    {
      email: user.email || null, // Use user.email, handle potential null
      createdAt: new Date(),
      displayName: displayName,
      provider: provider,
      role: "user", // Set default role on signup
    },
    { merge: true },
  );
};

export const getErrorMessage = (error: FirebaseError): string => {
  // Specify type as FirebaseError
  let errorMessage = "An unexpected error occurred";

  if (error instanceof FirebaseError) {
    switch (error.code) {
      case "auth/wrong-password":
      case "auth/user-not-found":
        errorMessage = "Invalid email or password";
        break;
      case "auth/email-already-in-use":
        errorMessage = "Email address is already in use.";
        break;
      case "auth/weak-password":
        errorMessage = "Password is too weak";
        break;
      default:
        errorMessage = `Firebase authentication error: ${error.message}`;
    }
  } else if (error) {
    errorMessage = error;
  }

  return errorMessage;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
