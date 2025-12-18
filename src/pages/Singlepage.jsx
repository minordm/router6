import { Link, useNavigate, useParams } from "react-router";

import { useEffect, useState } from "react";

export const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate("/posts", { state: `123, id: ${id}` });
  // const goBack = () => navigate(-1);

  // это плохая практика
  // лучше использовать <Link>
  // const goHome = () => navigate("/", { replace: false });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div className="">
      <button onClick={goBack}>Go back</button>
      {/* <button onClick={goHome}>Go home</button> */}
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};
