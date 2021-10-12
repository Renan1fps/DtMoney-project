import Modal from 'react-modal'
import { Container, TransactionsTypeContainer, ButtonTypeTransaction } from './style'
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps{
  isOpen: boolean,
  onRequestClose: ()=> void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const [type, setType] = useState('deposit')
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
            <ButtonTypeTransaction 
            type="button"
            onClick={()=> setType('deposit')}
            isActive={type === 'deposit'}
            >
              <img src={IncomeImg} alt="Income"/>
              <span>Entrada</span>
            </ButtonTypeTransaction>
            <ButtonTypeTransaction 
            type="button"
            onClick={()=> setType('withdraw')}
            isActive={type === 'withdraw'}
            >
              <img src={OutcomeImg} alt="Outcome"/>
              <span>Saída</span>
            </ButtonTypeTransaction>
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
