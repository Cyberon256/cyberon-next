import { GlobalStyle } from "../styles/global";
import ScrollToTop from "../helpers/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/assets/css/font-awesome.min.css"; // Fontawesome Icon
import "../../public/assets/css/line-awesome.min.css"; // Lineawesome Icon
import "../../public/assets/css/flaticon.css"; // FlatIcon
import "../../public/assets/css/animate.css"; // Animate css
import "../../public/assets/css/swiper.min.css"; // Swiper Slider
import "../../public/assets/css/modal-video.min.css"; // Modal Video
import "../../public/assets/css/normalize.css"; // Custom Style

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Component {...pageProps} />
    </>
  );
}
