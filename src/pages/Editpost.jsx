import { useActionData, useLoaderData, useNavigation } from "react-router";
import { UpdatePost } from "../components/UpdatePost";

export const Editpost = () => {
  // const { id } = useParams();
  const data = useActionData();
  const { post, id } = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="">
      {data?.message && (
        <div style={data.style || { color: "blue" }}>{data.message}</div>
      )}
      <h1>Edit post {id}</h1>
      <UpdatePost {...post} submitting={navigation.state === "submitting"} />
    </div>
  );
};

async function updatePost(post) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post.get("id")}`,
    { method: "PUT", body: post }
  );
  return response.json();
}

export async function updatePostAction({ request }) {
  const formData = await request.formData();

  if (!formData.get("title") || !formData.get("body")) {
    return { message: "All field are required!!!", style: { color: "red" } };
  }

  const data = await updatePost(formData);

  return { message: `Post ${data.id} was successfully updated` };
}
