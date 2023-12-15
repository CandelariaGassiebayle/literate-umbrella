document.addEventListener('DOMContentLoaded', () => {
const catalog = [
    {
        name: "Centro Cultural Internacional Oscar Niemeyer",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "2011",
        location: "Spain",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/6498753c-eaeb-481a-a61e-b0808fa844cc"
    },
    {
        name: "Catedral de Brasilia",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "1970",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/f24356c2-494c-4598-b2ef-19d52d88188f"
    },
    {
        name: "Museo de Arte Contemporaneo de Niteroi",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "1996",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/769bda14-b567-4a54-af4f-c6e26a827ff2"
    },
    {
        name: "Congreso Nacional del Brasil",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "2006",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/53944e8a-4c6f-402a-b076-43dd22689083"
    },
    {
        name: "Palacio Da Alvorada",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "1958",
        location: "Brazil",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/439c6104-3491-4602-b5be-308c3668f20c"
    },
    {
        name: "Biblioteca Nacional Mariano Moreno",
        architect: "Clorindo Testa",
        nationality: "Argentina",
        year: "1991",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/da22f76b-1f83-487a-9b5e-1dff2665621b"
    },
    {
        name: "IBM Buildiding",
        architect: "Mario Roberto Alvarez",
        nationality: "Argentina",
        year: "1979",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/023abd6f-258e-4bdd-b671-80037bce7b38"
    },
    {
        name: "SOMISA Building",
        architect: "Mario Roberto Alvarez",
        nationality: "Argentina",
        year: "1977",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/0fc51c32-b7d4-4023-8c8e-d657b248393b"
    },
    {
        name: "Casa del Puente",
        architect: "Amancio Williams",
        nationality: "Argentina",
        year: "1946",
        location: "Argentina",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/a6e90d1f-049e-490f-93d4-7c69da24280f"
    },
    {
        name: "Quinta Monroy Housing",
        architect: "Alejandro Aravena",
        nationality: "Chile",
        year: "2003",
        location: "Chile",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/6e30626b-073f-4386-93ab-1b2cd169b032"
    },
    {
        name: "Torres Siamesas",
        architect: "Alejandro Aravena",
        nationality: "Chile",
        year: "2003",
        location: "Chile",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/e3b36c94-3261-41dd-b6ae-28e00edc351e"
    },
    {
        name: "Villa Verde Housing",
        architect: "Alejandro Aravena",
        nationality: "Chile",
        year: "2010",
        location: "Chile",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/bae164e1-f22d-4093-8054-34fdcb5640db"
    },
    {
        name: "Glass House",
        architect: "Lina Bo Bardi",
        nationality: "Brazil",
        year: "1950",
        location: "Brazil",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/f7df74d2-9cf1-443a-be93-bea865783fff"
    },
    {
        name: "SESC Pompeia",
        architect: "Lina Bo Bardi",
        nationality: "Brazil",
        year: "1986",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/8b3c68cd-9651-4706-92ac-4c23631033c2"
    },
    {
        name: "Casa Luis Barragan",
        architect: "Luis Barragan",
        nationality: "Mexico",
        year: "1948",
        location: "Mexico",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/127e3d28-8017-43a8-9844-9a1a8733926d"
    },
    {
        name: "Casa Gilardi",
        architect: "Luis Barragan",
        nationality: "Mexico",
        year: "1976",
        location: "Mexico",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/20070544-072d-41bf-b14b-b1bbe46a3124"
    },
    {
        name: "Iglesia de Atlántida Cristo Obrero",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1960",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/8a101c21-e502-42ae-be96-630a74fcbbfd"
    },
    {
        name: "Iglesia de San Pedro",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1967",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/dfd5e8f0-5d09-4bd6-9fa2-fff4acff2ed3"
    },
    {
        name: "Terminal Municipal de Ómnibus",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1973",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/a17d7b60-9eb2-4fca-805c-e8f85e9bcf6d"
    },
    {
        name: "Gimnasio polideportivo",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1974",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/4f0c55ff-756c-4708-9af5-64088f744914"
    },
    {
        name: "São Paulo Museum of Art (MASP)",
        architect: "lina Bo bardi",
        nationality: "Brazil",
        year: "1947",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/74a62e0e-0f81-4a37-b12b-5955eea77c43"
    },
    {
        name: "Torre UniCredit",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "2012",
        location: "Italy",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/bcfb623d-8a51-407e-ac27-369f9b5b18ae"
    },
    {
        name: "Torre Iberdrola",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "2011",
        location: "Spain",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/5bc6abeb-7795-4712-a433-9dd8ef822834"
    },
    {
        name: "Torre Macro",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "2018",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/2bf9dc79-b01e-49a5-9ef6-ab87a5d66f55"
    },
    {
        name: "Torres Petronas",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "1998",
        location: "Malaysia",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/34623fb2-ffca-4341-81e8-f235b0b88925"
    },
    {
        name: "Tokyo International Forum",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "1997",
        location: "Japan",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/f70aa4df-653f-42e0-a055-6cbf3ce79095"
    },
    {
        name: "432 Park Avenue Condominiums",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "2012",
        location: "United States",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/44960410-5925-4532-a78b-aee9cb17efd2"
    },
    {
        name: "Carrasco International Airport",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "2009",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/bf5e526a-54e0-489c-b681-5176b466438d"
    },
    {
        name: "20 Fenchurch Street",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "2014",
        location: "London",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/e944fa5e-d243-46a8-940c-bd6c817ba430"
    },
    {
        name: "Hotel Camino Real CDMX",
        architect: "Ricardo Legorreta",
        nationality: "Mexico",
        year: "1968",
        location: "Mexico",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/0fc39c40-d28d-4e76-b271-58ddfba09a9b"
    },
    {
        name: "Cortés Sea Research Center",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2023",
        location: "Mexico",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/067c835c-8a4b-41fe-beec-5d1fda45abb8"
    },
    {
        name: "Los Terrenos",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2016",
        location: "Mexico",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/d0363242-5f8d-48c1-a9ad-eac4b0c957f5"
    },
    {
        name: "Bioinnova",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2012",
        location: "Mexico",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/b522fb7f-e5d8-45cd-9802-d6baf59a7876"
    },
    {
        name: "Ajijic",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2010",
        location: "Mexico",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/154aacd8-01da-42c3-a214-5a556c03baf5"
    },
];

console.log(catalog.length);

const container = document.getElementById('catalog');
const maxColumns = 6; // Match this with the number of columns set in CSS
const maxRows = 6;

if (container) {
    catalog.forEach(card => {
        const cardElement = createCardElement(card);
        // Assign random positions within the grid
        cardElement.style.gridColumnStart = getRandomInt(1, maxColumns);
        cardElement.style.gridRowStart = getRandomInt(1, maxRows);
        cardElement.querySelector('.project-image').addEventListener('load', () => {
            container.appendChild(cardElement);
        });
    });

} else {
    console.error("Container element not found!");
}
});


    // Select project items
    const cards = document.querySelectorAll(".project-item");

    // Add data-categories attribute to project items based on nationality
    cards.forEach(card => {
        console.log(card);
        const nationality = card.getAttribute("data-nationality");
        card.setAttribute("data-categories", nationality);
    });

    // Select filter buttons
    const filterBtns = document.querySelectorAll(".filter-btn");

    // Add click event listener to each filter button
    filterBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            // Remove "active" class from all filter buttons
            filterBtns.forEach(btn => btn.classList.remove("active"));

            // Add "active" class to the clicked filter button
            this.classList.add("active");

            // Get the filter value from the data attribute
            const filterValue = this.getAttribute("data-filter");
            console.log(filterValue);

            // Filter project items based on the selected category
            // cards.forEach(card => {
            //     console.log(card);
            //     const categories = card.getAttribute("data-categories").split(" ");
            //     console.log(categories);
                // if (filterValue === "all" || categories.includes(filterValue)) {
                //     card.style.display = "block";
                // } else {
                //     card.style.display = "none";
                // }
            // });
            for (let i = 0; i < cards.length; i++) {  
                if (cards[i].classList.contains(filterValue) || filterValue === "all") {
                    cards[i].classList.remove("hide");
                    cards[i].classList.add("show");
                 }
            }
        });
    });



function createCardElement (project) {
        //create list item 
        const card = document.createElement("div");
        card.classList.add('project-item');
        card.setAttribute("data-nationality", project.nationality);
        
        // //add title
        // let title = document.createElement("h4");
        // title.textContent = project.name;
        // card.appendChild(title);
     
        //add image 
        const image = document.createElement("img");
        image.classList.add('project-image');
        image.src = project.image;
        card.appendChild(image);
        

        // // add subtitle
        // const subtitle = document.createElement("h6");
        // subtitle.textContent = project.architect;
        // card.appendChild(subtitle);


        return card;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






  // expand images with info

// var btn = document.getElementById('modalBtn');
// var modal = document.querySelector('.wrapperEl');
// var span = document.querySelector('.closeBtn');

// btn.addEventListener('click', function(e){
//   e.preventDefault();
  
//   modal.style.display = "block";
// });

// span.addEventListener('click', function(e){
//   e.preventDefault();
  
//   modal.style.display = "none";
// })