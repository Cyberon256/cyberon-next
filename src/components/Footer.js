import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import BackToTop from "../components/common/BackToTop";
import { Styles } from "./styles/footer";

export default function Footer() {
  return (
    <Styles>
      <section className="copyright-area">
        <Container>
          <Row>
            <Col md="10">
              <div className="copy-text">
                <p>
                  &copy; {new Date().getFullYear()} EB Investors World | Made
                  with <i className="las la-heart"></i> by&nbsp;
                  <a
                    href="https://cyberontech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cyberon Technologies, Inc.
                  </a>
                </p>
              </div>
            </Col>
            <Col md="2" className="text-right">
              <ul className="social list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/something">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  {/* <a href="">
                    <i className="fab fa-twitter"></i>
                  </a> */}
                  <Link href="/">
                    <a>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  {/* <a href="">
                    <i className="fab fa-linkedin-in"></i>
                  </a> */}
                  <Link href="/">
                    <a>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  {/* <a href="">
                    <i className="fab fa-youtube"></i>
                  </a> */}
                  <Link href="/">
                    <a>
                      <i className="fab fa-youtube"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        {/* Back To Top */}
        <BackToTop />
      </section>
    </Styles>
  );
}
