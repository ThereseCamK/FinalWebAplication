async function addProject(){
    let projectinput = {
        projectName: model.projectPage.projectName,
        content: model.projectPage.content,
        link: model.projectPage.link
    };

    return await addProjectData(projectinput);
}

async function addProjectData(proObj){
    let blogresponse = await axios.post('API/01_ProjectCommitment.php', proObj);
    console.table(blogresponse.data, ' viser denne noe?')
    showProText(blogresponse.data);


}