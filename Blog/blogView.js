function blogView(){
    let html = `
      Tittel:
      <input type="text" oninput="model.blogPage.title = this.value" />
        <br/>
       Beskrivelse:
       <input type="text" oninput="model.blogPage.description = this.value" />
        <br/>
        <button onclick="addBlog()">Legg til </button>

        `;
    appDiv.innerHTML = html;
}

function showText(name){
    let html= `
        <div>Tittel: ${name.title} </div> <br>
        <div>Beskrivelse: ${name.description}</div>
        `;
    appDiv.innerHTML = html;
}