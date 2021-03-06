import styled from "styled-components";


export const Container = styled.form`
h2{
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input{
  width: 100%;
  height: 64px;
  padding: 0 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;
  font-size: 1rem;

  &::placeholder{
    color: var(--text-body);
  }

  & + input{
    margin-top: 1rem;
  }
}
button[type="submit"]{
    width: 100%;
    height: 4rem;
    background-color: var(--green);
    border-radius: 0.25rem;
    border:0;
    margin-top: 1.5rem;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    transition: filter 0.9s;
    font-weight: 600;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const TransactionsTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

`;

interface ButtonTypeTransactionProps{
  isActive: boolean
}

export const ButtonTypeTransaction = styled.button<ButtonTypeTransactionProps>`
height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background-color: ${(props)=> props.isActive ? '#ccc' : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      border-color: #aaa;
    }
    
    img{
      height: 20px;
      width: 20px;
    }
    span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title)
    }
`;