import React from "react";
import styles from "../../pages/index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button, Row, Col ,Container } from 'react-bootstrap';
export default function LatestJobs() {
  return (
    <div className={styles.sfLatestjobs001}>
      <div className={styles.container2}>
        <div className={styles.header2}>
          <b className={styles.heading}>Latest Jobs</b>
        </div>
        <div className={styles.slider}>
        <Container>
          <Carousel 
            data-bs-theme="dark"
            indicators={true}
          // interval={null}
          // controls={false}
          >
            <Carousel.Item>
              <Row>
                <Col md={4} className={styles.cardAlign}>
                  <div className={styles.sfJobcard001}>
                    <div className={styles.sectors1}>
                      <div className={styles.tag}>
                        <img
                          className={styles.bxlpythonIcon}
                          alt=""
                          src="/bxlpython.svg"
                        />
                        <div className={styles.softwareRecruitmentCo}>Python</div>
                      </div>
                    </div>
                    <b className={styles.jobTitle}>Software Engineer</b>
                    <div className={styles.jobInfo}>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/icsharplocationon.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          Kualalumpur
                        </div>
                      </div>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/mdicash.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          MYR65,000
                        </div>
                      </div>
                    </div>
                    <div className={styles.description}>
                      Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas
                      eget in aliquam.
                    </div>
                    <Button
                      className={styles.buttonPrimary}
                      variant="outline-primary">
                      View this job
                    </Button>
                    <div className={styles.postedDate}>Posted on 29/08/2023</div>
                  </div>
                </Col>
          <Col md={4} className={styles.cardAlign}>
                  <div className={styles.sfJobcard0011}>
                    <div className={styles.sectors2}>
                      <div className={styles.tag}>
                        <img
                          className={styles.bxlpythonIcon}
                          alt=""
                          src="/bxlpython1.svg"
                        />
                        <div className={styles.softwareRecruitmentCo}>Angular</div>
                      </div>
                    </div>
                    <b className={styles.jobTitle}>Front-End Engineer</b>
                    <div className={styles.jobInfo}>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/icsharplocationon1.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          Kualalumpur
                        </div>
                      </div>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/mdicash1.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          MYR95,000
                        </div>
                      </div>
                    </div>
                    <div className={styles.description}>
                      Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas
                      eget in aliquam.
                    </div>
                    <Button
                      className={styles.buttonPrimary}
                      variant="outline-primary"
                    >
                      View this job
                    </Button>
                    <div className={styles.postedDate1}>Posted on 29/08/2023</div>
                  </div>
                </Col>
          <Col md={4} className={styles.cardAlign}>
                  <div className={styles.sfJobcard0012}>
                    <div className={styles.sectors1}>
                      <div className={styles.tag}>
                        <img
                          className={styles.bxlpythonIcon}
                          alt=""
                          src="/bxlpython1.svg"
                        />
                        <div className={styles.softwareRecruitmentCo}>Solidity</div>
                      </div>
                    </div>
                    <b className={styles.jobTitle}>BlockChain Engineer</b>
                    <div className={styles.jobInfo}>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/icsharplocationon.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          Singapore
                        </div>
                      </div>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/mdicash.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          SGD65,000
                        </div>
                      </div>
                    </div>
                    <div className={styles.description}>
                      Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas
                      eget in aliquam.
                    </div>
                    <Button
                      className={styles.buttonPrimary}
                      variant="outline-primary"
                    >
                      View this job
                    </Button>
                    <div className={styles.postedDate}>Posted on 29/08/2023</div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
          <Col md={4} className={styles.cardAlign}>
                  <div className={styles.sfJobcard001}>
                    <div className={styles.sectors1}>
                      <div className={styles.tag}>
                        <img
                          className={styles.bxlpythonIcon}
                          alt=""
                          src="/bxlpython.svg"
                        />
                        <div className={styles.softwareRecruitmentCo}>PL/SQL</div>
                      </div>
                    </div>
                    <b className={styles.jobTitle}>DataBase Engineer</b>
                    <div className={styles.jobInfo}>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/icsharplocationon.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          Kualalumpur
                        </div>
                      </div>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/mdicash.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          MYR65,000
                        </div>
                      </div>
                    </div>
                    <div className={styles.description}>
                      Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas
                      eget in aliquam.
                    </div>
                    <Button
                      className={styles.buttonPrimary}
                      variant="outline-primary">
                      View this job
                    </Button>
                    <div className={styles.postedDate}>Posted on 29/08/2023</div>
                  </div>
                </Col>
          <Col md={4} className={styles.cardAlign}>
                  <div className={styles.sfJobcard0011}>
                    <div className={styles.sectors2}>
                      <div className={styles.tag}>
                        <img
                          className={styles.bxlpythonIcon}
                          alt=""
                          src="/bxlpython1.svg"
                        />
                        <div className={styles.softwareRecruitmentCo}>Java</div>
                      </div>
                    </div>
                    <b className={styles.jobTitle}>BackEnd Engineer</b>
                    <div className={styles.jobInfo}>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/icsharplocationon1.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          Penang
                        </div>
                      </div>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/mdicash1.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          MYR75,000
                        </div>
                      </div>
                    </div>
                    <div className={styles.description}>
                      Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas
                      eget in aliquam.
                    </div>
                    <Button
                      className={styles.buttonPrimary}
                      variant="outline-primary"
                    >
                      View this job
                    </Button>
                    <div className={styles.postedDate1}>Posted on 29/08/2023</div>
                  </div>
                </Col>
          <Col md={4} className={styles.cardAlign}>
                  <div className={styles.sfJobcard0012}>
                    <div className={styles.sectors1}>
                      <div className={styles.tag}>
                        <img
                          className={styles.bxlpythonIcon}
                          alt=""
                          src="/bxlpython1.svg"
                        />
                        <div className={styles.softwareRecruitmentCo}>Tester</div>
                      </div>
                    </div>
                    <b className={styles.jobTitle}>QA Engineer</b>
                    <div className={styles.jobInfo}>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/icsharplocationon.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          Johar
                        </div>
                      </div>
                      <div className={styles.location}>
                        <img
                          className={styles.mdimenuDownIcon}
                          alt=""
                          src="/mdicash.svg"
                        />
                        <div className={styles.softwareRecruitmentSpecialis}>
                          MYR95,000
                        </div>
                      </div>
                    </div>
                    <div className={styles.description}>
                      Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas
                      eget in aliquam.
                    </div>
                    <Button
                      className={styles.buttonPrimary}
                      variant="outline-primary"
                    >
                      View this job
                    </Button>
                    <div className={styles.postedDate}>Posted on 29/08/2023</div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
          </Container>
        </div>
        {/* <div className={styles.footer}>
        <div className={styles.sliderControls}>
          <img
            className={styles.icbaselineArrowCircleLeftIcon}
            alt=""
            src="/icbaselinearrowcircleleft.svg"
          />
          <img
            className={styles.icbaselineArrowCircleLeftIcon}
            alt=""
            src="/icbaselinearrowcircleright.svg"
          />
        </div>
        <div className={styles.cta}>
          <div className={styles.viewMoreJobs}>View more jobs</div>
        </div>
      </div> */}
      </div>
    </div>
  )
}



