import React, { useContext } from "react";
import { HashLoader } from "react-spinners";
import { WalletContext } from "../context/connectWallet";
const Spinner = () => {
  const { loading, setLoading, success } = useContext(WalletContext);
  return (
    <>
      {loading && (
        <div className="h-full flex   justify-center w-full z-50 absolute top-0">
          {/* color overlay */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-full  absolute top-0  opacity-50 " />
          <div className=" flex flex-col items-center mt-[10rem]  z-50 justify-center    w-[30rem] h-[25rem] rounded-[40px] shadow-gray-80 p-2 opa bg-black ">
            <p className="text-gray-500 p-2 mb-4 font-mono text-lg uppercase">
              {!success ? `processing...` : `done...`}
            </p>
            {!success ? (
              <HashLoader color="white" size={100} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 animate-bounce text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Spinner;
