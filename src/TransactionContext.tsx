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

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps{
  children: ReactNode,
}

interface TransactionContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => void

}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

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

  function  createTransaction(transactions: TransactionInput){
    api.post('transactions', transactions)
  }

  return(
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )

}