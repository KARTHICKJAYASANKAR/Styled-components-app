import { Container } from "./components/styles/Container.styled";

import Header from "./components/Header";
import Card from "./components/card";
import Footer from "./components/Footer";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

import content from "./content";
import { useEffect } from "react";

const theme = {
    colors: {
      header: '#77E4C8',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  }


function App() {
  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyles/>
        <Header/>
        <Container>
            {
                content.map((item, index) => (<Card key={index} item={item}/>))
            }
            
        </Container>
        <Footer/>
        </>
    </ThemeProvider>
  );
}

export default App;
