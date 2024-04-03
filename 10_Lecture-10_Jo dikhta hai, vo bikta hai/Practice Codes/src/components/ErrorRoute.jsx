import { useRouteError } from "react-router-dom"
const ErrorRoute = () => {
    const err = useRouteError();
    console.log(err);
    return(
              <div className="error-container">
                  <h1>OOPS!</h1>
                  <h2>{err?.status} {err?.statusText}</h2>
                  <h3>{err?.data}</h3>
              </div>
    )
}
export default ErrorRoute