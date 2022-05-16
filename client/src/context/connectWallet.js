import React, { useEffect, useState } from "react";
import { contractABI, constractAddress } from "../utils/constants";
import { ethers } from "ethers";
const { ethereum } = window;
export const WalletContext = React.createContext();

// get deployed contract
const getEtherContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    constractAddress,
    contractABI,
    signer
  );
  console.log("transactionContract", transactionContract);
  return transactionContract;
};
export const WalletProvider = ({ children }) => {
  const [currAcount, setCurrAcount] = useState({});
  const [transactionCount, setTransactionCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
     checkIfWalletIsConnected();
  }, []);

  //! connect wallet
  const connectWallet = async () => {
    if (!ethereum) {
      return alert("no metamask account");
    }
    try {
      console.log('clicked');
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      if (accounts.length) {
        console.log(accounts);
        const balance = getBalnace(accounts[0]);
        setCurrAcount({ account: accounts[0], balance });
      }
    } catch (error) {
      console.log(error);
      throw new Error("no ether account!");
    }
  };
  //!  getbalance
  const getBalnace = async (address) => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const _hexBalance = await provider.getBalance(address);
    return parseFloat(ethers.utils.formatEther(_hexBalance)).toFixed(3);
  };
  //! check if connected
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask ");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        const balance = await getBalnace(accounts[0]);
        setCurrAcount({ account: accounts[0], balance });
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.");
    }
  };
  //! send transaction
  const sendTransaction = async (addressTo, amount) => {
    console.log(addressTo, amount);
    try {
      if (!ethereum) return alert("no metamask acount");
      const parsedAmount = ethers.utils.parseEther(amount);
      const transactionContract = getEtherContract();
      // transfer
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currAcount.account,
            to: addressTo,
            gas: "0x208",
            value: parsedAmount._hex,
          },
        ],
      });
      // add to blockchain
      const transactionHash = await transactionContract.addToBlockChain(
        addressTo,
        parsedAmount,
        "no key word"
      );
      setLoading(true);
      console.log("loading", transactionHash.hash);
      await transactionHash.wait();
      setSuccess(true);
      setTimeout(() => {
        console.log("waiting...");
        setSuccess(false);
        setLoading(false);
      }, 1000);
      console.log(`SUCCESS- ${transactionHash.hash}`);
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      console.log(transactionCount);
    } catch (error) {
      console.log(error);
      throw new error(error);
    }
  };

  return (
    <WalletContext.Provider
      value={{
        currAcount,
        connectWallet,
        sendTransaction,
        loading,
        setLoading,
        success,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
