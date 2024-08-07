import AboutPicture from '../../assets/images/kalen_emsley_Bkci_8qcdvQ_unsplash2.png'
import Banner from '../../components/Banner'
import Dropdown from '../../components/Dropdown'

const dropdownInfos = [
  {
    name: 'Fiabilité',
    text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
  },
  {
    name: 'Respect',
    text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    name: 'Service',
    text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    name: 'Sécurité',
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function About() {
  return (
    <div className="centered_flex about_container">
      <Banner className="" src={AboutPicture} alt="banner picture" />

      <section className="about_dropdown_section">
        {dropdownInfos.map((dropdownInfo, index) => (
          <Dropdown
            key={index}
            name={dropdownInfo.name}
            text={dropdownInfo.text}
          />
        ))}
      </section>
    </div>
  )
}
export default About
