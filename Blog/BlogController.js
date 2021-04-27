async function addBlog() {
    let input = {
        title: model.blogPage.title,
        description: model.blogPage.description
    };


    let result = await callPhp(input);
    console.log(result);
}

async function callPhp(obj) {


    let response = await axios.post('Blog/01_blogCommitment.php', obj)
        .then(function(response){
            showText(response.data);

        console.log(response);
            return response.data;
         }).catch(function (error) {
        console.log(error);

    });

return response;


}

