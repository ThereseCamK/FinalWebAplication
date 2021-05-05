
function blogView(){
    let html = `<div class="blogs">
<div onclick="window.location.reload()"> <h3> Forside </h3> </div>

        <div onclick="adminShow()">Tilbake</div><br>
      Tittel: <br>
      <input type="text" oninput="model.blogPage.title = this.value" />
        <br/>
       Beskrivelse: <br>
       <textarea class="description"  oninput="model.blogPage.description = this.value" ></textarea>
        <br/><br>
        <div onclick="addBlog()">Legg til </div>
</div>
        `;

     model.content = html;
show();

}

function showText(blogObj){
    let html= `<div class="blogs">
        <div onclick="window.location.reload()"> <h3> Forsiden </h3> </div>
        <div onclick="blogView()"> Legg til Ny Blogg</div> 
        <div onclick="adminShow()"> Hjem</div>
        <hr>
        <div>Tittel: ${blogObj.title} </div> <br>
        <div>Beskrivelse: ${blogObj.description}</div>
        </div>
        `;
    model.content = html;
show()
}

function showBlogs(){



    let html=` <div>
                <div class="chosen" onclick="window.location.reload()"> <h3> Tilbake </h3> </div>
                <div class="blogs">
            
                 <h1 >Velkommen til min Blogg</h1>
                 <p >Noen hendelser som skjer i min hverdag</p>
                 
                 
                </div>
                 </div>
                
         
`;

    model.content = html;
    show();
}
//UserView
/*${showAllBlogs()}
function showAllBlogs(){
    let blogs = model.blogPage.map(b => `
      <div class="blogs">
            
                 <h1>${b.title}</h1>
                 <p>${b.description}</p>
                </div>
    `)

  return blogs;

}*/