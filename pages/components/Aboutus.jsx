import React from "react";
import styles from "../../pages/index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";

export default function AboutUS() {
  const handleAboutUsClick = () => {
    window.location.href = " https://www.sourceflow.co.uk/";
  };
  return (
    <div className={styles.sfTextwithvideo001}>
      <div className={styles.container5}>
        <video className={styles.image} autoPlay controls muted>
          <source
            src="/SourceFlow.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.text}>
          <b className={styles.sector}>Why us?</b>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet consectetur. Tellus purus cras ornare
            placerat enim at ut. Lorem egestas aliquam dis dignissim. Mauris
            ultricies tortor netus purus proin. Amet cursus posuere velit odio
            nibh auctor. Id nulla vitae ipsum morbi tellus eget lacus aliquet
            faucibus. Varius donec arcu placerat augue eget.
          </div>
          <Button variant="outline-primary"className= {styles.moreButton} onClick={handleAboutUsClick}>More about us</Button>
        </div>
      </div>
    </div>
  );
}

