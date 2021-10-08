import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Global } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";

function App() {
  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false)

  function handleOpenTransactionModal(){
    setIsOpenTransactionModal(true)
  }

  function handleCloseTransactionModal(){
    setIsOpenTransactionModal(false)
  }
  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenTransactionModal}/>
      <Dashboard/>
      <Modal 
      isOpen={isOpenTransactionModal} 
      onRequestClose={handleCloseTransactionModal} 
      >
       <h1>Hello world</h1>
      </Modal>  
      <Global/>
    </div>
  );
}

export { App };
