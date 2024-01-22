import '../style-sheets/Musica.css'


function Musica() {

return (
    <div id="musica">
        <h1>Nuestra música</h1>
        
        <div class="youtube">
            <iframe width="30%" height="250px" src="https://www.youtube.com/embed/dSGLmmKwLG0" title="La Llorona" frameborder="0" allowfullscreen/>
            <iframe width="30%" height="250px" src="https://www.youtube.com/embed/RA6agOy24Gs" title="Idilio" frameborder="0" allowfullscreen/>
        </div>

        <div id="playlist" >
            <iframe style={{borderRadius:"12px"}}
                title="pista1"
                src="https://open.spotify.com/embed/album/7IdWJB2mppICU2zL82mjKW?utm_source=generator&theme=0"
                width="68%"
                height="152"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>

        </div>

    </div>

) 

}

export default Musica;