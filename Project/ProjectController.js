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
    let blogresponse = await axios.post('API/createProject.php', proObj);
    console.table(blogresponse.data, ' viser denne noe?')
    showProText(blogresponse.data);

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