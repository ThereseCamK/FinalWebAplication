function blogView(){
    let html = `
        <button onclick="adminShow()">Tilbake</button><br>
      Tittel:
      <input type="text" oninput="model.blogPage.title = this.value" />
        <br/>
       Beskrivelse:
       <input type="text" oninput="model.blogPage.description = this.value" />
        <br/>
        <button onclick="addBlog()">Legg til </button>

        `;
     model.content = html;
show()
}

function showText(name){
    let html= `
        <button onclick="blogView()"> Legg til Ny Blogg</button> 
        <button onclick="adminShow()"> Hjem</button>
        <div>Tittel: ${name.title} </div> <br>
        <div>Beskrivelse: ${name.description}</div>
        `;
    model.content = html;
show()
}

function showBlogs(){
    let html=`

        <div class="bg-text">

          <h1>Velkommen til min Blogg</h1>
          <p>Noen hendelser som skjer i min hverdag</p>
        </div>

`;

    model.content = html;
    show()

}
//UserView