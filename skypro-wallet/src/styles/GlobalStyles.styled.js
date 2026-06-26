import { createGlobalStyle }

from "styled-components";

const GlobalStyles=

createGlobalStyle`

*{

margin:0;

padding:0;

box-sizing:border-box;

font-family:

Inter,

Arial,

sans-serif;

}

body{

background:#F3F3F3;

color:#1E1E1E;

}

a{

text-decoration:none;

}

button{

border:none;

cursor:pointer;

}

`;

export default GlobalStyles;