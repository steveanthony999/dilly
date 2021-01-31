import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/logo.svg';

const NavbarComponent = () => {
  return (
    <Navbar expand='sm' className='py-4'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src={Logo} alt='logo' style={{ width: '35px' }} />
        </Navbar.Brand>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/user'>
            <FontAwesomeIcon icon={faUserAlt} size='2x' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
