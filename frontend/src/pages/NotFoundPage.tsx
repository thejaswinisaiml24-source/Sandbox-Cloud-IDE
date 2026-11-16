import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-sm text-primary">404</span>
      <h1 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
        This route isn&apos;t in the workspace
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
}

export default NotFoundPage;
