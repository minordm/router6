import { redirect, useNavigate, useNavigation } from "react-router";
import useAuth from "../hook/useAuth";
import NewPost from "../components/NewPost";

export const Createpost = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { sigout } = useAuth();

  const logout = () => {
    sigout(() => navigate("/", { replace: true }));
  };
  return (
    <div className="">
      <h1>Create post</h1>
      <NewPost submitting={navigation.state === "submitting"} />
      <button onClick={logout}>Log out</button>
    </div>
  );
};

async function createPost({ title, body, userId }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body, userId }),
    headers: { "Content-type": "application/json" },
  });

  const newPost = await response.json();

  return newPost;
}

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const post = await createPost({
    title: formData.get("title"),
    body: formData.get("body"),
    userId: 1,
  });
  return redirect(`/`);
}
