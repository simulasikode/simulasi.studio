import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex gap-8 row-start-2 sm:items-start">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                  Unlock Your Creative Potential with Our Cutting-Edge Tools
                </h1>
                <p className="text-lg mb-6">
                  Explore a world of possibilities and bring your ideas to life
                  with our innovative platform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button category="next" href="/color-process">
                    Let&apos;s Calculate
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
