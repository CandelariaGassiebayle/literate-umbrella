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
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/5be254ab-a7b9-44f4-b92d-36b486743666"
    },
    {
        name: "Casa Gilardi",
        architect: "Luis Barragan",
        nationality: "Mexico",
        year: "1976",
        location: "Mexico",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/ce447dc5-df61-4fc5-95d4-23779013233a"
    },
    {
        name: "Iglesia de Atlántida Cristo Obrero",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1960",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/72e96bcc-7209-4f55-a5ae-7bb65a572405"
    },
    {
        name: "Iglesia de San Pedro",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1967",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/60a70c52-4745-48ea-b87f-f69a3740e299"
    },
    {
        name: "Terminal Municipal de Ómnibus",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1973",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/8ca4a5df-7378-449c-9d5a-4af580ed598a"
    },
    {
        name: "Gimnasio polideportivo",
        architect: "Eladio Dieste",
        nationality: "Uruguay",
        year: "1974",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/61439a45-3a25-4db0-ba33-be4587bfa579"
    },
    {
        name: "São Paulo Museum of Art (MASP)",
        architect: "Lina Bo bardi",
        nationality: "Brazil",
        year: "1947",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/538ad58c-cbe2-40a3-8092-16698768d432"
    },
    {
        name: "Torre UniCredit",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "2012",
        location: "Italy",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/1c318b78-c438-475e-92ec-16820dbf4a22"
    },
    {
        name: "Torre Iberdrola",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "2011",
        location: "Spain",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/59ee5a6e-cc15-49b0-8688-8e8ecea5431e"
    },
    {
        name: "Torre Macro",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "2018",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/be0f0b8f-cf6e-4d69-8141-d6b9adab0e3c"
    },
    {
        name: "Torres Petronas",
        architect: "Cesar Pelli",
        nationality: "Argentina",
        year: "1998",
        location: "Malaysia",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/0eeb4eb1-eb90-436b-b340-f674eb1af3b5"
    },
    {
        name: "Tokyo International Forum",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "1997",
        location: "Japan",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/55dee458-f95a-49ba-8ece-08e856c1f7a1"
    },
    {
        name: "432 Park Avenue Condominiums",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "2012",
        location: "United States",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/b8ab1f77-6f74-4054-92ba-5428bc7af005"
    },
    {
        name: "Carrasco International Airport",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "2009",
        location: "Uruguay",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/b9bdae4c-105e-40f3-8fe8-092b6ec89309"
    },
    {
        name: "20 Fenchurch Street",
        architect: "Rafael Viñoly",
        nationality: "Uruguay",
        year: "2014",
        location: "London",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/737b519b-21c1-4c8f-bf86-670d42df0a2a"
    },
    {
        name: "Hotel Camino Real CDMX",
        architect: "Ricardo Legorreta",
        nationality: "Mexico",
        year: "1968",
        location: "Mexico",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/75667770-f9ab-4576-bd20-9f4a078c2922"
    },
    {
        name: "Cortés Sea Research Center",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2023",
        location: "Mexico",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/5352d67c-27ca-4b25-b99f-b38691af6e24"
    },
    {
        name: "Los Terrenos",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2016",
        location: "Mexico",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/36fc66fc-de32-4735-a2b9-e440ddd3dbc3"
    },
    {
        name: "Bioinnova",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2012",
        location: "Mexico",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/e95db4d3-7ff4-4d15-a4e4-3cfeb6ad1dbe"
    },
    {
        name: "Ajijic",
        architect: "Tatiana Bilbao",
        nationality: "Mexico",
        year: "2010",
        location: "Mexico",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/90b9b854-151f-4ce8-af48-61603127ab61"
    },
];

console.log(catalog.length);

const container = document.getElementById('catalog');
const maxColumns = 6; // Match to number of columns in CSS
const maxRows = 4;



catalog.forEach(card => {
    const cardElement = createCardElement(card);
  
    cardElement.style.gridColumnStart = getRandomInt(1, maxColumns);
    cardElement.style.gridRowStart = getRandomInt(1, maxRows);

    container.appendChild(cardElement)
});



// FILTER
const filterBtns = document.querySelector(".filters");
const cards = document.getElementsByClassName('project-item');
console.log(cards.length)

const filterFn = (event) => {
    if(event.target.classList.contains('filter-btn')){

        let active = filterBtns.querySelector('.active');
        active.classList.remove('active');

        event.target.classList.add('active');

        const filterValue = event.target.getAttribute("data-filter")

        for(let i = 0; i < cards.length; i++){
            if(cards[i].classList.contains(filterValue) || filterValue === "all"){
                console.log(cards[i].classList)
                // cards[i].style.display = "none"
                cards[i].classList.remove('hide')
                cards[i].classList.add('show')
            } else {
                cards[i].classList.remove('show')
                cards[i].classList.add('hide')
            }
        }

    }
}


    filterBtns.addEventListener('click', filterFn)


    // MODAL
    let modal = document.querySelector('.wrapperEl');
    let span = document.querySelector('.closeBtn');

            container.addEventListener('click', function (event) {
                if (event.target.classList.contains('project-image')) {
                    const cardIndex = Array.from(container.children).indexOf(event.target.parentElement);
            
                    const selectedProject = catalog[cardIndex];
            
                    document.getElementById('modalTitle').innerText = selectedProject.name;
                    document.getElementById('architectInfo').innerText = `Architect: ${selectedProject.architect}`;
                    document.getElementById('nationalityInfo').innerText = `Nationality: ${selectedProject.nationality}`;
                    document.getElementById('yearInfo').innerText = `Year: ${selectedProject.year}`;
                    document.getElementById('locationInfo').innerText = `Location: ${selectedProject.location}`;
                    document.getElementById('typeInfo').innerText = `Type: ${selectedProject.type}`;

                    modal.style.display = "block";
                }})

    // Close modal function
    const closeModal = () => {
        modal.style.display = "none";
    };

    // Event listener for close button
    span.addEventListener('click', closeModal);

    // Event listener to close the modal when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

});





//IMAGE DISPLAY
function createCardElement (project) {
        const card = document.createElement("div");
        card.classList.add('project-item', project.nationality);
        card.setAttribute("data-nationality", project.nationality);
                                
        const image = document.createElement("img");
                                    image.classList.add('project-image');
                                    image.src = project.image;
                                    card.appendChild(image);

                                    return card;
                            }
                            function getRandomInt(min, max) {
                                return Math.floor(Math.random() * (max - min + 1)) + min;
                    }




