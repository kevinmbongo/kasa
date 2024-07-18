import '../../styles/index.scss'
import homePicture from '../../assets/images/Home_picture.png'
import Thumbnail from '../../components/Thumbnail'

function Home() {
  return (
    <div className="home_container">
      <section className="home_banner_section">
        <img className="home_banner_img" src={homePicture} alt="home" />
        <div className="home_banner_title_container centered_flex">
          <h1 className="home_banner_title"> Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className="home_main_section">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Thumbnail title="Titre de la location" />
          ))}
      </section>
    </div>
  )
}

export default Home
