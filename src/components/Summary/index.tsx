import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'
//import { TransactionContext } from '../../TransactionContext';
import { Container } from "./style";
//import { useContext } from 'react';


export function Summary(){
 // const data = useContext(TransactionContext);
  return(
    <Container>
       {/*<TransactionContext.Consumer>
          {(data)=>{
              return <h1>Maneira antiga de se escrever um componente com context</h1>
          }}
        </TransactionContext.Consumer>*/}
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="income" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="outcome" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={Total} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}