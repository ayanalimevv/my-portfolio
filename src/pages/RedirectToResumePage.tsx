import { useEffect } from "react";
import { ResumeLink } from "../constants";
import { Loader } from "../components/Loader";

const RedirectToResume = () => {
  useEffect(() => {
    // Redirect tab to Resume Link
    window.location.href = ResumeLink;
  }, []);

  return (
    <div className="flex items-center justify-center min-h-40">
      <Loader text="Redirecting..." />
    </div>
  );
};

export default RedirectToResume;
