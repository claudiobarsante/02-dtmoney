import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
    --background:#f0f2f5;
    --blue:#5429cc;
    --blue-light:#6933ff;
    --green:#33cc95;
    --red:#e52e4d;
    --shape:#ffffff;
    --text-body:#969cb3;
    --text-title:#363f5f;
    }

*, * ::after,*::before{
    margin:0;
    padding:0;
    box-sizing:0;
}

html {
    @media (max-width:1080px){
        font-size:93.75%;//15px;
    }
    @media(max-width:720px){
        font-size:87.5%;//14px
    }
}

body{
    background:var(--background);
    -webkit-font-smoothing:antialiased;
}

body, button, input,textarea {
    font-family:'Poppins', sans-serif;
    font-weight:400;

}

h1,h2,h3,h4,h5,h6,strong {
    font-weight:600;
}

button{
    cursor:pointer;
}

[disabled]{
    opacity:0.6;
    cursor:not-not-allowed;

}

.react-modal-overlay{
    background:rgba(0,0,0,0.5);

    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;

    display:flex;
    align-items:center;
    justify-content:center;

}

.react-modal-close{
    background:transparent;
    border:0;

    position:absolute;
    right:1.5rem;
    top:1.5rem;

    transition:filter 0.2s;

    &:hover{
        filter:brightness(0.8)
    }
}
.react-modal-content{
    width:100%;
    max-width: 576px;

    background:var(--background);
    border-radius:0.24rem;

    padding:3rem;
    position:relative;   
  
}
`;
