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

                <div class="main-footer__list">
                    ${FooterList('company',
                    ['How RLS works',
                    'What can not ship',
                    'Your privacy rights'])}
                </div>

                <div class="main-footer__list">
                    ${FooterList('about RLS',
                    ['RLS reviews',
                    'Latest news',
                    'Partner with RLS',
                    'Career with RLS'])}
                </div>

                <div class="main-footer__list">
                    ${FooterList('our community',
                    ['Facebook.com',
                    'Twitter.com',
                    'Linkedin.com',
                    'hello@rls.com'])}
                </div>

            </div>
        </footer>
    `
}

export default MainFooter