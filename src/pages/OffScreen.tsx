import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const OffScreen = () => {
    const [password, setPassword] = useState('');
    const [errorCount, setErrorCount] = useState(0)
    const hints = ["Portfolio Owner Name", "Maybe URL can give some hints!", "Okay! Click Me to Login!"]
    const navigate = useNavigate()
    const handleSubmit = () => {
        if (password.trim().toLowerCase() === "ayanali" || password.trim().toLowerCase() === "ayanalimev" || password.trim().toLowerCase() === "ayanalimevv") {
            navigate('/');
        } else {
            setErrorCount(p => p <= 3 ? ++p : p);
        }
    }
    return (
        <div className="flex flex-col justify-center items-center p-4 pb-8">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className="my-4">
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Enter Password..."
                    className="input input-bordered input-sm w-full max-w-xs border mb-2" />
                <button disabled={password.trim().length === 0} onClick={handleSubmit} className="btn btn-xs">Submit</button>
            </div>
            <Link to={'/'} className="text-xs cursor-pointer">Hint: {hints[errorCount]}</Link>
        </div>
    )
}

export default OffScreen