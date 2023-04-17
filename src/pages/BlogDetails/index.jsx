import Header from "@/components/Header/Header";
import { Col, Container, Image, Row } from "react-bootstrap";
import blog_details1 from "../../images/blog-details1.jpg";
import blog_details2 from "../../images/blog-details2.jpg";
import recent_post1 from "../../images/recent-post1.webp";
import recent_post2 from "../../images/recent-post2.webp";
import styles from "../../styles/BlogDetails.module.css";

const index = () => {
  return (
    <>
      <Header></Header>
      <section id="Blog_details">
        <div className={styles.blog_details_wrapper}>
          <Container>
            <div className={styles.blog_details_top}>
              <h2>Maturity 2023: how to face the oral interview</h2>
              <a href="#">MATURITY</a>
            </div>
            <Row>
              <Col lg="8">
                <div className={styles.blog_details_content}>
                  <h3>Our advice: how best to prepare for your oral</h3>
                  <Image className="img-fluid" src={blog_details1.src}></Image>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem eaque enim totam at impedit nesciunt ipsam nostrum
                    voluptatem nobis corrupti.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                  <h3>Our advice: how best to prepare for your oral</h3>
                  <Image className="img-fluid" src={blog_details2.src}></Image>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem eaque enim totam at impedit nesciunt ipsam nostrum
                    voluptatem nobis corrupti.
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quis eaque, culpa cum nostrum, quia commodi sapiente
                    itaque quos voluptatem recusandae debitis quidem ea eum
                    rerum neque ex natus saepe consequatur soluta corrupti
                    provident pariatur! Accusamus possimus pariatur tenetur.
                  </p>
                </div>
              </Col>
              <Col lg="4">
                <div className={styles.recent_post}>
                  <div className={styles.recent_post_title}>
                    <h4>Recent Post</h4>
                  </div>
                  <div className="row">
                    <Col lg="5">
                      <div className={styles.recent_post_img}>
                        <Image
                          className="img-fluid"
                          src={recent_post1.src}
                        ></Image>
                      </div>
                    </Col>
                    <Col lg="7">
                      <div className={styles.recent_post_content}>
                        <a href="">
                          Maturity 2023: first test and probable traces
                        </a>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className={styles.recent_post}>
                  <div className="row">
                    <Col lg="5">
                      <div className={styles.recent_post_img}>
                        <Image
                          className="img-fluid"
                          src={recent_post2.src}
                        ></Image>
                      </div>
                    </Col>
                    <Col lg="7">
                      <div className={styles.recent_post_content}>
                        <a href="#">
                          Maturity 2023: first test and probable traces
                        </a>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className={styles.recent_post}>
                  <div className="row">
                    <Col lg="5">
                      <div className={styles.recent_post_img}>
                        <Image
                          className="img-fluid"
                          src={recent_post1.src}
                        ></Image>
                      </div>
                    </Col>
                    <Col lg="7">
                      <div className={styles.recent_post_content}>
                        <a href="">
                          Maturity 2023: first test and probable traces
                        </a>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className={styles.recent_post}>
                  <div className="row">
                    <Col lg="5">
                      <div className={styles.recent_post_img}>
                        <Image
                          className="img-fluid"
                          src={recent_post2.src}
                        ></Image>
                      </div>
                    </Col>
                    <Col lg="7">
                      <div className={styles.recent_post_content}>
                        <a href="#">
                          Maturity 2023: first test and probable traces
                        </a>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default index;
