function Banner(props) {
  const { title, src, alt, classNameSection } = props
  return (
    <section className={`banner_section ${classNameSection}`}>
      <img className="banner_img" src={src} alt={alt} />
      <div className="banner_title_container centered_flex">
        <h1 className="banner_title">{title}</h1>
      </div>
    </section>
  )
}
export default Banner
