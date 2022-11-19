import { FormEvent, useState, useEffect } from 'react'
import './networks.css'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdAddLink } from 'react-icons/md'
import { db } from '../../services/firebaseConnection'
import { setDoc, doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export const Networks = () => {
  const [facebook, setFacebook] = useState('')
  const [instagran, setInstagran] = useState('')
  const [youtube, setYoutube] = useState('')

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, 'social', 'link')
      getDoc(docRef)
        .then(snapshot => {
          if (snapshot.data() !== undefined) {
            setFacebook(snapshot.data()?.facebook)
            setInstagran(snapshot.data()?.instagran)
            setYoutube(snapshot.data()?.youtube)
          }
        })
        .catch(() => {})
    }
    loadLinks()
  }, [])

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDoc(doc(db, 'social', 'link'), {
      facebook,
      instagran,
      youtube
    })
      .then(() => {
        toast.success('Salvo com sucesso!')
      })
      .catch(error => {
        toast.error('Erro ao salvar seus Links!')
        console.log(error)
      })
  }

  return (
    <div className='admin-container'>
      <Header />
      <h1 className='title-social'>Suas Redes Sociais</h1>
      <form className='form' onClick={handleSave}>
        <label className='label'>Link do Facebook</label>
        <Input
          placeholder='Digite a URL do facebook...'
          value={facebook}
          onChange={e => setFacebook(e.target.value)}
        />
        <label className='label'>Link do Instagran</label>
        <Input
          placeholder='Digite a URL do instagran...'
          value={instagran}
          onChange={e => setInstagran(e.target.value)}
        />
        <label className='label'>Link do youTube</label>
        <Input
          placeholder='Digite a URL do youTube...'
          value={youtube}
          onChange={e => setYoutube(e.target.value)}
        />
        <button type='submit' className='btn-register'>
          Salvar links <MdAddLink />
        </button>
      </form>
    </div>
  )
}
