import './App.css'
import HeaderComponent from './components/header/Header'
import HeroComponent from './components/hero/Hero'
import CardComponent from './components/firstCards/Card'
import NewsCardsComponent from './components/secondCards/NewsCards'
import DisneyCardComponent from './components/disneyPlus/DisneyPlus'
import PopularComponent from './components/popular/Popular'
import DisneyLogosComponent from './components/disneyLogos/DisneyLogos'
import SpecialComponent from './components/special/Special'
import CharacterComponent from './components/characterProducts/Character'
import SocialComponent from './components/socials/Social'
import FooterComponent from './components/footer/Footer'


function App() {

  const firstCardComponent = [
    {
      movieImage: `/src/assets/cartoon 1.svg`,
      movieName: `The Wise Little Boy`,
      movieDescription: `Lorem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`
    }, 

    {
      movieImage: `src/assets/cartoon 2.svg`,
      movieName: `The Colorful Princess`,
      movieDescription: `Lorem ipsum dolor sit is amet dolor sit is amet constur adipising elit. Renderit, molestiae!`
    },

    {
      movieImage: `src/assets/cartoon 3-1.svg`,
      movieName: `The Mystery Castle`,
      movieDescription: `Lorem ipsum dolor sit is amet dolor sit is amet constur adipising elit. Renderit, molestiae!`
    },

    {
      movieImage: `src/assets/cartoon 3.svg`,
      movieName: `The Space Aliens`,
      movieDescription: `Lorem ipsum dolor sit is amet dolor sit is amet constur adipising elit. Renderit, molestiae!`
    }
  ]

  const secondCardComponent = [
    {
      movieImage: `src/assets/disney 4.svg`,
      movieName: `This month's work`,
      movieDescription: `Lorem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`
    }, 

    {
      movieImage: `src/assets/disney1.jpg`,
      movieName: `Final season`,
      movieDescription: `Lorem ipsum dolor sit is amet dolor sit is amet constur adipising elit. Renderit, molestiae!`
    },

    {
      movieImage: `src/assets/disney3.jpg`,
      movieName: `Original series`,
      movieDescription: `Lorem ipsum dolor sit is amet dolor sit is amet constur adipising elit. Renderit, molestiae!`
    },

    {
      movieImage: `src/assets/disney2.jpg`,
      movieName: `Disney plus`,
      movieDescription: `Lorem ipsum dolor sit is amet dolor sit is amet constur adipising elit. Renderit, molestiae!`
    }
  ]

  const newsCardComponent = [
    {
      newsImage: `src/assets/cartoon 5.svg`,
      newsDescription: `Lorem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 27, 2024`,
      pTag: `NEWS`
    },

    {
      newsImage: `src/assets/cartoon 6.svg`,
      newsDescription: `Lorem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 28, 2024`,
      pTag: `NEWS`
    },

    {
      newsImage: `src/assets/cartoon 7.svg`,
      newsDescription: `Lorem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 29, 2024`,
      pTag: `NEWS`
    },

    {
      newsImage: `src/assets/cartoon 8.svg`,
      newsDescription: `Lorem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 27, 2024`,
      pTag: `NEWS`
    }
  ]

  const PopularContainer = [
    {
      popularImg:`src/assets/cartoon 9.svg`,
      popularName: `Chip and Dale birthfay`,
      popularDescription: ``,
      
    },

    {
      popularImg:`src/assets/cartoon 10.svg`,
      popularName: `Casual baloon items`,
      popularDescription: `Urban research and others`
    },

    {
      popularImg:`src/assets/cartoon 11.svg`,
      popularName: `Recommended fish items`,
      popularDescription: ``
    },

    {
      popularImg:`src/assets/cartoon 12.svg`,
      popularName: `Disney special offer`,
      popularDescription: `Disney classic enrolled by many`
    }
  ]

  const characterCardComponent = [
    {
      newsImage: `src/assets/cartoon 13.svg`,
      newsDescription: `Lorecccccm  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 27, 2024`,
      pTag: `The Duck`
    },

    {
      newsImage: `src/assets/cartoon 14.svg`,
      newsDescription: `Lorezzzxm  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 28, 2024`,
      pTag: `Happy Child`
    },

    {
      newsImage: `src/assets/cartoon 15.svg`,
      newsDescription: `Lordzdxzem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 29, 2024`,
      pTag: `Speedy`
    },

    {
      newsImage: `src/assets/cartoon 16.svg`,
      newsDescription: `Lodzxv rem  ipsum dolor sit is amet dolor sit is is amet constur adipising elit. Renderit, molestiae!`,
      newsDate: `March 27, 2024`,
      pTag: `Super Mario`
    }
  ]



  return (
    <>
      <div className="parentContainer">
        <HeaderComponent></HeaderComponent>
        <HeroComponent></HeroComponent>
        <div className="firstCardComponentContainer">
          {
            firstCardComponent.map((show, index)=>{
              return(
                <CardComponent key={index} movieImage={show.movieImage} movieName={show.movieName} movieDescription={show.movieDescription} ></CardComponent>
              )
            })
          }
          
        </div>

        <div className="newsSectionMainContainer">
          <div className="newsSection">
            <p className='newsSectionText'>news</p>
            <div className="firstCardComponentContainert">
              {
                newsCardComponent.map((show, index)=>{
                  return(
                    <NewsCardsComponent key={index} ptag={show.pTag} newsImage={show.newsImage} newsDescription={show.newsDescription} newsDate={show.newsDate}></NewsCardsComponent>
                  )
                })
              }
            </div>
          </div>
          <p className='goto'>Go to news list</p>
        </div>

       <div className="newsSectionn">
          <p className='disneyText'>Disney Plus recommended information</p>
          <div className="firstCardComponentContainertt">
              {
                secondCardComponent.map((show, index)=>{
                  return(
                    <DisneyCardComponent key={index} movieImage={show.movieImage} movieName={show.movieName} movieDescription={show.movieDescription} ></DisneyCardComponent>
                  )
                })
              }
            
          </div>
       </div>

       <div className="popularTextAndComponentDiv">
          <div className="popularText">
            <p>Goods featuring popular characters are available!</p>
          </div>

          <div className="popularComponentContainer">
            {
              PopularContainer.map((view, index)=>{
                return(
                  <PopularComponent key={index} popularImg={view.popularImg} popularName={view.popularName} popularDescription={view.popularDescription}></PopularComponent>
                )
              })
            }
          </div>
       </div>

       <div style={{backgroundColor: `white`, paddingTop:`2rem`}} className="newsSectionMainContainer">
          <div style={{backgroundColor: `white`}}  className="newsSection">
            <p className='newsSectionText'>Character Introduction</p>
            <div style={{backgroundColor: `white`}}  className="firstCardComponentContainert">
              {
                characterCardComponent.map((see, index)=>{
                  return(
                    <NewsCardsComponent key={index} pTag={see.pTag} newsImage={see.newsImage} newsDescription={see.newsDescription} ></NewsCardsComponent>
                  )
                })
              }
            </div>
          </div>
          <p className='goto'>Go to character list</p>
        </div>

        <DisneyLogosComponent></DisneyLogosComponent>

              <p style={{textAlign: `center`, fontSize: `1.5rem`, fontWeight: `600`, marginBottom: `0.5rem`}}>Special</p>
        <SpecialComponent></SpecialComponent>

        <p style={{textAlign: `center`, fontSize: `1.5rem`, fontWeight: `600`, marginBottom: `0.5rem`}}>character products</p>
        <CharacterComponent></CharacterComponent>

     
        <SocialComponent></SocialComponent>

        <FooterComponent></FooterComponent>
      </div>      
    </>
  )
}

export default App
