import Modal from 'react-modal'
import { Container, TransactionsTypeContainer, ButtonTypeTransaction } from './style'
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react'
import { TransactionContext } from '../../TransactionContext'


interface NewTransactionModalProps{
  isOpen: boolean,
  onRequestClose: ()=> void
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const {createTransaction} = useContext(TransactionContext)
  const [title, setTitle]= useState('')
  const [value, setValue]= useState(0)
  const [category, setCategory]= useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()

    createTransaction({
      title,
      amount: value,
      category,
      type
    })
    
  }

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
       <Container onSubmit={handleCreateNewTransaction}>
         <h2>Cadastrar transação</h2>
         <input 
          type="text" 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
         />
         <input 
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
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
          value={category}
          onChange={event => setCategory(event.target.value)}
         />
         <button type="submit">
           Cadastrar
         </button>
       </Container>
    </Modal>  
  )
}
