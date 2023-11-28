import React from 'react'
import Card from '../Card'
import './styles.css'

const MainContent = () => {
  const staksAtt = [
    { link: "https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5" },
    { link: "https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3" },
    { link: "https://img.shields.io/badge/JS-black?style=for-the-badge&logo=javascript" },
    { link: "https://img.shields.io/badge/TS-black?style=for-the-badge&logo=typescript" },
    { link: "https://img.shields.io/badge/React-black?style=for-the-badge&logo=react" },
    { link: "https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github" }
  ]
  return (
    <main>
      <div className="wellcome">
        <div id='about'>
          <h2>Olá, seja bem vindo ao meu porifólio digital !</h2>
          <h3>Aqui vou estar compartilhando toda minha experiência e idéias. Aqui você encontrará uma coleção dos projetos nos quais trabalhei, testando meus conhecimentos com soluções criativas e inovadoras.</h3>
        </div>
        <div id='stacks'>
          <h3>Algumas das Stacks que uso atualemnte</h3>
          <div>
            {staksAtt.map(data =>
              <img src={data.link} />
            )}
          </div>
          <h3>Staks que pretendo ser PRO</h3>
          <div>
            
          </div>
        </div>
        <img
          id='photome'
          alt=''
          src={'/img/eu.jpg'}
          width={300}
        />
      </div>

      <h1>Alguns de meus projetos</h1>
      <div className="cards">
        <Card
          img="/img/codelandia-d2.png"
          github="https://github.com/DevRodriguera/Codelandia-D2-ProductList"
          vercel="https://codelandia-d2-product-list.vercel.app/"
        />
        <Card
          img="/img/codelandia-d3.png"
          github="https://github.com/DevRodriguera/Codelandia-D3-ListAndForms"
          vercel="https://codelandia-d3-list-and-forms.vercel.app/"
        />
        <Card
          img="/img/codelandia-d4.png"
          github="https://github.com/DevRodriguera/Codelandia-D4-LoginPage"
          vercel="https://codelandia-d4-login-page.vercel.app/"
        />
        <Card
          img="/img/codelandia-d5.png"
          github="https://github.com/DevRodriguera/Codelandia-D5-ChihiroTrailer"
          vercel="https://codelandia-d5-chihiro-trailer.vercel.app/"
        />
      </div>
    </main>
  )
}

export default MainContent