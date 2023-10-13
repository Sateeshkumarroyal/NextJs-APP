import React, { useState, useEffect } from "react";
import styles from "../../pages/index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Carousel ,Button} from "react-bootstrap";

export default function Insights() {


    return (
           <Container fluid className={styles.latestBlogs}>
           <div className={styles.ctaCard}>
               <div className={styles.blogInfo}>
                   <div className={styles.viewOurBlogsWrapper}>
                       <b className={styles.softwareRecruitmentCo}>View our blogs</b>
                   </div>
               </div>
           </div>
           <Row>
               {/* Blog Card 1 */}
               <Col xs={12} md={6} lg={4}>
                   <Card className={styles.sfBlogcard001}>
                       <div className={styles.imgPlaceholder}>
                           <div className={styles.tag3}>
                               <div className={styles.softwareRecruitmentCo}>Education</div>
                           </div>
                       </div>
                       <Card.Body>
                           <Card.Text className={styles.postedDate3}>25/08/2023</Card.Text>
                           <Card.Title className={styles.articleTitle}>Resources for developers</Card.Title>
                           <Card.Text className={styles.loremIpsumDolor}>
                               Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.
                           </Card.Text>
                           <div className={styles.authordate}>
                               <div className={styles.author}>
                                   <img className={styles.unsplashifgrcqhznqgIcon} alt="" src="/unsplashifgrcqhznqg@2x.png" />
                                   <div className={styles.author1}>J. Gonzalez</div>
                               </div>
                           </div>
                       </Card.Body>
                       <Card.Footer>
                           {/* <img className={styles.arrow1Icon} alt="" src="/arrow-1.svg" /> */}
                       </Card.Footer>
                   </Card>
               </Col>

               {/* Blog Card 2 */}
               <Col xs={12} md={6} lg={4}>
                   <Card className={styles.sfBlogcard0011}>
                       <div className={styles.imgPlaceholder1}>
                           <div className={styles.tag4}>
                               <div className={styles.softwareRecruitmentCo}>Education</div>
                           </div>
                       </div>
                       <Card.Body>
                           <Card.Text className={styles.postedDate3}>25/08/2023</Card.Text>
                           <Card.Title className={styles.articleTitle}>Resources for developers</Card.Title>
                           <Card.Text className={styles.loremIpsumDolor}>
                               Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.
                           </Card.Text>
                           <div className={styles.authordate}>
                               <div className={styles.author}>
                                   <img
                                       className={styles.unsplashifgrcqhznqgIcon}
                                       alt=""
                                       src="/unsplashifgrcqhznqg@2x.png"
                                   />
                                   <div className={styles.author1}>J. Gonzalez</div>
                               </div>
                           </div>
                       </Card.Body>
                       <Card.Footer>
                           {/* <img className={styles.arrow1Icon} alt="" src="/arrow-11.svg" /> */}
                       </Card.Footer>
                   </Card>
               </Col>

               {/* Blog Card 3 */}
               <Col xs={12} md={6} lg={4}>
                   <Card className={styles.sfBlogcard0012}>
                       <div className={styles.imgPlaceholder2}>
                           <div className={styles.tag3}>
                               <div className={styles.softwareRecruitmentCo}>Education</div>
                           </div>
                       </div>
                       <Card.Body>
                           <Card.Text className={styles.postedDate2}>25/08/2023</Card.Text>
                           <Card.Title className={styles.articleTitle}>Resources for developers</Card.Title>
                           <Card.Text className={styles.loremIpsumDolor}>
                               Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis.
                           </Card.Text>
                           <div className={styles.authordate}>
                               <div className={styles.author}>
                                   <img className={styles.unsplashifgrcqhznqgIcon} alt="" src="/unsplashifgrcqhznqg@2x.png" />
                                   <div className={styles.author1}>J. Gonzalez</div>
                               </div>
                           </div>
                       </Card.Body>
                       <Card.Footer>
                           {/* <img className={styles.arrow1Icon} alt="" src="/arrow-1.svg" /> */}
                       </Card.Footer>
                   </Card>
               </Col>

               {/* Blog Card 4 */}
               <Col xs={12} md={6} lg={4}>
                   <Card className={styles.sfBlogcard0013}>
                       <div className={styles.imgPlaceholder3}>
                           <div className={styles.tags} />
                           <div className={styles.tag3}>
                               <div className={styles.softwareRecruitmentCo}>Education</div>
                           </div>
                       </div>
                       <Card.Body>
                           <Card.Text className={styles.postedDate6}>25/08/2023</Card.Text>
                           <Card.Title className={styles.articleTitle3}> Gain skills and fast track your career</Card.Title>
                           <Card.Text className={styles.content3}>
                               Lorem ipsum dolor sit amet consectetur. Pellentesque integer
                               scelerisque amet mauris dolor aliquam lobortis.
                           </Card.Text>
                           <div className={styles.authordate3}>
                               <div className={styles.author}>
                                   <img className={styles.unsplashifgrcqhznqgIcon} alt="" src="/unsplashifgrcqhznqg@2x.png" />
                                   <div className={styles.author1}>J. Gonzalez</div>
                               </div>
                           </div>
                       </Card.Body>
                       <Card.Footer>
                           {/* <img className={styles.arrow1Icon3} alt="" src="/arrow-12.svg" /> */}
                       </Card.Footer>
                   </Card>
               </Col>

               {/* Blog Card 5 */}
               <Col xs={12} md={6} lg={4}>
                   <Card className={styles.sfBlogcard0014}>
                       <div className={styles.imgPlaceholder4}>
                           <div className={styles.tag7}>
                               <div className={styles.softwareRecruitmentCo}>Education</div>
                           </div>
                       </div>
                       <Card.Body>
                           <Card.Text className={styles.postedDate6}>25/08/2023</Card.Text>
                           <Card.Title className={styles.articleTitle3}>Top Tips for a stand out CV</Card.Title>
                           <Card.Text className={styles.content3}>
                               Lorem ipsum dolor sit amet consectetur. Pellentesque integer
                               scelerisque amet mauris dolor aliquam lobortis.</Card.Text>
                           <div className={styles.authordate3}>
                               <div className={styles.author}>
                                   <img className={styles.unsplashifgrcqhznqgIcon} alt="" src="/unsplashifgrcqhznqg@2x.png" />
                                   <div className={styles.author1}>J. Gonzalez</div>
                               </div>
                           </div>
                       </Card.Body>
                       <Card.Footer>
                           {/* <img className={styles.arrow1Icon3} alt="" src="/arrow-13.svg" /> */}
                       </Card.Footer>
                   </Card>
               </Col>
           </Row>

           <div className={styles.text2}>
               Lorem ipsum dolor sit amet consectetur. A aliquam pellentesque malesuada venenatis consectetur egestas dui.
           </div>
           <b className={styles.heading3}>Latest insights</b>
       </Container>
    ) }



            
