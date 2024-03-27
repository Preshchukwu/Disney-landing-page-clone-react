import Social from './Social.module.css'

const SocialComponent = ()=>{
    return(
        <div className={Social.mainContainer}>
            <div className={Social.iconContainer}>
                <i class="fa-brands fa-instagram fa-xl"></i>
                <i class="fa-brands fa-x-twitter fa-xl"></i>
                <i class="fa-brands fa-facebook fa-xl"></i>
                <i class="fa-brands fa-youtube fa-xl"></i>
            </div>
            <p>Go to SNS list</p>
        </div>
    )
}

export default SocialComponent