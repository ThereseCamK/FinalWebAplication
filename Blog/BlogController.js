async function addBlog() {
    let input = {
        title: model.blogPage.title,
        description: model.blogPage.description
    };

    let result = await callPhp(input);

    console.log(result);
}

async function callPhp(obj) {

    let response = await axios.post('Blog/01_blogCommitment.php', obj);
    showText(response.data);
    return response.data;


}

