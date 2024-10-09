import { useEffect } from "react";
import { ResumeLink } from "../constants";
import Loader from "../components/Loader";

const RedirectToResume = () => {
    useEffect(() => {
        window.open('/', '_blank'); // Opens resume in a new tab

        // Redirect current tab after opening the new tab
        window.location.href = ResumeLink;
    }, []);


    return <div className="flex items-center justify-center min-h-40">
        <Loader text="Redirecting..." />
        {/* <span>Redirecting...</span> */}
    </div>;
}

export default RedirectToResume