import { Summary } from "../Summary";
import { Transactions } from "../Transactions";
import { Container } from "./style";

export function Dashboard(){
  return(
    <Container>
      <Summary/>
      <Transactions/>
    </Container>
  )
}