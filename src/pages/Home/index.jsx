import '../../styles/index.scss'
import homePicture from '../../assets/images/Home_picture.png'
import Thumbnail from '../../components/Thumbnail'
import { locations } from '../../data/Location'

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
        {locations.map((location) => (
          <Thumbnail
            key={location.id}
            title={location.title}
            link={`Location/${location.id}`}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
