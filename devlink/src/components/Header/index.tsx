import './header.css'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { auth } from '../../services/firebaseConnection'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

// sigOut -> é para deslogar o usuário.

export const Header = () => {
  async function handleLogout() {
    await signOut(auth)
    toast.success('Até logo mais!')
  }

  return (
    <header className='admin-header'>
      <nav className='nav-header'>
        <button onClick={handleLogout}>
          <BiLogOut size={28} color='#DB2629' />
        </button>
        <Link to={'/admin'}>Links</Link>
        <Link to={'/admin/social'}>Redes Sociais</Link>
      </nav>
    </header>
  )
}
