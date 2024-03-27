import Card from './Card.module.css'

const CardComponent = (probs)=>{
    
    return(
        <div className={Card.cardContainer}>
            <div className={Card.imageContainer}>
                <img src={probs.movieImage} alt="" />
            </div>

            <div className={Card.textsContainer} >
                <div className={Card.movieNameContainer}>
                    <p>{probs.movieName} </p>
                </div>

                <div className={Card.movieDescriptionContainer}>
                    <p>{probs.movieDescription} </p>
                </div>
            </div>

            
        </div>
    )
}

export default CardComponent