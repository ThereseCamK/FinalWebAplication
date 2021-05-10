let projectCommitments = model.projectPage;

async function addProject(){
    let projectinput = {
        projectName: model.projectPage.projectName,
        content: model.projectPage.content,
        link: model.projectPage.link
    };

    return await addProjectData(projectinput);
}

async function addProjectData(proObj){
    let proresponse = await axios.post('API/createProject.php', proObj);
    console.table(proresponse.data, ' viser denne noe?')
    showProText(proresponse.data);

}

async function getProjectData(){

    const projectResponse = await axios.get('API/readProject.php');
    projectCommitments = projectResponse.data;

    await showAllprojects(projectCommitments);
}

async function getOneProject(id){

    const singleResponse = await axios.get(`API/single_readProject.php/?id=${id}`);
    console.log(singleResponse.data)
   await  showOneProject(singleResponse.data);
}

async function editProjectData(udateid){
    let updateObj = {
        id: udateid,
        projectName: model.projectPage.projectName,
        content: model.projectPage.content,
        link: model.projectPage.link

    }
    const editProjectResponse = await axios.post('API/updateProject.php', updateObj);
    console.table(editProjectResponse.data, "hva viser ");
    editProject();

}
async function deleteProjectData(proID){

        const response = await axios.delete('API/delete_project.php', proID);
        console.log(response.data);



}