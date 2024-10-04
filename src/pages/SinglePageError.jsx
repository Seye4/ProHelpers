import { useRouteError } from "react-router-dom"

const SinglePageError = () => {
    const error = useRouteError()
  return (
    <h2>We have encountered an error</h2>
  )
}

export default SinglePageError