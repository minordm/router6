import { Form } from "react-router";

export default function NewPost({ submitting }) {
  return (
    <Form action="/posts/new" method="post">
      <label>
        Title: <input type="text" name="title" />
      </label>
      <label>
        Body: <input name="body" />
      </label>
      <input type="hidden" name="userId" value="1" />
      <input type="submit" value="Add post" disabled={submitting} />
    </Form>
  );
}
