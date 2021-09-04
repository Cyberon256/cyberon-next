import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "./styles/header";

export default function Header() {
  return (
    <Styles>
      {/* logo area */}
      <section className="logo-area">
        <Container>
          <Row>
            <Col md="3">
              <div className="logo">
                <Link href="/">
                  <a>
                    <Image
                      src="/cyberon-technologis-inc.svg"
                      width={171}
                      height={64}
                      // src="/logo.png"
                      // width={171}
                      // height={41}
                      alt="earlybird logo"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            <Col md="9">
              <div className="main-menu-box">
                <div className="menu-box">
                  <ul className="nav menu-nav">
                    <li className="nav-item active">
                      <Link href="/">
                        <a className="nav-link">home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us">
                        <a className="nav-link">about us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/services">
                        <a className="nav-link">products & services</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact-us">
                        <a className="nav-link">contact us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/gallery">
                        <a className="nav-link">Gallery</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="apply-btn">
                    <Link href="/apply-now">
                      <a className="nav-link">Open an Account</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
}
