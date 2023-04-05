import FooterList from "../../components/FooterList"
import LogoRls from "../../components/LogoRls"
import "./style.css"

const MainFooter = ()=>{
    return/* html */ `
        <footer class="main-footer">
            <div class="main-footer__wrapper">
                <div class="main-footer__logo">
                    ${LogoRls()}
                </div>

                ${FooterList('company',
                ['how RLS works',
                'what can not ship',
                'your privacy rights'])}

                ${FooterList('about RLS',
                ['RLS reviews',
                'latest news',
                'partner with RLS',
                'career with RLS'])}

                ${FooterList('our community',
                ['Facebook.com',
                'Twitter.com',
                'Linkedin.com',
                'hello@rls.com'])}

            </div>
        </footer>
    `
}

export default MainFooter