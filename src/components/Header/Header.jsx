import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <Navbar className={styles.navbar} bg="light" expand="lg">
        <Container>
          <Navbar.Brand className={styles.logo} href="#home">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle className={styles.nav_foucs} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pt-4 pt-lg-0">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className={styles.formControl}
                  aria-label="Search"
                />
                <Button className={styles.searchBtn}> <BiSearch></BiSearch> </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
