import { Route, Routes } from "react-router";

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { Singlepage } from "./pages/Singlepage";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="/posts/:id" element={<Singlepage />} />
          <Route path="/posts/:id/edit" element={<Editpost />} />
          <Route path="/posts/new" element={<Createpost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
