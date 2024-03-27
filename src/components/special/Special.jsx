import Special from './Special.module.css'

const SpecialComponent = () =>{


    return(
        <div className={Special.mainContainer}>
            <div className={Special.imageContainer}>
                <img src="src/assets/s1.jpg" alt="" />
            </div>

            <div className={Special.imageContainer}>
                <img src="src/assets/s2.jpg" alt="" />
            </div>

            <div className={Special.imageContainer}>
                <img src="src/assets/s3.jpg" alt="" />
            </div>

            <div className={Special.imageContainer}>
                <img src="src/assets/s4.jpg" alt="" />
            </div>

            <div className={Special.imageContainer}>
                <img src="src/assets/s5.jpg" alt="" />
            </div>
        </div>
    )
}

export default SpecialComponent