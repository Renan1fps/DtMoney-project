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