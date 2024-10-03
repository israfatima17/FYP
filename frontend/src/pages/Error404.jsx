import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <h1 className="text-8xl font-bold text-gray-900 dark:text-gray-50">
          404
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Oops, the page you&apos;re looking for could not be found.
        </p>
        <Link
          to={"/"}
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
