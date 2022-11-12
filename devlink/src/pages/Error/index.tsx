import './error.css'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'

export const Error = () => {
  return (
    <div className='error'>
      <Logo />
      <h1>Página não encontrada!</h1>
      <p>Está página não existe.</p>
      <Link to='/' className='link'>
        Voltar para Home
      </Link>
    </div>
  )
}
