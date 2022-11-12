import './home.css'
import { Social } from '../../components/Social'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export const Home = () => {
  return (
    <div className='home-container'>
      <h1>Renan Marcos Soder</h1>
      <span>Veja meus links👇</span>

      <main className='links-container'>
        <section className='link-area'>
          <a href='#'>
            <p className='link-text'>Canal no youTube</p>
          </a>
        </section>
        <footer>
          <Social url='https://www.facebook.com'>
            <FaFacebook size={35} color='#FFF' />
          </Social>
          <Social url='https://www.instagran.com'>
            <FaInstagram size={35} color='#FFF' />
          </Social>
          <Social url='https://www.youtube.com'>
            <FaYoutube size={35} color='#FFF' />
          </Social>
        </footer>
      </main>
    </div>
  )
}
