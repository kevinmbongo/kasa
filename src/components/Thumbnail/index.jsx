import { Link } from 'react-router-dom'

function Thumbnail(props) {
  const { title, link } = props
  return (
    <Link className="link" to={link}>
      <div className="thumbnail">
        <div className="thumbnail_title">
          <h2 className="thumbnail_h2">{title}</h2>
        </div>
      </div>
    </Link>
  )
}
export default Thumbnail
