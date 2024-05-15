import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import './navBar.css';

function navBar() {
  return (
    <div className="homepage">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container id="container">

          <div className="home-letter">
            <p className='home'>MARVEL</p>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              
              <div className='divPersonages'>
                <Nav.Link href="/personagens" className='homePersonagens' id='basic-nav'>Personagens</Nav.Link>
              </div>
              <div className='divFilmes'>
                <Nav.Link href="/filmes" className="filmes" id='basic-nav'>Filmes</Nav.Link>
              </div>
              <div className='divHq'>
                <Nav.Link href="/hqs" className="hqs" id='basic-nav'>HQs</Nav.Link>
              </div>
            </Nav>
              <Nav className="ml-auto align-items-center">
                  <Image className='img' src="./image/profile-picture.png"/>
                  <NavDropdown title="Sair" className='sair'>
                  <NavDropdown.Item href="/" >Sair</NavDropdown.Item>
                  </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div id='line'>
            <br />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default navBar;