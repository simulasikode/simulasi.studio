// app/color-process/page.tsx
"use client";
import Button from "@/components/ui/Button";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex gap-8 row-start-2 sm:items-start">
        <section>
          <div className="container px-4">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                  Color Process Calculator - Optimize Your Color Process
                </h1>
                <div className="mb-8">
                  <p className="text-lg">
                    The Color Process Calculator helps you achieve perfect
                    color, faster. Optimize Your Color Process with our
                    intuitive tool and experience the benefits of accurate color
                    formulas, reduced waste, and streamlined workflows.{" "}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button category="previous">Back</Button>
                  <Button category="next" href="/color-process/auth/login">
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
