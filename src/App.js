import 'rsuite/dist/rsuite.min.css';
import { Container, CustomProvider } from 'rsuite';
import Navb from './components/Navb';
import Maincontent from './components/Maincontent';


const App = () => {
  return (
    <CustomProvider theme='light'>
      <Container>
        <Navb />
        <Maincontent />
      </Container>
    </CustomProvider>
  );
}

export default App;