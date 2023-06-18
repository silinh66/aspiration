import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import TrangCh12 from "./pages/TrangCh12";
import ThngTinTuynSinh from "./pages/ThngTinTuynSinh";
import ThngTinTuynSinh1 from "./pages/ThngTinTuynSinh1";
import ThngTinTuynSinhThmTr from "./pages/ThngTinTuynSinhThmTr";
import ThngTinTuynSinhXo from "./pages/ThngTinTuynSinhXo";
import ThngTinTuynSinh2 from "./pages/ThngTinTuynSinh2";
import ThngTinTuynSinhChnhSa from "./pages/ThngTinTuynSinhChnhSa";
import ThngTinTuynSinhChnhSa1 from "./pages/ThngTinTuynSinhChnhSa1";
import ThngTinTuynSinh3 from "./pages/ThngTinTuynSinh3";
import ThngTinTuynSinh21 from "./pages/ThngTinTuynSinh21";
import ThngTinTuynSinhThmTr1 from "./pages/ThngTinTuynSinhThmTr1";
import ThngTinTuynSinh11 from "./pages/ThngTinTuynSinh11";
import ThngTinTuynSinhChnhSa2 from "./pages/ThngTinTuynSinhChnhSa2";
import ThngTinTuynSinhChnhSa3 from "./pages/ThngTinTuynSinhChnhSa3";
import TrangCh2 from "./pages/TrangCh2";
import TrangCh1 from "./pages/TrangCh1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh1":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-thm-trng-1":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-xo":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-3":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-3":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-thm-trng-2":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-1":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-xc-nhn":
        title = "";
        metaDescription = "";
        break;
      case "/thng-tin-tuyn-sinh-chnh-sa-1":
        title = "";
        metaDescription = "";
        break;
      case "/trang-ch-2":
        title = "";
        metaDescription = "";
        break;
      case "/trang-ch-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<TrangCh12 />} />
      <Route path="/thng-tin-tuyn-sinh" element={<ThngTinTuynSinh />} />
      <Route path="/thng-tin-tuyn-sinh1" element={<ThngTinTuynSinh1 />} />
      <Route
        path="/thng-tin-tuyn-sinh-thm-trng-1"
        element={<ThngTinTuynSinhThmTr />}
      />
      <Route path="/thng-tin-tuyn-sinh-xo" element={<ThngTinTuynSinhXo />} />
      <Route path="/thng-tin-tuyn-sinh2" element={<ThngTinTuynSinh2 />} />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-3"
        element={<ThngTinTuynSinhChnhSa />}
      />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-2"
        element={<ThngTinTuynSinhChnhSa1 />}
      />
      <Route path="/thng-tin-tuyn-sinh-3" element={<ThngTinTuynSinh3 />} />
      <Route path="/thng-tin-tuyn-sinh-2" element={<ThngTinTuynSinh21 />} />
      <Route
        path="/thng-tin-tuyn-sinh-thm-trng-2"
        element={<ThngTinTuynSinhThmTr1 />}
      />
      <Route path="/thng-tin-tuyn-sinh-1" element={<ThngTinTuynSinh11 />} />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-xc-nhn"
        element={<ThngTinTuynSinhChnhSa2 />}
      />
      <Route
        path="/thng-tin-tuyn-sinh-chnh-sa-1"
        element={<ThngTinTuynSinhChnhSa3 />}
      />
      <Route path="/trang-ch-2" element={<TrangCh2 />} />
      <Route path="/trang-ch-1" element={<TrangCh1 />} />
    </Routes>
  );
}
export default App;
