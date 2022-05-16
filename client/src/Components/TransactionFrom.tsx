import React, { useContext, useState } from "react";
import EthSvg from "../assets/ethereum-eth.svg";
import { WalletContext } from "../context/connectWallet";

const TransactionFrom = () => {
  const { currAcount, sendTransaction } = useContext(WalletContext);
  const [addrresTo, setAddrresTo] = useState("" as string);
  const [amount, setAmount] = useState(0 as number);

  const handleConfirmTransaction = () => {
    // TODO: take way further validation if for production
    if (!addrresTo || !amount) return;
    sendTransaction(addrresTo, amount);
  };
  return (
    <div className="w-[30rem] flex flex-col items-center h-[25rem] rounded-[40px] shadow-lg shadow-gray-800 p-2  mt-10 bg-black opacity-2">
      {/* header */}
      <div className="flex w-full justify-between p-4">
        <p className="text-white fnt-normal text-lg pl-2"> Swap</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      {/* value input */}
      <div className="h-[7rem] p-2 w-full flex justify-between rounded-[30px] bg-gray-900">
        <input
          onChange={(e: any) => setAmount(e.target.value)}
          value={amount}
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          className=" outline-none m-2 bg-gray-900 h-[80%] text-gray-400 appearance-none w-[50%] text-[1.5rem] font-mono p-2"
        />
        <div className="flex flex-col mt-2 items-stretch h-full ">
          <div className="cursor-pointer flex items-center bg-gray-700 p-1  rounded-full shadow-lg shadow-gray-800">
            <img src={EthSvg} alt="" className="w-8 h-8" />
            <p className="  text-white text-xl mx-2 tracking-wide ">ETH</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h6 w-6 text-white"
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
          <p className="self-end text-gray-600 mt-2 font-mono font-bold ">
            {" "}
            balance: {currAcount?.balance}
          </p>
        </div>
      </div>
      {/* divider */}
      <div className="mt-[-12px] cursor-pointer bg-black z-20 rounded-[10px] p-[6px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-gray-400  items-center text-sm p-1 rounded-lg  bg-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      {/* adress input */}
      <div className="h-[7rem] mt-[-12px] p-2 pr-4 w-full rounded-[30px] bg-gray-900">
        <input
          value={addrresTo}
          onChange={(e: any) => setAddrresTo(e.target.value)}
          type="text"
          step="0.01"
          placeholder="inter ether address"
          className="  placeholder:text-gray-400 placeholder:text-lg text-gray-400 outline-none m-2 bg-gray-900 h-[80%] appearance-none w-full text-[1.5rem] font-mono p-2"
        />
      </div>
      <div
        onClick={handleConfirmTransaction}
        className="bg-[#2172E5] my-2 rounded-2xl py-6 w-full  px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]"
      >
        Confirm
      </div>
    </div>
  );
};

export default TransactionFrom;
