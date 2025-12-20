import { isRouteErrorResponse, useAsyncError } from "react-router";

export default function ErrorPage() {
  const error = useAsyncError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h2>{error.status}</h2>
        <h3>{error.statusText || "Something goes wrong!"}</h3>
      </>
    );
  }

  return <h2>Error not in fetch</h2>;
}
