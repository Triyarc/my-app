import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavContainer } from '../../components/style/layoutStyle/Navbar.style';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';

function HeaderNavbar() {
  return (
    <NavContainer>
      <Navbar className='justify-content-between' expand='lg'>
        <div>
          <Navbar.Brand href='/'>LOGO</Navbar.Brand>
        </div>
        <div className='f_search_container '>
          <form className='d-flex align-items-center w-100' action='submit'>
            <input
              type='text'
              className='search_bar position-relative shadow w-100'
              placeholder='Search..'
              name='search'
            ></input>
            <button
              className='d-flex search_btn position-absolute me-auto text-white text-align-center justify-content-center'
              type='submit'
            >
              <span className='d-md-block d-none'>search</span>
              <span className='d-md-none d-block'>
                <AiOutlineSearch />
              </span>
            </button>
          </form>
        </div>
        <Button className='login_Btn shadow me-3'>Login</Button>
      </Navbar>
      <Navbar expand='lg' className=''>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-between w-100'>
              <NavDropdown title='Select Location' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Categories' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#home'>Recent Post</Nav.Link>
              <Nav.Link href='#home'>Mating</Nav.Link>
              <Nav.Link href='#link'>Adopting </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavContainer>
  );
}

export default HeaderNavbar;
