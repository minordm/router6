import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router";

export const Blogpage = () => {
  const { posts } = useLoaderData();

  return (
    <div className="">
      <h1>Our news</h1>
      <Link to={"/posts/new"}>Add new post</Link>
      <Suspense fallback={<p>Posts loading...</p>}>
        <Await resolve={posts}>
          {(resolvedPosts) => (
            <>
              {resolvedPosts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                  <li>{post.title}</li>
                </Link>
              ))}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

export const blogLoader = async () => {
  return { posts: getPosts() };
};
