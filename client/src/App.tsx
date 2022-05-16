import React, { useState } from "react";
import Navgation from "./Components/Navgation";
import Spinner from "./Components/Spinner";
import TransactionFrom from "./Components/TransactionFrom";
import { WalletProvider } from "./context/connectWallet";
function App() {

 
  return (
    <WalletProvider>
      <div className="bg-gradient-to-r flex from-[#25242a] flex-col items-center via-[#1f1b32] to-[#250f07fe] w-full h-[100vh]">
        <Spinner />
        <Navgation />
        <TransactionFrom />
      </div>
    </WalletProvider>
  );
}

export default App;
