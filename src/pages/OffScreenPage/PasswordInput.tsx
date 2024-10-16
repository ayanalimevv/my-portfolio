export const PasswordInput = ({
  password,
  passwordHandler,
  submitHandler,
}: {
  password: string;
  passwordHandler: (password: string) => void;
  submitHandler: () => void;
}) => {
  return (
    <div className="my-4">
      <input
        value={password}
        onChange={(e) => passwordHandler(e.target.value)}
        type="text"
        placeholder="Enter Password..."
        className="input input-bordered input-sm w-full max-w-xs border mb-2"
      />
      <button
        disabled={password.trim().length === 0}
        onClick={submitHandler}
        className="btn btn-xs"
      >
        Submit
      </button>
    </div>
  );
};
