import { Toggle, Navbar, Nav, Header } from 'rsuite';

const Navb = ({ toggleTheme }) => {
  return (
    <Header>
      <Navbar>
        <Navbar.Brand href="https://github.com/victorjrcandido/" style={{ fontWeight: 'bold' }}>NEWSPAPER</Navbar.Brand>
        <Nav className='nav_news'>
          <Nav.Item>News</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Menu title="Contact">
              <Nav.Item ><a href="mailto:victorjrcandido@gmail.com">victorjrcandido@gmail.com</a></Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Toggle className='toggle' size='md' onClick={toggleTheme} checkedChildren="Dark" unCheckedChildren="Light"></Toggle>
        </Nav>
      </Navbar>
      {/* <div className='_head'>
        <h2>WELCOME TO THE NEWSPAPER</h2>
      </div> */}
    </Header>
  )
}

export default Navb