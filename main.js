//this is to get the id from html
const productListEl = document.querySelector('#product-list');
const productDetailsEL = document.querySelector('#product-details')

//fetching product in console
const fetchProduct = async ()=> {
   // fetch('https://fakestoreapi.com/products')
         //   .then(res=>res.json())
        //    .then(json=>console.log(json))
    try{
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json();
    console.log(products)
    return products;
    }catch(err){
        console.error(err);
    }
}


//going to render the products
const renderProducts = products => {
    const template = products.map(({id,image,title,description,price,category},index)=> (
        `<li class= "product">
                 <img src="${image}">
                 <h3>${title}</h3>
                 <p>${description}</p> 
                 <p>${price}</p> 
                 <p>${category}</p>
                 <button data-id="${id}">See Details</button>
                </li>`
    ))
    productListEl.innerHTML = template.join('');
}
productListEl.addEventListener('click', async e =>{
    if(e.target.matches('button')){
        const id= e.target.dataset.id;
        const res= await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        console.log(product)

    }
    })

    const renderProductDetails = product =>{
        console.log("Making it here")
        const template = `
        <div class="product-details">
        <img src="${product.image}" alt = "img">
        <h3> ${product.title}</h3>
        <p>${product.description}</p>
        <p>Price:$${product.price}</p>
        <p>${product.category}</p>
        </div>
        `
        productDetailsEL.innerHTML = template;
    }
    

    productListEl.addEventListener('click', async e =>{
        if(e.target.matches('button')){
            const id = e.target.dataset.id;
            const res = await fetch (`https://fakestoreapi.com/products/${id}`)
            const product =await res.json();
            renderProductDetails(product);
        }
    })
const init = async () => {
    const products = await fetchProduct();
    renderProducts(products);}

    init();

