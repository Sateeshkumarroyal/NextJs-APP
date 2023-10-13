import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import styles from "../../styles/jobSeeker.module.scss"
export default function JobSeeker() {
    return (
        <Container fluid>
        <div className={styles.hero}>
        <div className={styles.heroChild} />
        <img className={styles.heroItem} alt="" src="/group-1.svg" />
        <div className={styles.container1}>
          <img
            className={styles.pexelsEdmondDantas4347366Icon1}
            alt=""
            src="/pexelsedmonddantas4347366-1@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.softwareRecruitmentSpecialisWrapper}>
              <div className={styles.softwareRecruitmentSpecialis}>
                Software Recruitment Specialists
              </div>
            </div>
            <div className={styles.elevateYourCareerParent}>
              <b className={styles.elevateYourCareer}>Elevate your career</b>
              <div className={styles.frameDiv}>
                <Form className={styles.wrapper}>
                  <Form.Control type="text" placeholder="E.g. networking" className={`${styles.customInput} rounded-left`}/>
                </Form>
                <Button className={styles.frameChild}>
                  Search jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Container>
      );
}

