import './social.css'

type SocialProps = {
  children: React.ReactNode
  url: string
}

export const Social = ({ url, children }: SocialProps) => {
  return (
    <a href={url} className='social' target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  )
}
