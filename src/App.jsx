import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { blogLoader, Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { postLoader, Singlepage } from "./pages/Singlepage";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";
import { RequireAuth } from "./hoc/RequireAuth";
import { Loginpage } from "./pages/Loginpage";
import { AuthProvider } from "./hoc/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="posts" element={<Blogpage />} loader={blogLoader} />
      <Route path="posts/:id" element={<Singlepage />} loader={postLoader} />
      <Route
        path="posts/:id/edit"
        element={
          <RequireAuth>
            <Editpost />
          </RequireAuth>
        }
      />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
      />
      <Route path="login" element={<Loginpage />} />
      <Route path="about/*" element={<About />}>
        <Route path="contact" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Route>

      {/* переадресация */}
      <Route path="about-us" element={<Navigate to="/about" replace />} />
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
