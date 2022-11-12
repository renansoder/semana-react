import { FormEvent, useState } from 'react'
import './login.css'
import { Logo } from '../../components/Logo'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email === '' || password === '') {
      toast.error('Preencha os campos!')
      return
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success('Bem vindo de volta!')
        navigate('/admin', { replace: true })
      })
      .catch(() => {
        toast.error('Erro no login')
      })
  }

  return (
    <div className='login-container'>
      <Logo />
      <form className='form' onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Digite seu email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Digite sua senha'
          autoComplete='on'
          value={password}
          onChange={e => setPasword(e.target.value)}
        />
        <button type='submit'>Acessar</button>
      </form>
    </div>
  )
}
