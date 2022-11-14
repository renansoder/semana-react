import { useState } from 'react'
import { Header } from '../../components/Header'
import './admin.css'
import { Logo } from '../../components/Logo'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'

export const Admin = () => {
  const [nameInput, setNameInput] = useState('')
  const [urlInput, setUrlInput] = useState('')
  const [backgroundInput, setBackgorundInput] = useState('#f1f1f1')
  const [textInput, setTextInput] = useState('#121212')

  return (
    <div className='admin-container'>
      <Header />
      <Logo />
      <form className='form'>
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
            <label className='label right'>Fundo do Link</label>
            <Input
              placeholder='Nome do Link...'
              type='color'
              value={backgroundInput}
              onChange={e => setBackgorundInput(e.target.value)}
            />
          </div>
          <div className='input-color'>
            <label className='label right'>Cor do Link</label>
            <Input
              placeholder='Nome do Link...'
              type='color'
              value={textInput}
              onChange={e => setTextInput(e.target.value)}
            />
          </div>
        </section>
        {nameInput !== '' && (
          <div className='preview'>
            <label className='label'>Veja como está ficando... 👇</label>
            <article
              className='list'
              style={{ marginBottom: 7, marginTop: 8, backgroundColor: backgroundInput }}
            >
              <p style={{ color: textInput }}>{nameInput}</p>
            </article>
          </div>
        )}
        <button className='btn-register' type='submit'>
          Cadastrar <MdAddLink size={24} color='#FFF' />
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
