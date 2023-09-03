const handleCategory = async () => {
    
    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container');
    const div = document.createElement("div");

    data.data.forEach((data) => {

        const div = document.createElement("div");
        div.innerHTML = 
        `<a onclick = "handleCard('${data.category_id}')" class="btn gap-6">${data.category}</a>`;
       
        tabContainer.appendChild(div);
    });

console.log(data.data);

};

const handleCard = async (categoryId) => {
    const response = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await response.json();
    const cardContainer =  document.getElementById('card-container');
    cardContainer.innerHTML = " ";
    data.data.forEach((cards) => {
       console.log(cards);
        const div = document.createElement('div');
        div.innerHTML = `<div class="card w-auto bg-base-100 shadow-xl  mb-6">
        <figure><img class ="w-72 h-44" src=${cards.thumbnail}  /></figure>
        <div class="card-body">
          <div class="flex gap-5 items-center">
          <img class="rounded-full w-12 h-12 "  src="${cards.authors[0].profile_picture}" alt="">
            <h2 class="card-title">${cards.title.slice(0,15)}</h2>
            
          </div>

          <div class="flex ml-16">
            
            <h4>
                ${cards.authors[0].profile_name}
            </h4>
            <figure>
             
               ${cards.authors[0].verified ? '<i class="fa fa-check-circle  text-blue-700 ml-1" aria-hidden="true"></i>' : ''}
                  
                   

            </figure>
           
          </div>
          <div class="ml-16">
            <p><span>${cards.others.views}</span> views</p>
          </div>
          
        </div>
      </div>`
        cardContainer.appendChild(div);
    });
};

handleCategory();
handleCard(1000);