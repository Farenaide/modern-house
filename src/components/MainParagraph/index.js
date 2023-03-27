import "./style.css"

const MainParagraph = (content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consectetur facere vero ea. Possimus, quibusdam quia, tempora rerum cumque et hic sapiente, sed animi officia enim quo. Laudantium, veritatis quam.')=>{
    return/* html */`
        <p class='main-paragraph'>
            ${content}
        </p>
    `
}

export default MainParagraph