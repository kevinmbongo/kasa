function Tag(props) {
  const { tagName } = props
  return (
    <div className="tag centered_flex">
      <span className="tag_span">{tagName}</span>
    </div>
  )
}
export default Tag
