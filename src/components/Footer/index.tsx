import React from 'react'
import './styles.css'
import Icon from '../Icon'

const Footer = () => {

  const items = [
    { link: "mailto:souzarodrigo7@hotmail.com", icon: "bi bi-envelope-fill" },
    { link: "tel:+5515981555714", icon: "bi bi-whatsapp" },
    { link: "http://github.com/DevRodriguera", icon: "bi bi-github" },
    { link: "https://www.linkedin.com/in/rodrigosfc/", icon: "bi bi-linkedin" },
  ]

  return (
    <footer>
      <h3></h3>
      <div className="footer-icons">
        {items.map(dados =>
          <Icon key={dados.link}link={dados.link} icon={dados.icon} />
        )}
      </div>
      <div className='footer-bar'>
        2023 - Desenvolvido por Rodrigo Souza
      </div>
    </footer>
  )
}

export default Footer