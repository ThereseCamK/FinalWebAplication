let allBlogs = '';
function blogView(){
    const editVisibilityforUsers = model.login.admin === false ? ' ': 'visibility: hidden';

    let html = `<div class="blogs">
    <div ${editVisibilityforUsers} onclick="window.location.reload()"> <h3> Forside </h3> </div>

        <div onclick="adminShow()">Tilbake</div><br>
      Tittel: <br>
      <input type="text" oninput="model.blogPage.title = this.value" />
        <br/>
       Beskrivelse: <br>
       <textarea class="description"  oninput="model.blogPage.description = this.value" ></textarea>
       
        <br/>
         <input type="file" onchange="readImage(this)" /><br>
         <img id="myImage"/><br>
          <input type="datetime-local" oninput="model.blogPage.created = this.value" />
        <div onclick="addBlog()">Legg til </div>
</div>
        `;

     model.content = html;
show();
}
function showAllBlogs(blogList){


    for(let i = 0; i < blogList.body.length ; i++){
        let notFiles =  blogList.body[i].file != null ?  ` <img  src="${blogList.body[i].file}"/>` : ' ' ;
        allBlogs+= `
     
             <div class="blogs">
             <p style="color:hotpink">${blogList.body[i].created.slice(0,10)}</p>
                 <h1>${blogList.body[i].title}</h1>
                 <p>${blogList.body[i].description}</p><br>
                 <p>${notFiles}</p>
                </div>
   `;
    }
    //<image ${notFiles} src="${blogList.body[i].file}"> </div>
    showBlogs();
}

async function readImage(fileInput){

    const byteArray = await fileInput.files[0].arrayBuffer();
    const blob = new Blob([byteArray], {
        type: "image/jpeg"
    });
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(blob);
    document.getElementById('myImage').src = imageUrl;
    model.blogPage.file = imageUrl;
    console.log(imageUrl)
  /*  const array = new Uint8Array(this.result);


    //let myImage = document.getElementById('myImage');
    //myImage.src = URL.createObjectURL(fileInput.files[0]);

        const reader = new FileReader();
        reader.onload = function() {

            const byteArray = new Uint8Array(this.result);

            //model.blogPage.imageBytes = binaryString
            let myImage = document.getElementById('myImage');
            myImage.src = URL.createObjectURL(new Blob(byteArray), {type : 'image/jpeg'})
            //console.log(binaryString);

        }
        reader.readAsArrayBuffer(fileInput.files[0]);
    //model.blogPage.file = this.value*/
}

ToBase64 = function (u8) {
    return btoa(String.fromCharCode.apply(null, u8));
}

FromBase64 = function (str) {
    return atob(str).split('').map(function (c) { return c.charCodeAt(0); });
}

function showText(blogObj){
    let html= `<div class="blogs">
        
        <div onclick="blogView()"> Legg til Ny Blogg</div> 
        <div onclick="adminShow()"> Hjem</div>
        <hr>
        <div>${blogObj} </div> <br>
       
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


