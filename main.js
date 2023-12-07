[...document.querySelectorAll('.product-card')].map((card) => {
    card.style.border = "2px solid #3C4196"
    card.style.backgroundColor = "#F7F7F9"
    card.style.borderRadius = "8px"
    
    const content = card.querySelector('.product-card__content')
    content.style.padding = "0px 12px 10px 12px"
    
    const picture = card.querySelector('.product-card-carousel .carousel-container')
    if(picture) picture.style.borderRadius = "0px"
})