fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const constName = document.querySelector('#tag')

        data.items.forEach(product => {
            constName.innerHTML += `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p class="price">£${product.price}</p>
                    <img src="${product.image}" alt="" />
                </div>
            `
        })
    })

    const menuButton = document.querySelector('.menu-button')
    const menuLinks = document.querySelector('nav .links')
    
    // menuButton.addEventListener('click', function (){
        // console.log('clicked on button')
    // }
    // )
    
    menuButton.addEventListener('click', toggleMobileMenu)
    
    function toggleMobileMenu() {
        console.log('clicked on the button')
        menuLinks.classList.toggle('open')
    }