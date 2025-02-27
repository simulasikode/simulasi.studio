// app/auth/signup/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignup from "../../hooks/auth/useSignup";
import { isValidEmail } from "../../hooks/auth/authUtils";
import Button from "@/components/ui/Button";
import InputText from "@/components/ui/inputText";

const SignupPage = () => {
  const [name, setName] = useState(""); // State for Name input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signup, isLoading } = useSignup();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    // Removed toast-based validation, you can keep console.log for now,
    // or implement inline error messages below input fields

    if (!name.trim()) {
      console.log("Error: Name is required"); // Example: Replace with inline error display
      return;
    }
    if (!email) {
      console.log("Error: Email is required"); // Example: Replace with inline error display
      return;
    }
    if (!isValidEmail(email)) {
      console.log("Error: Invalid email format"); // Example: Replace with inline error display
      return;
    }
    if (!password) {
      console.log("Error: Password is required"); // Example: Replace with inline error display
      return;
    }
    if (password.length < 6) {
      console.log("Error: Password must be at least 6 characters"); // Example: Replace with inline error display
      return;
    }

    try {
      await signup(email, password, name); // Pass name to signup hook
      // Removed success toast:
      // showToast("Success", "Account created! Please login.", "success");
      console.log("Success: Account created! Please login."); // Example: Replace with inline success message or redirection
      router.push("/color-process");
    } catch (error) {
      console.error("Signup error:", error);
      // Removed error toast:
      // showToast("Error", "Signup failed. Please try again.", "error"); // Example: Replace with inline error display
      console.log("Error: Signup failed. Please try again."); // Example: Replace with inline error display
    }
  };

  return (
    <div className="relative mx-auto max-w-md min-h-[100vh] top-16">
      <div className="p-8 border border-primary">
        <h2 className="text-2xl font-bold mb-6 text-left">Create Account</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          {/* --- Name Input using InputText --- */}
          <div>
            <InputText
              label="Name"
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <InputText
              label="email"
              id="email"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* --- Password Input using InputText --- */}
          <div>
            <InputText
              label="Password"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>{" "}
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>
        <p className="text-left mt-4">
          Already have an account?{" "}
          <a
            href="/color-process/auth/login"
            className="text-blue-500 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
