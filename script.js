fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const productsBox = document.querySelector('#products')

        data.items.forEach(product => {
            productsBox.innerHTML += `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p class="price">£${product.price}</p>
                    <img src="${product.image}" alt="" />
                </div>
            `
        })
    })