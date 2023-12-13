console.log('this works');

const flowers = [
    {
        name: "Tulip",
        color: "yellow",
        image:
        "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/7951c33e-d54b-480d-9246-32e26b3f25b2"
    },
    {
        name: "Daffodil",
        color: "yellow",
        image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
        name: "Sunflower",
        color: "yellow",
        image:
        "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/f79f7b29-f5ea-4705-84c2-d59f628711f7"
    },
    {
        name: "Bluebell",
        color: "blue",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
        name: "Rose",
        color: "red",
        image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
]


//grab the ul
const ul = document.querySelector('ul');

//write function to render flowers to page
const renderFlowersToPage = (items) => {
    for(let i = 0; i < items.length; i++){
        console.log(items[i]);

        //create list item 
        let list_item = document.createElement("li");
        //flower name
        let title = document.createElement("h3");
        title.textContent = flowers[i].name;
        // flower color
        let color = document.createElement("p");
        color.textContent = flowers[i].color;
        //image 
        let image = document.createElement("img");
        image.setAttribute("src", flowers[i].image);

        //append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        list_item.appendChild(color)
        list_item.appendChild(image)
    }
}


//pass data into it
renderFlowersToPage(flowers)
