import Footer from './Footer.module.css'

const FooterComponent = ()=>{
    return(
        <div className={Footer.mainContainer}>
            <div className={Footer.topTextContainer}>
                <p className={Footer.disneyText}>disney account</p>
            </div>

            <div className={Footer.centerLinksListContainer}>
                <div className={Footer.linkListContainer}>
                    <div className={Footer.topText}>
                        <p> disney store club</p>
                    </div>

                    <div className={Footer.bottomText}>
                        <p>Online Help Frequently Asked Questions</p>
                        <p>Disney sites around the world</p>
                        <p> terms of service</p>
                    </div>
                </div>

                <div className={Footer.linkListContainer}>
                    <div className={Footer.topText}>
                        <p> disney card club</p>
                    </div>

                    <div className={Footer.bottomText}>
                        <p>Contact information</p>
                        <p>Social Responsibility</p>
                        <p> Copyright/Trademark</p>
                    </div>
                </div>

                <div className={Footer.linkListContainer}>
                    <div className={Footer.topText}>
                        <p> MovieNEX CLUB</p>
                    </div>

                    <div className={Footer.bottomText}>
                        <p>Company information</p>
                        <p>privacy policy</p>
                        <p> Note Regarding product listings of linked shops</p>
                    </div>
                </div>

                <div className={Footer.linkListContainer}>
                    <div className={Footer.topText}>
                        <p> fantastic disney</p>
                    </div>

                    <div className={Footer.bottomText}>
                        <p>Recruitment information</p>
                        <p>Privacy policy supplement</p>
                        <p> terms of service</p>
                    </div>
                </div>
            </div>

            <p className={Footer.pText}>&copy; Disney</p>
            
        </div>
    )
}

export default FooterComponent