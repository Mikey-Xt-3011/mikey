const mainDiv = document.getElementById('results');
let count = 0;
let price = 0;
fetchData('https://dummyjson.com/products')
async function fetchData(url)
{
   fetch(url)
   .then ((res)=>res.json())
   .then((data)=>displayData(data.products))
   .catch(function (error)
   {
    console.log(error)
   })
   try{
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.products)
   }
   catch (error)
   {
    console.error(error)
   }

}
const displayData =(products)=>
{
    products.forEach(function (pro){
        console.log(pro.title);
    const product = document.createElement('div')
    product.classList.add('product')
    const img = document.createElement('img');
    img.setAttribute('src',pro.images[0])
    const title = document.createElement('h2')
    title.textContent ="Model : "+ pro.title
    const price = document.createElement('p')
    price.textContent = "price: $"+pro.price
    const category = document.createElement('p')
    category.textContent = "Category :"+ pro.category;
    const btn = document.createElement('button')
    btn.textContent = "Add to Cart"
    btn.addEventListener('click', update)
    product.append(img,title,price,category, btn);
    mainDiv.appendChild(product)
    });

function update()
{
    count++;
    console.log(count)
    document.getElementById('count').textContent=""+count
    price = pro.price
    console.log(price);
    document.getElementById("price").textContent=""+price
}


}
