const filme = [
    {
        bild:"./images/avatar.JPG",
        beschreibung:"IDOD",
        titel:"Avatar",
        preis:"9.99 Fr.",
        id:1
    },{
        bild:"./images/starwars.jpg",
        beschreibung:"ikok",
        titel:"STAR WARS",
        preis:"15 Fr.",
        id:2
    },{
        bild:"./images/titanic.jpg",
        beschreibung:"IHOH",
        titel:"Titanic",
        preis:"9.99 Fr.",
        id:3
    }
]
function zeigeFilmkachel(){
    const container = document.getElementById("film-shop")
    container.innerHTML = ""
    filme.forEach(film =>{
      const kachel = document.createElement("div");
      kachel.className = "film-kachel"
    
    kachel.innerHTML=`<img
    slot="image"
    src="${film.bild}"
    alt="Avatar cover"
  />
    <h1><strong>${film.titel}</strong></h1>
    <h3><strong><em>Beschreibung:</em></strong></h3>    <h3><strong>${film.beschreibung}</strong></h3>
    <h3><strong><em>Preis:</em></strong></h3>           <h3><strong>${film.preis}</strong></h3>`
    container.appendChild(kachel)
})
}
function zeigeFilmdetails(id){

}