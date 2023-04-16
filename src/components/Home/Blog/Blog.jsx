import { Col, Container, Image, Row } from "react-bootstrap";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import blogImg1 from "../../../images/blog-img-1.webp";
import blogImg2 from "../../../images/blog-img-2.webp";
import blogImg3 from "../../../images/blog-img-3.webp";
import blogImg4 from "../../../images/blog-img-4.webp";
import styles from "../../../styles/Blog.module.css";

const Blog = () => {
  return (
    <>
      <section id="Blog">
        <div className={styles.blog_wrapper}>
          <Container>
            <div className={styles.blog_title}>
              <h2>
                Our <span>Blog</span>
              </h2>
            </div>
            <Row>
              <Col lg="6">
                <div className="blog-card">
                  <div className={styles.blog_card_img}>
                    <Image className="img-fluid" src={blogImg1.src}></Image>
                  </div>
                  <div className={styles.blog_card_content}>
                    <div className={styles.blog_category}>
                      <a href="#">VITA DA STUDENTE</a>
                    </div>
                    <div className={styles.blog_card_time}>
                      <p>
                        <FaRegCalendarAlt></FaRegCalendarAlt>4 Marzo 2023
                      </p>
                      <p>
                        <FaRegClock></FaRegClock>4 min
                      </p>
                    </div>
                    <a className={styles.blog_card_title} href="">
                      Come acquistare su TicketOne con il tuo Bonus Cultura
                    </a>
                    <p>
                      Concerti, musei e tanto altro ancora: sono alcuni dei
                      servizi che si possono acquistare online con un bonus che
                      il governo italiano ha destinato ai 18enni: in questa
                      guida vedremo...
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="6" className="pt-5 pt-lg-0">
                <div className={styles.blog_right_card}>
                  <Row className="align-items-start">
                    <Col lg="6">
                      <div className={styles.blog_right_card_img}>
                        <Image className="img-fluid" src={blogImg2.src}></Image>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className={styles.blog_card_content}>
                        <div className={styles.blog_category}>
                          <a href="#">MATURITÀ</a>
                        </div>
                        <div className={styles.blog_card_time}>
                          <p>
                            <FaRegCalendarAlt></FaRegCalendarAlt>4 Marzo 2023
                          </p>
                          <p>
                            <FaRegClock></FaRegClock>4 min
                          </p>
                        </div>
                        <a className={styles.blog_right_card_title} href="">Maturità 2023: prima prova e probabili tracce</a>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={styles.blog_right_card}>
                  <Row className="align-items-start pt-5 pt-lg-0">
                    <Col lg="6">
                      <div className={styles.blog_right_card_img}>
                        <Image className="img-fluid" src={blogImg3.src}></Image>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className={styles.blog_card_content}>
                        <div className={styles.blog_category}>
                          <a href="#">MATURITÀ</a>
                        </div>
                        <div className={styles.blog_card_time}>
                          <p>
                            <FaRegCalendarAlt></FaRegCalendarAlt>4 Marzo 2023
                          </p>
                          <p>
                            <FaRegClock></FaRegClock>4 min
                          </p>
                        </div>
                        <a className={styles.blog_right_card_title} href="">Maturità 2023: prima prova e probabili tracce</a>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className={styles.blog_right_card}>
                  <Row className="align-items-start pt-5 pt-lg-0">
                    <Col lg="6">
                      <div className={styles.blog_right_card_img}>
                        <Image className="img-fluid" src={blogImg4.src}></Image>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className={styles.blog_card_content}>
                        <div className={styles.blog_category}>
                          <a href="#">MATURITÀ</a>
                        </div>
                        <div className={styles.blog_card_time}>
                          <p>
                            <FaRegCalendarAlt></FaRegCalendarAlt>4 Marzo 2023
                          </p>
                          <p>
                            <FaRegClock></FaRegClock>4 min
                          </p>
                        </div>
                        <a className={styles.blog_right_card_title} href="">Maturità 2023: prima prova e probabili tracce</a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Blog;
