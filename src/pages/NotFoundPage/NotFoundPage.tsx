import { Link } from "react-router-dom";

const notFoundDetails = {
  text: "404! This site can’t be reached",
  buttonText: "Back to Home",
  errorImage: "./error.svg",
};

// Component that render when user go to url that doesn't exist
const NotFoundPage = () => {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center gap-2">
      <div className="flex gap-2 justify-center items-center">
        <img src={notFoundDetails.errorImage} alt={"Page Not Found"} />
      </div>

      <span className="font-bold my-2">{notFoundDetails.text}</span>

      <Link
        to={"/"}
        className="btn hover:border hover:border-slate-700 hover:shadow"
      >
        {notFoundDetails.buttonText}
      </Link>
    </div>
  );
};

export default NotFoundPage;
