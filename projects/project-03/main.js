console.log('this worked');


const projects = [
    {
        name: "Centro Cultural Internacional Oscar Niemeyer",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "2011",
        location: "Spain",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/7951c33e-d54b-480d-9246-32e26b3f25b2"
    },
    {
        name: "Catedral de Brasilia",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "1970",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/e53dd9ae-e8f3-4ae1-a55c-4b204bbe6bcd"
    },
    {
        name: "Museo de Arte Contemporaneo de Niteroi",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "1996",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/63ec7145-ed93-4dfe-8ea5-e98603f9cd24"
    },
    {
        name: "Congreso Nacional del Brasil",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "2006",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/9611c42d-6a9a-4e2b-947f-521fa966ed91"
    },
    {
        name: "Palacio Da Alvorada",
        architect: "Oscar Niemeyer",
        nationality: "Brazil",
        year: "1958",
        location: "Brazil",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/f79f7b29-f5ea-4705-84c2-d59f628711f7"
    },
    {
        name: "Biblioteca Nacional Mariano Moreno",
        architect: "Clorindo Testa",
        nationality: "Argentino",
        year: "1991",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/ac661d44-174e-4436-9e7f-851464f69326"
    },
    {
        name: "IBM Buildiding",
        architect: "Mario Roberto Alvarez",
        nationality: "Argentina",
        year: "1979",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/50f08d7f-c569-437d-a834-039f13fb484d"
    },
    {
        name: "SOMISA Building",
        architect: "Mario Roberto Alvarez",
        nationality: "Argentina",
        year: "1977",
        location: "Argentina",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/9cce30c0-b6a8-478c-89f4-633c8acf2101"
    },
    {
        name: "Casa del Puente",
        architect: "Amancio Williams",
        nationality: "Argentina",
        year: "1946",
        location: "Argentina",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/2aa9ff80-1117-4e07-a1d3-d237086c570b"
    },
    {
        name: "Quinta Monroy Housing",
        architect: "Alejandro Aravena",
        nationality: "Chile",
        year: "2003",
        location: "Chile",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/8551108d-8c77-45ab-98a1-cf74a73bc809"
    },
    {
        name: "Torres Siamesas",
        architect: "Alejandro Aravena",
        nationality: "Chile",
        year: "2003",
        location: "Chile",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/51d0b66d-d761-427c-bb30-48476d6865af"
    },
    {
        name: "Villa Verde Housing",
        architect: "Alejandro Aravena",
        nationality: "Chile",
        year: "2010",
        location: "Chile",
        type: "Residencial",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/73e3483b-5499-4eca-8946-b7640d9f3497"
    },
    {
        name: "Glass House",
        architect: "Lina Bo Bardi",
        nationality: "Brazil",
        year: "1950",
        location: "Brazil",
        type: "Residential",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/b7aaba17-9dc9-413c-b88a-a6fdb7d25638"
    },
    {
        name: "SESC Pompeia",
        architect: "Lina Bo Bardi",
        nationality: "Brazil",
        year: "1986",
        location: "Brazil",
        type: "Institutional",
        image: "https://github.com/CandelariaGassiebayle/literate-umbrella/assets/144853643/e6b0d342-3184-45fc-9f58-bc1ab4e2bd38"
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
]


//grab the ul
const ul = document.querySelector('.items'); 

//write function to render flowers to page
const renderProjectsToPage = (items) => {
    for(let i = 0; i < items.length; i++){
        console.log(items[i]);

        //create list item 
        let list_item = document.createElement("li");
        //flower name
        let title = document.createElement("h4");
        title.textContent = projects[i].name;
        // // flower color
        // let color = document.createElement("p");
        // color.textContent = flowers[i].color;
        //image 
        let image = document.createElement("img");
        image.setAttribute("src", projects[i].image);
        let subtitle = document.createElement("h6");
        subtitle.textContent = projects[i].architect;

        //append to page
        ul.appendChild(list_item)
        list_item.appendChild(title)
        // list_item.appendChild(color)
        list_item.appendChild(image)
    }
}


//pass data into it
renderProjectsToPage(projects)


