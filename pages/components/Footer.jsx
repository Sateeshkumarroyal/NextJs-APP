import React from "react";
import styles from "../../styles/footer.module.scss";

export default function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className={`container-fluid ${styles.footer2}`}>
          <div className="row">
            <div className={`col-md-4 col-sm-12 ${styles.col}`}>
              <b className={styles.softwareRecruitmentCo}>
                Software Recruitment Co.
              </b>
              <div className={styles.socialIcons}>
                <a href="https://www.linkedin.com/company/sourceflow/" className={styles.faBrandslinkedinIn}>
                  <img className={styles.vectorIcon1} alt="LinkedIn" src="/vector1.svg" />
                </a>
                <a href="https://m.facebook.com/profile.php?id=100076188764660" className={styles.icbaselineFacebook}>
                  <img className={styles.vectorIcon2} alt="Facebook" src="/vector2.svg" />
                </a>
                <a href="#" className={styles.icbaselineFacebook}>
                  <img className={styles.vectorIcon3} alt="Facebook" src="/vector3.svg" />
                </a>
                <a href="#" className={styles.icbaselineFacebook}>
                  <img className={styles.vectorIcon4} alt="Facebook" src="/vector4.svg" />
                </a>
              </div>
            </div>
            <div className={`col-md-2 col-sm-4 ${styles.col1}`}>
              <b className={styles.softwareRecruitmentSpecialis}>Explore</b>
              <div className={styles.navItems}>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Homepage
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  For jobseekers
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  For clients
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Our sectors
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Resources
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Contact us
                </div>
              </div>
            </div>
            <div className={`col-md-2 col-sm-4 ${styles.col1}`}>
              <b className={styles.softwareRecruitmentSpecialis}>Sectors</b>
              <div className={styles.navItems}>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Software engineering
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>DevOps</div>
                <div className={styles.softwareRecruitmentSpecialis}>Cloud</div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Infrastructure
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>Testing</div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Security
                </div>
              </div>
            </div>
            <div className={`col-md-4 col-sm-4 ${styles.col1}`}>
              <b className={styles.softwareRecruitmentSpecialis}>Services</b>
              <div className={styles.navItems}>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Website
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Digitel Marketing
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Analytics
                </div>
                <div className={styles.softwareRecruitmentSpecialis}>
                  Integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
