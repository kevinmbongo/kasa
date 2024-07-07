import '../../styles/index.scss'
import logo from '../../assets/images/LOGO.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <h1 className="App-header"> Page Home 🏠</h1>
      <img src={logo} alt="log" />
      <Footer />
    </div>
  )
}

export default Home
