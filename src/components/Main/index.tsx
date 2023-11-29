import React from 'react'
import Card from '../Card'
import './styles.css'
import Image from 'next/image'
import eu from '../../../public/img/eu.jpg'

const MainContent = () => {

  const cards = [
    {
      id: 1,
      image: "/img/codelandia-d2.png",
      github: "https://github.com/DevRodriguera/Codelandia-D2-ProductList",
      vercel: "https://codelandia-d2-product-list.vercel.app/"
    }, {
      id: 2,
      image: "/img/codelandia-d3.png",
      github: "https://github.com/DevRodriguera/Codelandia-D3-ListAndForms",
      vercel: "https://codelandia-d3-list-and-forms.vercel.app/"
    }, {
      id: 3,
      image: "/img/codelandia-d4.png",
      github: "https://github.com/DevRodriguera/Codelandia-D4-LoginPage",
      vercel: "https://codelandia-d4-login-page.vercel.app/"
    }, {
      id: 4,
      image: "/img/codelandia-d5.png",
      github: "https://github.com/DevRodriguera/Codelandia-D5-ChihiroTrailer",
      vercel: "https://codelandia-d5-chihiro-trailer.vercel.app/"
    }
  ]

  const staksAtt = [
    { id: 1, link: "https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5", height:80 },
    { id: 2, link: "https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3", height:75 },
    { id: 3, link: "https://img.shields.io/badge/JS-black?style=for-the-badge&logo=javascript", height:60 },
    { id: 4, link: "https://img.shields.io/badge/TS-black?style=for-the-badge&logo=typescript", height:60 },
    { id: 5, link: "https://img.shields.io/badge/React-black?style=for-the-badge&logo=react", height:80 },
    { id: 6, link: "https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github", height:100 }
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
              <Image
                key={data.id}
                src={data.link}
                alt={''}
                width={data.height}
                height={30}
              />
            )}
          </div>
          <h3>Staks que pretendo ser PRO</h3>
          <div>

          </div>
        </div>
        <Image alt='' src={eu} width={300} />
      </div>

      <h1>Alguns de meus projetos</h1>
      <div className="cards">
        {
          cards.map(data => (
            <Card
              key={data.id}
              img={data.image}
              github={data.github}
              vercel={data.vercel}
            />
          ))
        }

      </div>
    </main>
  )
}

export default MainContent