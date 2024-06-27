import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Navbar />
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
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
