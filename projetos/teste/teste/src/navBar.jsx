import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import './navBar.css';

function navBar() {
  return (
    <div className="homepage">

      <Navbar expand="lg" bg="dark" data-bs-theme="dark" class="dark">
        <Container id="container">

          <div className="home-letter">
            <p className='home'>MARVEL</p>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='basic-navbar-nav' />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
                <Nav.Link href="/personagens" className='homePersonagens' id='basic-nav'>Personagens</Nav.Link>
                <Nav.Link href="/filmes" className="filmes" id='basic-nav'>Filmes</Nav.Link>
                <Nav.Link href="/hqs" className="hqs" id='basic-nav'>HQs</Nav.Link>
            </Nav>

            <Nav className="ml-auto align-items-center">
                <Image className='img' src="./image/profile-picture.png"/>
                <NavDropdown title="Sair" className='sair'>
                  <NavDropdown.Item href="/" title="Sair" className='sair'>Sair</NavDropdown.Item>
                </NavDropdown>
            </Nav>

          </Navbar.Collapse>  
        </Container>
      </Navbar>
      <div className='linha'></div>
      
    </div>
  );
}

export default navBar;