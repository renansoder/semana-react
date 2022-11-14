import { FormEvent, useState } from 'react'
import { Header } from '../../components/Header'
import './admin.css'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'
import { db } from '../../services/firebaseConnection'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export const Admin = () => {
  const [nameInput, setNameInput] = useState('')
  const [urlInput, setUrlInput] = useState('')
  const [backgroundInput, setBackgorundInput] = useState('#f1f1f1')
  const [textInput, setTextInput] = useState('#121212')

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (nameInput === null || urlInput === null) {
      toast.warn('Preencha todos os campos!')
      return
    }
    // addDoc cria o ID aleatório
    addDoc(collection(db, 'links'), {
      name: nameInput,
      url: urlInput,
      bg: backgroundInput,
      color: textInput,
      createdAt: new Date()
    })
      .then(() => {
        setNameInput('')
        setUrlInput('')
        toast.success('Link registrado!')
      })
      .catch(error => {
        console.log('Erro no registro: ' + error)
        toast.error('Erro ao cadastrar o Link!')
      })
  }

  return (
    <div className='admin-container'>
      <Header />
      <Logo />
      <form className='form' onSubmit={handleRegister}>
        <label className='label'>Nome do Link</label>
        <Input
          placeholder='Nome do Link...'
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
        />
        <label className='label'>Url do Link</label>
        <Input
          placeholder='Url do Link...'
          type={'url'}
          value={urlInput}
          onChange={e => setUrlInput(e.target.value)}
        />
        <section className='container-colors'>
          <div className='input-color'>
            <label className='label right'>
              <span> Fundo do Link</span>
            </label>
            <Input
              placeholder='Nome do Link...'
              type='color'
              value={backgroundInput}
              onChange={e => setBackgorundInput(e.target.value)}
            />
          </div>
          <div className='input-color'>
            <label className='label right'>
              <span>Cor do Link</span>
            </label>
            <Input
              placeholder='Nome do Link...'
              type='color'
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
            />
          </div>
        </section>
        {nameInput !== '' && (
          <div className='preview animate-pop'>
            <label className='label'>Veja como está ficando... 👇</label>
            <article
              className='list'
              style={{ marginBottom: 7, marginTop: 8, backgroundColor: backgroundInput }}
            >
              <p style={{ color: textInput }}>
                {' '}
                <span>{nameInput}</span>{' '}
              </p>
            </article>
          </div>
        )}
        <button className='btn-register' type='submit'>
          Cadastrar Link <MdAddLink size={24} color='#FFF' />
        </button>
      </form>
      <h2 className='title'>Meus LINKS</h2>
      <article className='list animate-pop' style={{ backgroundColor: '#000', color: 'red' }}>
        <p>Grupo exclusivo</p>
        <div>
          <button className='btn-delete'>
            <FiTrash2 size={18} color='#FFF' />
          </button>
        </div>
      </article>
    </div>
  )
}
