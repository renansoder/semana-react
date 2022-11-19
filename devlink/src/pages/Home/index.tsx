import { useEffect, useState } from 'react'
import './home.css'
import { Social } from '../../components/Social'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { getDocs, collection, orderBy, query, getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'
import { ILista } from '../Admin'

interface ILinks {
  facebook: string
  instagran: string
  youtube: string
}

export const Home = () => {
  const [links, setLinks] = useState<ILista[]>([])
  const [socialLinks, setSocialLinks] = useState<ILinks>({} as ILinks)

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, 'links')
      const queryRef = query(linksRef, orderBy('createdAt', 'asc'))
      getDocs(queryRef)
        .then(snapshot => {
          let lista: ILista[] = []
          snapshot.forEach(doc => {
            lista.push({
              id: doc.id,
              name: doc.data().name,
              url: doc.data().url,
              bg: doc.data().bg,
              color: doc.data().color
            })
          })
          setLinks(lista)
        })
        .catch(error => {
          throw new Error(error)
        })
    }

    loadLinks()
  }, [])

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, 'social', 'link')
      getDoc(docRef).then(snapshot => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagran: snapshot.data()?.instagran,
            youtube: snapshot.data()?.youtube
          })
        }
      })
    }
    loadSocialLinks()
  }, [])

  return (
    <div className='home-container'>
      <h1>Minha lista de Links</h1>
      <span>Veja meus links👇</span>

      <main className='links-container'>
        {links.map(item => (
          <section key={item.id} className='link-area' style={{ backgroundColor: item.bg }}>
            <a href={item.url} target='_blank'>
              <p className='link-text' style={{ color: item.color }}>
                {item.name}
              </p>
            </a>
          </section>
        ))}
        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks.facebook}>
              <FaFacebook size={35} color='#FFF' />
            </Social>
            <Social url={socialLinks.instagran}>
              <FaInstagram size={35} color='#FFF' />
            </Social>
            <Social url={socialLinks.youtube}>
              <FaYoutube size={35} color='#FFF' />
            </Social>
          </footer>
        )}
      </main>
    </div>
  )
}
