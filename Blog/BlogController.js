let blogCommitments = model.blogPage;

async function addBlog() {
    let input = {
        title: model.blogPage.title,
        description: model.blogPage.description
    };

    return  await addBlogData(input);


}

async function addBlogData(obj) {

    let response = await axios.post('API/01_blogCommitment.php', obj);
    showText(response.data);
    console.table(response.data)

}

async function getBlogData() {

    const response = await axios.get('API/read.php');
    blogCommitments = response.data;


    console.log(blogCommitments, 'fra controller')
    console.log(blogCommitments.body[0].title, 'lengde fra controller')

   await showAllBlogs(blogCommitments)




}