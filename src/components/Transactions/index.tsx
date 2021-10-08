import { useEffect } from "react";
import { Container } from "./style";

export function Transactions(){

  useEffect(()=>{
    fetch("http://localhost:3000/api/transactions")
    .then(response => response.json())
    .then(data => console.log(data))
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