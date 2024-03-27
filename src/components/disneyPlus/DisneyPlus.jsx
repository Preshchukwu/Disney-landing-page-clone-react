import Disney from './DisneyPlus.module.css'

const DisneyCardComponent = (probs)=>{
    
    return(
        <div className={Disney.cardContainer}>
            <div className={Disney.imageContainer}>
                <img src={probs.movieImage} alt="" />
            </div>

            <div className={Disney.textsContainer} >
                <div className={Disney.movieNameContainer}>
                    <p className={Disney.pText}>{probs.movieName} </p>
                </div>

                <div className={Disney.movieDescriptionContainer}>
                    <p className={Disney.pText}>{probs.movieDescription} </p>
                </div>
            </div>

            
        </div>
    )
}

export default DisneyCardComponent