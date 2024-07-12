import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div
        id="error-page"
        className="fixed top-0 left-0 z-1 h-full w-full flex items-center flex-col justify-center gap-10 text-center"
      >
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="text-gray-500 text-lg">
            {error.statusText || error.message}
          </i>
        </p>
        <NavLink to="/" className="text-red-500 hover:underline">
          Return to Home
        </NavLink>
      </div>
    </>
  );
};
export default ErrorPage;
