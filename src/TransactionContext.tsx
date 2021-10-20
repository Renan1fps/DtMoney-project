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
  createTransaction: (transaction: TransactionInput) => Promise<void>

}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionsProvider({children}: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect( ()=>{

    async function fetchData() {
  
      const response = await api.get<any>('transactions')
      setTransactions(response.data.transactions)
    }
    fetchData();
  
  },[]);

   async function  createTransaction(transactionsInput: TransactionInput){
   const response = await api.post('transactions', {...transactionsInput, createdAt: new Date()})
   const {transaction} = response.data as any
  
   setTransactions([
     ...transactions, transaction
   ])
  }

  return(
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )

}