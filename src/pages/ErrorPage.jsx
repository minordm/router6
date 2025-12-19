import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  if (isRouteError) {
    return (
      <>
        <h2>{error.status}</h2>
        <h3>{error.statusText || "Something goes wrong!"}</h3>
      </>
    );
  }

  return <h2>Error</h2>;
}
