import '../../styles/index.scss'
import homePicture from '../../assets/images/Home_picture.png'
import Thumbnail from '../../components/Thumbnail'
import { locations } from '../../data/Location'
import Banner from '../../components/Banner'

function Home() {
  return (
    <div className="home_container">
      <Banner
        title="Chez vous, partout et ailleurs"
        src={homePicture}
        alt="home"
      />

      <section className="home_main_section">
        {locations.map((location) => (
          <Thumbnail
            key={location.id}
            title={location.title}
            link={`Location/${location.id}`}
            image={location.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
