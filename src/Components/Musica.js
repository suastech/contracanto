import '../style-sheets/Musica.css'


function Musica() {

return (
    <div id="musica">
        <h1>Nuestra música</h1>  
        <div className="youtube">
            <iframe width="30%" height="250px" src="https://www.youtube.com/embed/dSGLmmKwLG0" title="La Llorona" frameBorder="0" allowFullScreen/>
            <iframe width="30%" height="250px" src="https://www.youtube.com/embed/RA6agOy24Gs" title="Idilio" frameBorder="0" allowFullScreen/>
        </div>
        <div className="youtube">
            <iframe width="30%" height="250px" src="https://www.youtube.com/embed/j6Asb0tRxQ4" title="ContraCanto" frameBorder="0" allowFullScreen/>
            <iframe width="30%" height="250px" src="https://www.youtube.com/embed/U4NVRYUqBcI" title="Cielito lindo" frameBorder="0" allowFullScreen/>
        </div>

        {/*
        <div id="playlist" >
            <iframe style={{borderRadius:"12px"}}
                title="pista1"
                src="https://open.spotify.com/embed/album/7IdWJB2mppICU2zL82mjKW?utm_source=generator&theme=0"
                width="68%"
                height="152"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        </div>
        */}

    </div>

) 

}

export default Musica;