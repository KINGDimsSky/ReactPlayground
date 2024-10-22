import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-y-2 min-h-screen justify-center items-center">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="my-5 text-xl">Sorry, an Unexpected error has occured</p>
        <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage