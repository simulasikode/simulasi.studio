export default function Footer() {
  return (
    // Footer Section
    <footer>
      <div className="fixed bottom-4 left-0 w-full">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Simulasi Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
