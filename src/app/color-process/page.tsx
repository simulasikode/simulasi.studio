// app/color-process/page.tsx
"use client";
import Button from "@/components/ui/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import useSignOut from "../color-process/hooks/auth/useSignOut";

export default function Page() {
  const [user, loading, error] = useAuthState(auth);
  const { signUserOut, isLoading: isSignOutLoading } = useSignOut();

  if (loading) {
    return <div>Loading application...</div>;
  }

  if (error) {
    return <div>Error loading app: {error.message}</div>;
  }

  if (user) {
    // User is logged in (or anonymous) - render content
    return (
      <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex gap-8 row-start-2 sm:items-start">
          <section>
            <div className="container px-4">
              <div className="flex items-center justify-between mb-8">
                <p>
                  Welcome!{" "}
                  <span>
                    {user.isAnonymous
                      ? "Printmaker"
                      : user.displayName
                        ? user.displayName
                        : user.email}
                  </span>
                </p>
                {/* Conditionally render "Sign Out" button - only for non-anonymous users */}
                {!user.isAnonymous && (
                  <Button
                    size="small"
                    variant="info"
                    onClick={handleSignOut}
                    disabled={isSignOutLoading}
                  >
                    {isSignOutLoading ? "Signing Out..." : "Sign Out"}
                  </Button>
                )}
              </div>

              <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                    Color Process Calculator - Optimize Your Color Process
                  </h1>
                  <div className="mb-8">
                    <p className="text-lg">
                      The Color Process Calculator helps you achieve perfect
                      color, faster. Optimize Your Color Process with our
                      intuitive tool and experience the benefits of accurate
                      color formulas, reduced waste, and streamlined workflows.{" "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button category="previous">Back</Button>
                    <Button category="next" href="/color-process/auth/login">
                      Become Member
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    // User is NOT logged in (or anonymous), but we don't redirect anymore
    return null;
  }

  async function handleSignOut() {
    try {
      await signUserOut();
      // No redirect needed - page will re-render and show guest state
    } catch (signOutError) {
      console.error("Sign-out error:", signOutError);
    }
  }
}
