function projectShow(){
    let html=` <div>
                <div class="chosen" onclick="window.location.reload()"> <h3> Tilbake </h3> </div>
                <div class="about">
            
                     <h1 >Velkommen til Mine Prosjekter</h1>
                    <p >Prosjekter som jeg har vært med på å lage </p>
                 
                </div>
                </div>      
`;
    model.content = html;
    show()
}


function projectView(){
    let html = `<div class="blogs">
<div onclick="window.location.reload()"> <h3> Forside </h3> </div>

        <div onclick="adminShow()">Tilbake</div><br>
        
        Navn: <br>
            <input type="text" oninput="model.projectPage.projectName = this.value" />
            <br/>
            
        Beskrivelse: <br>
            <textarea class="description"  oninput="model.projectPage.content = this.value" ></textarea>
            <br/>
            
        link:<br>
            <input type="text" oninput="model.projectPage.link = this.value" /><br>
            
        <div onclick="addProject()">Legg til </div>
</div>
        `;

    model.content = html;
    show();

}

function showProText(proObj){
    let html= `<div class="about">
<div onclick="window.location.reload()"> <h3> Forsiden </h3> </div>
        <div onclick="projectView()"> Legg til Nytt Prosjekt</div> 
     
        <div onclick="adminShow()"> Hjem</div> <br>
           <hr>
        <div>Navn: ${proObj.projectName} </div> <br>
        <div>Beskrivelse: ${proObj.content}</div><br>
        <div>link: ${proObj.link}</div>
        </div>
        `;
    model.content = html;
    show()
}