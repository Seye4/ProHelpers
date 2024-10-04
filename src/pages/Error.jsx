import './css/Error.css'
import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()

  if(error.status === 404 )
  {
    return (
      <main className="error-page">
        <h1>404</h1>
        <h3>Page not found</h3>
        <p>Sorry we couldn’t find the page you are looking for.</p>
        <Link to={'/'}>Back Home</Link>
      </main>
    )
  }
  return (
    <main className='error-page'>
      <h3>Something went wrong</h3>
      <Link to={'/'}>Back Home</Link>
    </main>
  )
}

export default Error