import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";
import { ReactNode } from 'react'



interface Transaction{
  id: number,
  title: string,
  category: string,
  amount: number,
  type: string,
  createdAt: string
}

interface TransactionProviderProps{
  children: ReactNode,
}

export const TransactionContext = createContext<Transaction[]>([])

export function TransactionsProvider({children}: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  console.log(transactions)

  useEffect( ()=>{

    async function fetchData() {
  
      const response = await api.get<any>('transactions')
      setTransactions(response.data.transactions)
    }
    fetchData();
  
  },[]);

  return(
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )

}