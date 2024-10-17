import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isPasswordCorrect } from "../../functions/urlFunctions";
import { Avatar } from "../../components/Avatar";
import { PasswordInput } from "./PasswordInput";

// Hints to given based on count of wrong passwords user entered
const hints = [
  "Portfolio Owner Name",
  "Maybe URL can give some hints!",
  "Okay! Click Me to Login!",
];

// All correct passwords
const correctPasswords = ["ayanali", "ayanalimev", "ayanalimevv"];

// Component to Render when user click off/shutdown button
const OffScreenPage = () => {
  const [password, setPassword] = useState("");
  const [errorCount, setErrorCount] = useState(0);

  const navigate = useNavigate();

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handleSubmit = () => {
    // If password is correct navigate to home
    // Otherwise gives hints for 3 times
    if (isPasswordCorrect(password, correctPasswords)) {
      navigate("/");
    } else {
      setErrorCount((p) => (p <= 3 ? ++p : p));
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center p-4 pb-8">
      <Avatar imagePath="profile.png" altText="Profile Picture" />
      <PasswordInput
        password={password}
        passwordHandler={handlePasswordChange}
        submitHandler={handleSubmit}
      />
      <Link to={"/"} className="text-xs cursor-pointer">
        Hint: {hints[errorCount]}
      </Link>
    </div>
  );
};

export default OffScreenPage;
