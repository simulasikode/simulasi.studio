"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLogin from "../../hooks/auth/useLogin";
import useGoogleSignIn from "../../hooks/auth/useGoogleSignIn";
import { isValidEmail } from "../../hooks/auth/authUtils";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button"; // Import the Button component

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login, isLoading: isLoginLoading } = useLogin();
  const { googleSignIn, isLoading: isGoogleLoading } = useGoogleSignIn();
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const isLoading = isLoginLoading || isGoogleLoading;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);
    setPasswordError(null);

    let hasError = false;

    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError("Invalid email format");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      await login(email, password);
      router.push("/color-process");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      router.push("/color-process");
    } catch (error) {
      console.error("Google Login error:", error);
    }
  };

  const handleContinueAsGuest = () => {
    router.push("/color-process");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputClasses =
    "appearance-none bg-[#202020] border-b border-primary py-2 px-3 leading-tight focus:outline-none";

  return (
    <div className="relative max-w-md min-h-[100vh] top-16 px-6">
      <div className="p-6 border border-primary">
        <h2 className="text-2xl font-black mb-12 text-center">
          Access an Color Process
        </h2>
        <form onSubmit={handleLogin} className="space-y-6 ">
          <div>
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`${inputClasses}  appearance-none  py-2 px-3  leading-tight focus:outline-none w-full `}
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && (
              <p className="text-red-500 text-xs italic">{emailError}</p>
            )}
          </div>
          <div>
            <label className="block  text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className={`${inputClasses} appearance-none py-2 px-3  leading-tight focus:outline-none w-full`}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs italic">{passwordError}</p>
            )}
          </div>
          <div className="flex gap-6 mt-8">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging In..." : "Login"}
            </Button>
            <Button
              variant="secondary"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              {isLoading ? "Logging in with Google..." : "Login with Google"}
            </Button>
          </div>
          <div className="border-t border-[#202020] my-6">
            <Button
              className="mt-6"
              variant="primary"
              onClick={handleContinueAsGuest}
              disabled={isLoading}
            >
              Continue as Guest
            </Button>
          </div>
        </form>
        <p className="text-left text-sm mt-4">
          Don&apos;t have an account?{" "}
          <span>
            <a href="/auth/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
