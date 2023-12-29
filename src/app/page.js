import Image from 'next/image'
import Icon from './components/icon'

export default function Home() {

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

  const currentStacks = [
    { id: 1, link: "https://img.shields.io/badge/HTML5-black?style=for-the-badge&logo=html5", height: 90 },
    { id: 2, link: "https://img.shields.io/badge/CSS3-black?style=for-the-badge&logo=css3", height: 80 },
    { id: 3, link: "https://img.shields.io/badge/JS-black?style=for-the-badge&logo=javascript", height: 60 },
    { id: 4, link: "https://img.shields.io/badge/TS-black?style=for-the-badge&logo=typescript", height: 60 },
    { id: 5, link: "https://img.shields.io/badge/React-black?style=for-the-badge&logo=react", height: 90 },
    { id: 6, link: "https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github", height: 100 }
  ]
  const currentTools = [
    { id: 1, link: "https://img.shields.io/badge/INSOMNIA-grey?style=for-the-badge&logo=insomnia", height: 120 },
    { id: 2, link: "https://img.shields.io/badge/FIGMA-grey?style=for-the-badge&logo=figma", height: 90 },
    { id: 3, link: "https://img.shields.io/badge/NOTION-grey?style=for-the-badge&logo=notion", height: 100 },
    { id: 4, link: "https://img.shields.io/badge/VSCODE-grey?style=for-the-badge&logo=visualstudiocode", height: 100 },
    { id: 5, link: "https://img.shields.io/badge/UBUNTU-grey?style=for-the-badge&logo=linux", height: 100 },
  ]

  return (
    <>
      <header className='flex flex-col flex-nowrap items-center h-screen bg-emerald-500'>
        <h1 className='text-7xl p-16 text-white'>Olá, seja bem vindo !</h1>
        <div className=''>

          <div className='flex'>

            {currentStacks.map(data => (
              <Icon link={data.link} icon={data.height} />
            ))}
          </div>
        </div>

      </header>
      <main className="flex flex-col flex-nowrap items-center min-h-screen justify-between p-24">

      </main>
      <footer>

      </footer>
    </>
  )
}
