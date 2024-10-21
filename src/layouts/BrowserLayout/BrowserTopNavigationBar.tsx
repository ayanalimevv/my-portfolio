export const BrowserTopNavigationBar = () => {
  return (
    <div className="flex gap-6 pb-4 px-4 pt-2 border-b border-b-slate-800">
      {location.pathname === "/off" || (
        <>
          <img
            onClick={() => history.go(-1)}
            className="cursor-pointer hover:opacity-80 hover:scale-95 transition-all duration-200"
            src="./back.svg"
            width={15}
            height={15}
            alt=""
          />

          {/* <div className="tooltip ml-auto tooltip-left" data-tip="Shut Down">
            <Link to={"/off"}>
              {" "}
              <img
                className="cursor-pointer hover:opacity-80 hover:scale-95 transition-all duration-200"
                src="./off.svg"
                width={15}
                height={15}
                alt=""
              />
            </Link>
          </div> */}
        </>
      )}
    </div>
  );
};
