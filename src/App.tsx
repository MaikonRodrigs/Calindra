import react from 'react';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Homepage from './pages/Homepage';
import GlobalStyle from "./styles/GlobaStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Homepage />
      <Footer />
    </>

  )
}

export default App
