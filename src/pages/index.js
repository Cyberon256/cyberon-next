import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { useTimer } from "react-timer-hook";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Styles } from "../styles/coming-soon";
import MetaTags from "../components/common/MetaTags";
import { MyTextInput } from "../components/Typograpy";
import CustomErrorMessage from "../components/CustomErrorMessage";
import Datas from "../data/coming-soon/coming-soon.json";

export default function Home() {
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);

  const postNesletter = async (values, actions) => {
    setErrors("");
    const body = JSON.stringify(values);

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body,
    };

    try {
      const response = await fetch(`/api/newsletter`, options);
      if (response.ok) {
        setSuccess(true);
        actions.restForm();
        actions.setSubmitting(false);
      } else {
        setErrors("Ooops! Something went wrong, please try again.");
      }
    } catch (err) {
      actions.setSubmitting(false);
      setErrors("Ooops! Could not submit your request, please try again.");
    }
  };

  const time = new Date();
  time.setDate(time.getDate() + 24);

  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp: time,
    onExpire: () => restart(time),
  });

  return (
    <div className="main-wrapper">
      <MetaTags
        title="Cyberon Technologies, Inc."
        description="Cyberon Technologies, Inc. Providers of leading edge and reliable technology solutions. Experts in Software Development"
        canonicalUrl="https://cyberontech.com"
      />

      <div className="site-wrap">
        <Styles>
          {/* Main Wrapper */}
          <div className="main-wrapper coming-soon-page">
            {/* Coming Soon Area */}
            <section
              className="coming-soon-area"
              style={{
                backgroundImage: `url(/assets/images/${Datas.backgroundImage})`,
              }}
            >
              <div className="cm-table">
                <div className="cm-tablecell">
                  <Container>
                    <Row>
                      <Col md="12" className="text-center">
                        <div className="cm-logo">
                          <Image
                            src="/cyberon-technologis-inc.svg"
                            width={171}
                            height={64}
                            alt="Cyberon Technologies logo"
                          />
                        </div>
                        <div className="launching-text">
                          <p>Coming soon</p>
                        </div>
                        <div className="countdown-timer">
                          <p>
                            <span>{days}</span>
                            Days
                          </p>
                          <p>
                            <span>{hours}</span>
                            Hours
                          </p>
                          <p>
                            <span>{minutes}</span>
                            Minutes
                          </p>
                          <p>
                            <span>{seconds}</span>
                            Seconds
                          </p>
                        </div>
                        <div className="email-subscrition">
                          {success ? (
                            <p className="sub-text">
                              Thank you! It&apos;s our turn to update your
                              mailbox.
                            </p>
                          ) : (
                            <>
                              <p className="sub-text">
                                Don&apos;t miss our news &amp; updates
                              </p>
                              <Formik
                                initialValues={{
                                  email: "",
                                }}
                                validationSchema={Yup.object({
                                  email: Yup.string()
                                    .email("Invalid email addresss")
                                    .required("* Required"),
                                })}
                                onSubmit={(values, actions) => {
                                  postNesletter(values, actions);
                                }}
                              >
                                {({ isSubmitting }) => (
                                  <Form className="form">
                                    <p className="form-control">
                                      <MyTextInput
                                        label=""
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                      />
                                    </p>

                                    {errors ? (
                                      <CustomErrorMessage
                                        errorValue={errors}
                                        color="red"
                                      />
                                    ) : null}
                                    <button type="submit">
                                      {isSubmitting
                                        ? "Submitting"
                                        : "Subscribe"}
                                    </button>
                                  </Form>
                                )}
                              </Formik>
                            </>
                          )}
                        </div>
                        <div className="cm-social">
                          <ul className="social list-unstyled list-inline">
                            <li className="list-inline-item">
                              <a href="https://www.facebook.com/CyberonTechnologiesInc/">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <Link href="/">
                                <a>
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link href="/">
                                <a>
                                  <i className="fab fa-linkedin-in"></i>
                                </a>
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link href="/">
                                <a>
                                  <i className="fab fa-youtube"></i>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </section>
          </div>
        </Styles>
      </div>
    </div>
  );
}
