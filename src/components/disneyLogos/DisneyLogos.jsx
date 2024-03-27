import DisneyLogo from './DisneyLogos.module.css'

const DisneyLogosComponent = () =>{


    return(
        <div className={DisneyLogo.mainContainer}>
            <div className={DisneyLogo.imageContainer}>
                <img src="src/assets/logo2.jpg" alt="" />
            </div>

            <div className={DisneyLogo.imageContainer}>
                <img src="src/assets/logo1.jpg" alt="" />
            </div>

            <div className={DisneyLogo.imageContainer}>
                <img src="src/assets/logo4.jpg" alt="" />
            </div>

            <div className={DisneyLogo.imageContainer}>
                <img src="src/assets/logo3.jpg" alt="" />
            </div>
        </div>
    )
}

export default DisneyLogosComponent