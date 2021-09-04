import styled from "styled-components";
import { colors } from "../../config/elements";

export const Styles = styled.div`
  .logo-area {
    height: 82px;
    text-transform: uppercase;
    padding-top: 10px;
    font-weight: 900;

    .logo {
      a {
        img {
          @media (max-width: 991px) {
            max-width: 100%;
          }
        }
      }
    }

    .menu-box {
      display: flex;
      justify-content: space-between;

      .nav.menu-nav {
        display: flex;
        .nav-item {
          display: block;

          a.nav-link {
            font-size: 14px;
            color: ${colors.black1};
            // padding: 10px 5px;
            padding: 20px 10px;

            i {
              font-size: 12px;
            }

            &:after {
              content: none;
            }

            &:hover {
              font-size: 16px;
              color: ${colors.blue};
              text-decoration: underline;
            }

            @media (max-width: 1199px) {
              padding: 10px 2px 20px;
              letter-spacing: 0;
            }
          }
        }
      }
    }

    .apply-btn {
      margin: 12px 10px;

      a {
        font-size: 13px;
        color: #ffffff;
        background: ${colors.gr_bg};
        display: inline-block;
        text-align: center;
        padding: 11px;
        border-radius: 5px;
        position: relative;

        &:hover {
          background: ${colors.gr_bg2};
        }
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }
`;
