import Hero from './Hero.module.css'

const HeroComponent = ()=>{

    return(
        <div className={Hero.heroMainContainer}>
            <div className={Hero.iconContainer}>
                <img src="src\assets\left.svg" alt="" />
            </div>

            <div className={Hero.descriptionTextContainer}>
                <div className={Hero.topTextContainer}>
                    <h2>Story Of The Oaf</h2>
                </div>

                <div className={Hero.bottomTextContainer}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore iure assumenda eveniet numquam sit Lorem ipsum dolor s.</p>
                </div>
            </div>

            <div className={Hero.iconContainer}>
                <img src="src\assets\right.svg" alt="" />
            </div>
        </div>
    )
}

export default HeroComponent