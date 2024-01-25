const mainDiv = document.getElementById('results')//maindiv
fetchData('https://dummyjson.com/products');
function fetchData (url)
{
    fetch(url)
    .then(function(res){
        console.log(res)
        return res.json()
    })
    .then (function (data){
        console.log(data.products);
    })
    .catch(function (error){
        console.log(error);
    })

}
function displayData()
{
    // console.log(displayData);
    product.forEach(function(pro)
    {
    console.log(pro);
    // const product = document.createElement('div')
    // console.log(div);
    // const img = document.createElement('img');
    // img.setAttribute('src', pro.images[0])
    // img.alt = "image"
    const title = document.createElement('h2')
    title.textContent  = pro.title
    product.append(img,title)
    mainDiv.appendChild(product)

    });
}