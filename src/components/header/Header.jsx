import Header from './Header.module.css'

const HeaderComponent = ()=>{

    return(
        <div className={Header.HeaderContainer}>
            <div className={Header.leftContentContainer}>
                <p> Disney</p>
            </div>

            <div className={Header.mainRightContainer}>
                <div className={Header.centerContentsContainer}>
                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> Disney Plus</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img style={{visibility:`hidden`}} src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> Shoppin</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> Movie</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> TV</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> Park & Resorts</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> Music</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img style={{visibility:`hidden`}} src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

            
                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> Live Events</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img style={{visibility:`hidden`}} src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p>Game</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img style={{visibility:`hidden`}} src="src\assets\down.svg" alt="" />
                        </div>
                    </div>

                    <div className={Header.textLinkAndIconContainer}>
                        <div className={Header.textLinkContainer}>
                            <p> Menu</p>
                        </div>

                        <div className={Header.IconContainer}>
                            <img style={{visibility:`hidden`}} src="src\assets\down.svg" alt="" />
                        </div>
                    </div>
                    
                </div>

                <div className={Header.rightContentContainer}>
                    <p>Search within the site</p>

                    <div className={Header.searchIconContainer}>
                        <img  src="src\assets\search.svg" alt="" />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default HeaderComponent