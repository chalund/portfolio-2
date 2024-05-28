import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import AboutPage from "./Pages/AboutPage";
import PageNotFound from "./Pages/PageNotFound";
import HomePage from "./Pages/HomePage";
import MyWorkPage from "./Pages/MyWorkPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="my_work" element={<MyWorkPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
