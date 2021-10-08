import Modal from 'react-modal'
import { Container, TransactionsTypeContainer } from './style'
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'

Modal.setAppElement("#root")
interface NewTransactionModalProps{
  isOpen: boolean,
  onRequestClose: ()=> void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName= "react-modal-overlay"
      className= "react-modal-content" 
      >
      <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
      >
        <img src={CloseImg} alt="Close modal"/>
      </button>
       <Container>
         <h2>Cadastrar transação</h2>
         <input 
          type="text" 
          placeholder="Título"
         />
         <input 
          type="number"
          placeholder="Valor"
         />
          <TransactionsTypeContainer>
            <button type="button">
              <img src={IncomeImg} alt="Income"/>
              <span>Entrada</span>
            </button>
            <button type="button">
              <img src={OutcomeImg} alt="Outcome"/>
              <span>Saída</span>
            </button>
          </TransactionsTypeContainer>
         <input 
          type="text" 
          placeholder="Categoria"
         />
         <button type="submit">
           Cadastrar
         </button>

       </Container>
    </Modal>  
  )
}