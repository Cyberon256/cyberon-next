import styled from "styled-components";
import { colors } from "../../config/elements";

export const Styles = styled.div`
  .copyright-area {
    margin-top: 15px;
    padding: 25px 25px;
    background: ${colors.copy_bg};

    .copy-text {
      p {
        font-size: 14px;
        color: ${colors.text3};
        padding-top: 3px;

        i {
          font-size: 16px;
          color: #ec1f1f;
          margin: 0 2px;
        }

        a {
          font-size: 14px;
          color: ${colors.blue};

          &:hover {
            text-decoration: underline;
          }
        }
      }

      @media (max-width: 767px) {
        text-align: center;
        margin-bottom: 20px;
      }
    }

    .social {
      li {
        a {
          text-align: center;
          position: relative;
        }

        &:nth-child(1) {
          a {
            i {
              font-size: 24px;
              color: #4267b2;
              width: 28px;
            }

            &:hover {
              i {
                font-size: 22px;
                color: #ffffff !important;
              }
            }
          }
        }

        &:nth-child(2) {
          a {
            i {
              font-size: 24px;
              color: #1da1f2;
              width: 28px;
            }

            &:hover {
              i {
                font-size: 22px;
                color: #ffffff !important;
              }
            }
          }
        }

        &:nth-child(3) {
          a {
            i {
              font-size: 24px;
              color: #2867b2;
              width: 28px;
            }

            &:hover {
              i {
                font-size: 22px;
                color: #ffffff !important;
              }
            }
          }
        }

        &:nth-child(4) {
          a {
            i {
              font-size: 24px;
              color: #dd1343;
              width: 28px;
            }

            &:hover {
              i {
                font-size: 22px;
                color: #ffffff !important;
              }
            }
          }
        }
      }

      @media (max-width: 767px) {
        text-align: center;
      }
    }
  }
`;
