import "./style.css"

const FooterList = (title = 'lorem', array=['lorem ipsum']) =>{
    const contentArray = array
    let content = ''
    contentArray.map((element)=>{
        content = content + `<li>${element}</li> ` 
    })
    return/* html */ `
        <article class="footer-list">
            <h3 class="footer-list__h3">${title}</h3>
            <ul class="footer-list__ul">
                ${content}
            </ul>
        </article>
    `
}

export default FooterList