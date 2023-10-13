import React from "react";
import styles from "../../pages/index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button, Row, Col } from 'react-bootstrap';
export default function Sector() {
return(
    <div className={styles.sfLatestsectors001}>
    <div className={styles.container4}>
      <div className={styles.header3}>
        <b className={styles.heading}>Our sectors</b>
      </div>
      <div className={styles.slider1}>
  <Carousel
    data-bs-theme="dark"
    indicators={true}
  // interval={null}
  // controls={false}
  >
    <Carousel.Item>
      <Row>
        <Col sm={12} md={6}>
        <div className={styles.sfSectorcard001}>
          <div className={styles.frame}>
          </div>
        </div>
        </Col>
        <Col sm={12} md={6}>
        <div className={styles.sfSectorcard0011}>
          <div className={styles.frame}>
          </div>
        </div>
        </Col>
      </Row>
    </Carousel.Item>
    <Carousel.Item>
      <Row>
        <Col sm={12} md={6}>
        <div className={styles.sfSectorcard001}>
          <div className={styles.frame}>
          </div>
        </div>
        </Col>
        <Col sm={12} md={6}>
        <div className={styles.sfSectorcard0011}>
          <div className={styles.frame}>
          </div>
        </div>
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
</div>
    </div>
  </div>
)
}



