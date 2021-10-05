import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

:root{
  --background: #f0f2f5;
  --red: #e52e4d;
  --blue: #5429CC;
  --blue-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #ffffff;

}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, textarea, input, button{
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 600;
}

button{
  cursor: pointer;
  color: var(--shape)
}
[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}
`;