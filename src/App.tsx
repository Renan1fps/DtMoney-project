import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Global } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";
import { TransactionContext } from "./TransactionContext";

function App() {
  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false)

  function handleOpenTransactionModal(){
    setIsOpenTransactionModal(true)
  }

  function handleCloseTransactionModal(){
    setIsOpenTransactionModal(false)
  }
  return (
    <TransactionContext.Provider  value={[]}>
      <Header 
        onOpenNewTransactionModal={handleOpenTransactionModal}
      />
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isOpenTransactionModal}
        onRequestClose={handleCloseTransactionModal}
      />
      <Global/>
    </TransactionContext.Provider>
  );
}

export { App };
