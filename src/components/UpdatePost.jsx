import { Form } from "react-router";

export const UpdatePost = ({ id, title, body, userId, submitting }) => {
  return (
    <Form action={`/posts/${id}/edit`} method="post">
      <label>
        Title:
        <input type="text" name="title" defaultValue={title} />
      </label>
      <label>
        Body:
        <input type="text" name="body" defaultValue={body} />
      </label>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="id" value={id} />
      <input type="submit" value="Update post" disabled={submitting} />
    </Form>
  );
};
