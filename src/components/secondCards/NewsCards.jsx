import NewsCard from './NewsCards.module.css'


const NewsCardsComponent = (probs)=>{
    return(
        <div className={NewsCard.newsCardsMainContainer}>
            <div className={NewsCard.imageContainer}>
                <img src={probs.newsImage} alt="" />
            </div>

            <div className={NewsCard.textsContainer}>
                <div className={NewsCard.newsTextContainer}>
                    <p>{probs.pTag}</p>
                </div>

                <div className={NewsCard.newsDescriptionContainer}>
                    <p>{probs.newsDescription} </p>
                </div>

                <div className={NewsCard.newsDateContainer}>
                    <p>{probs.newsDate} </p>
                </div>
            </div>

        </div>
    )
}

export default NewsCardsComponent