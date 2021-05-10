let allProjects = '';
let userview = ` <h1 >Velkommen til Mine Prosjekter</h1>
                    <p >Prosjekter som jeg har vært med på å lage </p>`;


function projectShow(){
    let html=` <div>
                <div class="chosen" onclick="window.location.reload()"> <h3> Forsiden </h3> </div>
                <div class="blogs">
            
                    ${userview}
                 
                </div>
                             
              ${allProjects}
            
                </div>      
`;
    model.content = html;
    show()
}


function projectView(){
    userview = 'ADMIN';
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
            <input type="url" oninput="model.projectPage.link = this.value" /><br>
            
        <div onclick="addProject()">Legg til </div>
</div>
        `;

    model.content = html;
    show();

}

function showProText(proObj){
    let html= `<div class="blogs">
<div onclick="window.location.reload()"> <h3> Forsiden </h3> </div>
        <div onclick="projectView()"> Legg til Nytt Prosjekt</div> 
     
        <div onclick="adminShow()"> Hjem</div> <br>
           <hr>
      ${proObj}
        </div>
        `;
    model.content = html;
    show()
}

function showAllprojects(projectList){

    for(let i =0; i < projectList.body.length ; i++){
        let id = projectList.body[i].id;
        allProjects = `
     
             <div class="blogs" >
                 <h3 onclick="getOneProject(${id})">${projectList.body[i].projectName}</h3>
             
                  </div>
`;
        console.log(id, ' er dette id? ')
    }
    projectShow();
}
function showOneProject(singleProject){

    allProjects = `
          <div class="blogs" >
                 <h2>${singleProject.projectName}</h2>
                 <hr>
                 <div>${singleProject.content}</div> <br><br>
                 <a href="${singleProject.link}}" class="fa">LINK TIL SIDE</a>
                 <div style="text-align: right" >
                 <h5 onclick="editView(${singleProject.id})">&#9881</h5>
                 <h5 onclick="deleteProjectData(${singleProject.id})">&#10799</h5>
                   </div>
                  </div>
    `;
   console.log(singleProject)
    projectShow();

}
function editView(singleProjectId){
    userview = ` id: ${singleProjectId} `;
    allProjects = `
           
       Navn: <br>
            <input type="text" oninput="model.projectPage.projectName = this.value"  />
            <br/>
            
        Beskrivelse: <br>
            <textarea class="description"  oninput="model.projectPage.content= this.value" ></textarea>
            <br/>
            
        link:<br>
            <input type="url" oninput="model.projectPage.link = this.value"  /><br>
            
             <div onclick="editProjectData(${singleProjectId})"> OPPDATER </div>
    `;

    projectShow();

}
function editProject(){
    userview = ' oppdatert ';
    return allProjects;

}
function showDeletedProject(){

   userview = ' Prosjekt Slettet';
   return allProjects;

}