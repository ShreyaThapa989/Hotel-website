import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Publiclayout from "./layout/Publiclayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Publiclayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
