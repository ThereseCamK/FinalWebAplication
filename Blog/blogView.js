
function blogView(){
    let html = `<div class="blogs">
<div onclick="window.location.reload()"> <h3> Forside </h3> </div>

        <div onclick="adminShow()">Tilbake</div><br>
      Tittel:
      <input type="text" oninput="model.blogPage.title = this.value" />
        <br/>
       Beskrivelse:
       <input type="text" oninput="model.blogPage.description = this.value" />
        <br/>
        <div onclick="addBlog()">Legg til </div>
</div>
        `;

     model.content = html;
show();

}

function showText(name){
    let html= `<div class="blogs">
<div onclick="window.location.reload()"> <h3> Forsiden </h3> </div>
        <div onclick="blogView()"> Legg til Ny Blogg</div> 
        <div onclick="adminShow()"> Hjem</div>
        <div>Tittel: ${name.title} </div> <br>
        <div>Beskrivelse: ${name.description}</div>
        </div>
        `;
    model.content = html;
show()
}

function showBlogs(){
    let html=` <div>
                <div class="chosen" onclick="window.location.reload()"> <h3> Tilbake </h3> </div>
                <div class="blogs">
            
                 <h1 class="chosen">Velkommen til min Blogg</h1>
                 <p class="chosen">Noen hendelser som skjer i min hverdag</p>
        </div>
        </div>
         
`;

    model.content = html;
    show()

}
//UserView