let allProjects = '';
let editVisibilityforAdmin = model.login.admin === true ? ' ': 'visibility: hidden';
let editVisibilityforUsers = model.login.admin === false ? '': 'visibility: hidden';

function projectShow(){

    let html=` <div>
                 <h5 ${editVisibilityforUsers} onclick="window.location.reload()"> Forsiden </h5>
               
                <div ${editVisibilityforUsers}  class="blogs">
                
                    <h1 ${editVisibilityforUsers}>Velkommen til Mine Prosjekter</h1>
                    <p ${editVisibilityforUsers}>Prosjekter som jeg har vært med på å lage </p>
                 
                </div>
                             
              ${allProjects}
            
                </div>      
`;
    model.content = html;
    show()
}


function projectView(){

    let html = `   <h5 class="fa " onclick="changePage('admin')">&#11013; </h5>
<div class="blogs">        
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
    let html= `  <h5 class="fa " onclick="changePage('admin')">&#11013; </h5>
<div class="blogs">
<div onclick="window.location.reload()" > </div>
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
allProjects = `  <h5  ${editVisibilityforAdmin } onclick="changePage('admin')">&#11013; </h5> `
    for(let i =0; i < projectList.body.length ; i++){
        let id = projectList.body[i].id;
        allProjects += `
     
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
             <h5 style="text-align: left; font-size: 20px; color:hotpink" onclick="getProjectData()">&#11013; </h5>
                   <h2>${singleProject.projectName}</h2><br>
          
                 <div>${singleProject.content}</div> <br><br>
                 <a href="${singleProject.link}}" class="fa">LINK TIL SIDE</a>
                 <div style="text-align: right" >
                 <h4  onclick="editView(${singleProject.id})">&#9881</h4>
                 <h4  onclick="deleteProjectData(${singleProject.id})">&#10799</h4>
                   </div>
                  </div>
    `;
   console.log(singleProject)
    projectShow();

}
function editView(singleProjectId){

    allProjects = ` <h5 ${editVisibilityforAdmin } onclick="getOneProject(${singleProjectId})">&#11013; </h5>
            <div class="blogs" > Endre id: ${singleProjectId} </div>
           
          <div class="blogs" >
       Navn: <br>
            <input type="text" oninput="model.projectPage.projectName = this.value"  />
            <br/>
            
        Beskrivelse: <br>
            <textarea class="description"  oninput="model.projectPage.content= this.value" ></textarea>
            <br/>
            
        link:<br>
            <input type="url" oninput="model.projectPage.link = this.value"  /><br>
            
             <div onclick="editProjectData(${singleProjectId})"> OPPDATER </div>
           </div>
    `;

    projectShow();

}
function editProject(){
    userview = ' oppdatert ';
    allProjects = '';
    projectShow()


}
function showDeletedProject(txt){

    userview = txt ;
    allProjects = '';
    projectShow()

}