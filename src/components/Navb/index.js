import { Navbar, Nav, Header } from 'rsuite';
import UserBadgeIcon from '@rsuite/icons/UserBadge';

const Navb = () => {
  return (
    <Header>
      <Navbar>
        <Navbar.Brand href="#" style={{ fontWeight: 'bold' }}>NEWSPAPER</Navbar.Brand>
        <Nav>
          <Nav.Item>News</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<UserBadgeIcon />}>Login</Nav.Item>
        </Nav>
      </Navbar>
    </Header>
  )
}

export default Navb