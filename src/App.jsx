import { Route, Routes } from "react-router";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
