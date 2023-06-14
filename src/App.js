import 'rsuite/dist/rsuite.min.css';
import { Container, CustomProvider } from 'rsuite';
import Navb from './components/Navb';
import Maincontent from './components/Maincontent';
import { useEffect, useState } from 'react';
import Footer from './components/FooterC';



const App = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
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