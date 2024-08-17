const apiKey = "6bE7og0OO0uzYqnPxxV-LVTFVGRFQWEjC-LvGl7Eslo";
let searchBtn = document.getElementById("search");
let searchedValue = document.getElementById("searchedValue");
let items = document.getElementById("items");
let lowerSection = document.getElementById("lowerSection")

let inputData = "";
let page = 1;
let showMore=document.getElementById("showMore");





searchBtn.addEventListener('click', function () {
    inputData = searchedValue.value;
    console.log(inputData);
    let result = "";
    let mainData;
    items.innerHTML = " ";


    async function fetchdata() {

        let data = await fetch(`https://api.unsplash.com/search/photos?query=${inputData}&client_id=${apiKey}&page=${page}`);
        console.log(data)
        console.log(`https://api.unsplash.com/search/photos?query=${inputData}&client_id=${apiKey}&page=${page}`)
        result = await data.json();
        console.log(result);
        mainData = result.results;
        let totalPages = result.total_pages;
        //console.log(totalPages)
        mainData.forEach((item) => {
            let div = document.createElement("div");
            div.innerHTML = ` <div class="item">
                    <img src="${item.urls.raw}"/>
                    <p class="imgTitle">${item.alt_description}</p>
                </div>`
            items.append(div);


        })
        if (page < totalPages) {
            showMore.style.display="block";
            
        }
        else{
            showMore.style.display="none";

        }
        
    }
    showMore.addEventListener('click',function()
    {
        page++;
        fetchdata();
        
    })






    fetchdata();
})



