import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router";

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { blogLoader, Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";
import { postLoader, Singlepage } from "./pages/Singlepage";
import { Createpost, createPostAction } from "./pages/Createpost";
import { Editpost, updatePostAction } from "./pages/Editpost";
import { RequireAuth } from "./hoc/RequireAuth";
import { LoginPage } from "./pages/Loginpage";

export const router = createBrowserRouter(
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
        loader={postLoader}
        action={updatePostAction}
      />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
        action={createPostAction}
      />
      <Route path="login" element={<LoginPage />} />
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
