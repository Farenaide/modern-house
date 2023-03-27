import "./style.css"

const WelcomeCircle = (text) => {
    return/* html */ `
        
        <div class="welcome-circle">
            <svg viewBox="0 0 100 100" width="110" height="110">
                <defs>
                <path id="circle"
                    d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
                </defs>
                <text class="welcome-circle__text">
                <textPath xlink:href="#circle">
                    ${text}
                </textPath>
                </text>
            </svg>
        </div>
        
    `
}
export default WelcomeCircle