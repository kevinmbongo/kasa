function Thumbnail(props) {
  const { title } = props
  return (
    <div className="thumbnail">
      <div className="thumbnail_title">
        <h2 className="thumbnail_h2">{title}</h2>
      </div>
    </div>
  )
}
export default Thumbnail
