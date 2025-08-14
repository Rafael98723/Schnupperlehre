const Schuhe = [
    {
        bild:"./images/Kobes.avif",
        beschreibung:"Gute leistungs Schuhe!",
        titel:"Nike Kobe 6 All Stars",
        preis:"200 Fr.",
        id:1
    },{
        bild:"./images/grinches.jpg",
        beschreibung:"Sehr gute Schuhe. Kaufen sie die Schuhe Heute!",
        titel:"Nike Kobe 6 Grinches",
        preis:"540 Fr.",
        id:2
    },{
        bild:"./images/Totalorange.jpg",
        beschreibung:"Sehr bunte und gute Schuhe. Kaufen sie noch Heute!",
        titel:"Nike Kobe 6 Total Orange",
        preis:"210 Fr.",
        id:3
    }
]
function zeigeShuhkachel(){
    const container = document.getElementById("shoe-shop")
    container.innerHTML = ""
    Schuhe.forEach(Schuhe =>{
      const kachel = document.createElement("div");
      kachel.className = "schuh-kachel"
    
    kachel.innerHTML=`<sl-card class="card-overview">
  <img
    slot="image"
    src="${Schuhe.bild}"
    alt="Basketball shoes"
  />

  <strong>${Schuhe.titel}</strong>
  <br> ${Schuhe.beschreibung}<br />
 

  <div slot="footer">
    <sl-button variant="primary" pill>More Info</sl-button>
    <sl-rating></sl-rating>
  </div>
</sl-card>`
    container.appendChild(kachel)
})
}
function zeigeFilmdetails(id){

}