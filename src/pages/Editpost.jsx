import { useParams } from "react-router";

export const Editpost = () => {
  const { id } = useParams();
  return (
    <div className="">
      <h1>Edit post {id}</h1>
    </div>
  );
};
