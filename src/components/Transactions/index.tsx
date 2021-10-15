import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction{
  id: number,
  title: string,
  category: string,
  amount: number,
  type: string,
  createdAt: string
}

export function Transactions(){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect( ()=>{

    async function fetchData() {
  
      const response = await api.get<any>('transactions')
      setTransactions(response.data.transactions)
    }
    fetchData();
  
  },[])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
         {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR',{
                  style: "currency",
                  currency: "BRL"
                }).format(transaction.amount)} 
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat("pt-BR").format( new Date(transaction.createdAt))}</td>
          </tr>
         ))}
        </tbody>
      </table>
    </Container>
  )
}