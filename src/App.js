import 'rsuite/dist/rsuite.min.css';
import { Container, CustomProvider } from 'rsuite';
import Navb from './components/Navb';
import Maincontent from './components/Maincontent';
import { useState } from 'react';
import Footer from './components/FooterC';


const App = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <CustomProvider theme={theme}>
      <Container>
        <Navb toggleTheme={toggleTheme} />
        <Maincontent />
        <Footer />
      </Container>
    </CustomProvider>
  );
}

export default App;