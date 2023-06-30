import { Link } from "wouter";
import { useEffect } from "react";

export default function FourOhFour() {
  useEffect(() => {
    document.title = "PyConf | Not Found";
  }, []);

  return (
    <div className="text-center">
      <h1>404 Error</h1>
      <h3>Page not found.</h3>
      <br />
      <Link href="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}
