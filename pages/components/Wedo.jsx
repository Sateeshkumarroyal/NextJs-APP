import React from "react";
import styles from "../../pages/index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

export default function WeDo() {
  const handleWeDoClick = () => {
    window.location.href = "https://www.sourceflow.co.uk/";
  };

  return (
    <div className={styles.sfTextwithimage001}>
      <div className={styles.container5}>
        <div className={styles.text}>
          <b className={styles.sector}>What we do</b>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Tellus purus cras ornare
            placerat enim at ut. Lorem egestas aliquam dis dignissim. Mauris
            ultricies tortor netus purus proin. Amet cursus posuere velit odio
            nibh auctor. Id nulla vitae ipsum morbi tellus eget lacus aliquet
            faucibus. Varius donec arcu placerat augue eget.
          </div>
          <Button
            variant="outline-primary"
            className={styles.servicesButton}
            onClick={handleWeDoClick}
          >
            View our services
          </Button>
        </div>
        <div className={styles.image1}>
          <img
            className={styles.imgPlaceholderIcon}
            alt=""
            src="/imgplaceholder@2x.png"
          />
        </div>
      </div>
    </div>
  );
}
