import { Link } from 'react-router-dom'

function error() {
  return (
    <div className="error_container">
      <h1 className="error_title"> 404</h1>
      <p className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error_link" to="">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default error
