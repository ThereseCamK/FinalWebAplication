let allBlogs = '';
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


//UserView
function showBlogs(){



    let html=` <div>
                <div class="chosen" onclick="window.location.reload()"> <h3> Tilbake </h3> </div>
                <div class="blogs">
            
                 <h1 >Velkommen til min Blogg</h1>
                 <p >Noen hendelser som skjer i min hverdag</p>
          
                </div>
                       
              ${allBlogs}
                 </div>
                
         
`;

    model.content = html;
    show();
}


function showAllBlogs(blogList){

    for(let i =0; i < blogCommitments.length ; i++){
        allBlogs+= `
     
             <div class="blogs">
                 <h1>${blogList[i].title}</h1>
                 <p>${blogList[i].description}</p></div>
   `;
    }



    console.log(blogList, 'hva er dette')
    console.log(blogList.length, ' hvor lang er lista')

    showBlogs();



}