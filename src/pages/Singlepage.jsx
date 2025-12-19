import { Suspense } from "react";
import {
  Await,
  Link,
  useAsyncValue,
  useLoaderData,
  useNavigate,
} from "react-router";

const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <h3>Name: {comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export const Singlepage = () => {
  const { id, post, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate("/posts", { state: `123, id: ${id}` });
  // const goBack = () => navigate(-1);

  // это плохая практика
  // лучше использовать <Link>
  // const goHome = () => navigate("/", { replace: false });

  return (
    <div className="">
      <button onClick={goBack}>Go back</button>
      {/* <button onClick={goHome}>Go home</button> */}
      <Suspense fallback={<p>Загрузка поста...</p>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <h2>Comments:</h2>
      <Suspense fallback={<p>Загрузка комментариев...</p>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
      <Link to={`posts/${id}/edit`}>Edit this post</Link>
    </div>
  );
};

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return await response.json();
}

async function getComments(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );

  if (!response.ok) {
    throw new Response("", {
      status: response.status,
      statusText: "Cannot load comments",
    });
  }

  return response.json();
}

// функция принимает 2 параметра {, params}
export const postLoader = async ({ params }) => {
  const id = params.id;

  return { id, post: getPost(id), comments: await getComments(id) };
};
