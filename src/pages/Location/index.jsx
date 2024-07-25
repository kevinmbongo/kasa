import { useParams } from 'react-router-dom'

import Dropdown from '../../components/Dropdown'
import Tag from '../../components/Tag'
import { locations } from '../../data/Location'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'
function Location() {
  const { idLocation } = useParams()
  // function findId() {
  //   locations.find((location) => location.id === idLocation)
  // }

  function findCurrentLocation(array, id) {
    const foundObject = array.find((obj) => obj.id === id)
    return foundObject || null
  }

  const currentLocation = findCurrentLocation(locations, idLocation)

  return (
    <div className="centered_flex location_container ">
      <div className="container">
        <Carousel images={currentLocation.pictures} />

        <div className="location_main">
          <section className="location_profile_section">
            <div className="location_title">
              <div>
                <h2 className="location_title_h2">{currentLocation.title}</h2>
                <span className="location_title_span">
                  {currentLocation.location}
                </span>
              </div>
              <div className="location_tag_container">
                {currentLocation.tags.map((tagName, index) => (
                  <Tag key={index} tagName={tagName} />
                ))}
              </div>
            </div>
            <div className="location_profile_info">
              <div className="location_photo_profile">
                <p>{currentLocation.host.name}</p>
                <img src={currentLocation.host.picture} alt="profile img" />
              </div>

              <div className="location_rating">
                <Rating rating={currentLocation.rating} />
              </div>
            </div>
          </section>
          <section className="location_dropdown_section">
            <Dropdown name="Déscrition" text={currentLocation.description} />

            <Dropdown
              equipments={currentLocation.equipments}
              name="Équipements"
            />
          </section>
        </div>
      </div>
    </div>
  )
}
export default Location
