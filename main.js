//this is to get the id from html
const playerListEl = document.querySelector('#product-list');
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
    const template = products.map(({id,image,title,description,price,category})=> (
        `<li class= "product">
                 <img src="${image}">
                 <h3>${title}</h3>
                 <p>${description}</p> 
                 <p>${price}</p> 
                 <p>${category}</p>
                 <button data-id="${id}">See Details</button>
                </li>`
    ))
    playerListEl.innerHTML = template.join('');
}
playerListEl.addEventListener('click', async e =>{
    if(e.target.matches('button')){
        const id= e.target.dataset.id;
        const res= await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await res.json();
        console.log(product)

    }
    
})
const init = async () => {
    const products = await fetchProduct();
    renderProducts(products);}

    init();

