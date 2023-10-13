import React from "react";
import styles from "../../pages/index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function Footer() {
    return(
        <Container fluid>
        <div className={styles.sfLatestclients001}>
        <div className={styles.container2}>
          <div className={styles.logos} >
            <b className={styles.heading}>Who we work with</b>
          </div>
          <div className={styles.logos}>
            <div className={styles.logo1}>
              <a className={styles.re1mu3b1} />
            </div>
            <div className={styles.logo2}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.logo2}>
              <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
            </div>
            <div className={styles.logo1}>
              <img
                className={styles.screenshot20230829At315}
                alt=""
                src="/screenshot-20230829-at-315-1@2x.png"
              />
            </div>
            <div className={styles.logo1}>
              <img
                className={styles.screenshot20230829At316}
                alt=""
                src="/screenshot-20230829-at-316-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      </Container>
    )
}