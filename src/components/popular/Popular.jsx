import Popular from './Popular.module.css'

const PopularComponent = (probs)=>{
    return(
        <div className={Popular.popularMainDiv}>
            <div className={Popular.popularImgContainer}>
                <img src={probs.popularImg} alt="" />
            </div>

            <div className={Popular.popularTextContentContainer}>
                <div className={Popular.popularCharacterName}>
                    <p>{probs.popularName} </p>
                </div>

                <div className={Popular.popularCharacterDescription}>
                    <p>{probs.popularDescription} </p>
                </div>
            </div>
        </div>
    )
}

export default PopularComponent