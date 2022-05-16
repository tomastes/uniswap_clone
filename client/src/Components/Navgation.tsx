import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/swap.png";
import EthSvg from "../assets/ethereum-eth.svg";
import DropDownMenu from "./DropDownMenu";
import { WalletContext, WalletProvider } from "../context/connectWallet";
import { shortenString } from "../utils/shortenString";
const Navgation = () => {
  const { connectWallet, currAcount } = useContext(WalletContext);

  const activePageStyle = "bg-gray-800 ml-1 rounded-full text-white ";
  const [activePage, setActivePage] = useState("swap");
  const [toggleDropDown, settoggleDropDown] = useState(false);

  return (
    <div className="w-full relative">
      <div className="flex justify-between p-2 w-full px-4">
        {/* logo */}
        <img src={logo} alt="" className="w-20 h-20" />
        {/* main nav  */}
        <ul className="flex bg-gray-900 p-1 m-4 rounded-full shadow-lg shadow-gray-800 ">
          <li
            onClick={(e) => setActivePage("swap")}
            className={`text-gray-400 m-0 cursor-pointer  text-lg capitalize font-semibold mx-4 py-2 px-4 ${
              activePage === "swap" && activePageStyle
            }`}
          >
            transfer
          </li>
          <li
            onClick={(e) => setActivePage("pool")}
            className={`text-gray-400 m-0 cursor-pointer  text-lg capitalize font-semibold mx-4 py-2 px-4 ${
              activePage == "pool" && activePageStyle
            }`}
          >
            pool
          </li>
          <li
            onClick={(e) => setActivePage("chart")}
            className={`text-gray-400 m-0 flex cursor-pointer  text-lg capitalize font-semibold mx-4 py-2 px-4 ${
              activePage == "chart" && activePageStyle
            }`}
          >
            chart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          </li>
        </ul>
        {/* left nav */}
        <div className="relative flex items-center ">
          <div className="cursor-pointer flex items-center bg-gray-900 p-1 m-4 rounded-full shadow-lg shadow-gray-800">
            <img src={EthSvg} alt="" className="w-8 h-8" />
            <p className="  text-white text-lg mx-2 tracking-wide ">Ropsten</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="cursor-pointer flex items-center bg-gray-900 p-1 m-4 rounded-full shadow-lg shadow-gray-800">
            {currAcount.account ? (
              <>
                <p className="  text-white text-lg mx-2 tracking-wide ">
                  {currAcount.balance} ETH
                </p>
                <p className="  text-white bg-gray-700 px-4 py-2 rounded-full text-lg tracking-wide ">
                  {shortenString(currAcount?.account)}🟠
                </p>
              </>
            ) : (
              <button
                onClick={connectWallet}
                className="delay-150 hover:scale-[1.01] hover:delay-150  hover:bg-gradient-to-r hover:from-[ #9F2BC1] hover:to-[#E1A2B8] bg-gradient-to-r from-[#E1A2B8] to-[#9F2BC1] p-2 m-1   rounded-[10px] font-mono font-bold "
              >
                connect
              </button>
            )}
          </div>

          <div className="relative">
            <div
              onClick={(e) => settoggleDropDown(!toggleDropDown)}
              className=" cursor-pointer bg-gray-900 px-2 py-2 border  border-red-100 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
            <DropDownMenu
              open={toggleDropDown}
              setToggleDropDown={settoggleDropDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navgation;
