import { Toggle, Navbar, Nav, Header } from 'rsuite';

const Navb = ({ toggleTheme }) => {
  return (
    <Header>
      <Navbar>
        <Navbar.Brand href="https://github.com/victorjrcandido/" style={{ fontWeight: 'bold' }}>NEWSPAPER</Navbar.Brand>
        <Nav>
          <Nav.Item>News</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Menu title="Contact">
              <Nav.Item>victorjrcandido@gmail.com</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Toggle className='toggle' size='md' onClick={toggleTheme} checkedChildren="Dark" unCheckedChildren="Light"></Toggle>
        </Nav>
      </Navbar>
    </Header>
  )
}

export default Navb