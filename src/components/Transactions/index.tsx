import axios from "axios";
import { useEffect } from "react";
import { Container } from "./style";

export function Transactions(){

  useEffect(()=>{
    axios.get("http://localhost:3000/api/transactions")
    .then(response => console.log(response.data))
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
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>07/10/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="withdraw">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>07/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}