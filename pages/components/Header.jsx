import React, { useState, useRef } from "react";
import styles from "../../styles/header.module.scss";
import { Container, Row, Col, Button, Dropdown, Navbar, Nav } from "react-bootstrap";


const DropdownMenu = ({ dropdownItems }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  

  return (
    <Dropdown show={showDropdown} onToggle={toggleDropdown}>
      <span className="custom-dropdown-toggle" onClick={toggleDropdown}>
        <img className="custom-dropdown-icon" alt="" src="/mdimenudown.svg" />
      </span>
      <Dropdown.Menu className="dropdown-menu-center">
        {dropdownItems.map((menuItem, index) => (
          <Dropdown.Item key={index}>{menuItem}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default function Header() {
  const dropdownItems = ["Jobseekers", "Clients", "Sectors", "Resources"];

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleContactUsClick = () => {
    window.location.href = "https://www.sourceflow.co.uk/book-a-demo/";
  };

  return (
    <React.Fragment>
      <Container fluid>
        <Row className={`${styles.header} justify-content-between`}>
          <Col sm={4}>
            <Navbar expand="lg">
              <div className={styles.logoParent}>
                <div className={styles.logo}>
                  <b className={styles.softwareRecruitmentCo}>
                    Software Recruitment co.
                  </b>
                </div>
              </div>
            </Navbar>
          </Col>

          <Col sm={4}>
            <Navbar expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <div className={styles.frameParent}>
                    <Row>
                      {dropdownItems.map((menuItem, index) => (
                        <Col key={index} className={styles.forJobseekersParent}>
                          <div className={styles.softwareRecruitmentCo}>
                            {menuItem}
                          </div>
                          <DropdownMenu dropdownItems={["New Role", "Employment", "Clients"]} />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col sm={4} className="d-flex justify-content-center">
            <Navbar expand="lg">
              <div className={styles.frameGroup}>
                <Button className={styles.btnHeader} onClick={handleUploadClick}>
                  Upload CV
                </Button>
                <Button className={styles.btnHeader} onClick={handleContactUsClick}>
                  Contact us
                </Button>
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
                <input
                  type="file"
                  accept=".pdf"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

