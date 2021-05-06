let blogCommitments = model.blogPage;

async function addBlog() {
    let input = {
        title: model.blogPage.title,
        description: model.blogPage.description
    };

    return  await addBlogData(input);


}

async function addBlogData(obj) {

    let response = await axios.post('API/createBlog.php', obj);
    showText(response.data);
    console.table(response.data)

}

async function getBlogData() {

    const response = await axios.get('API/readBlog.php');
    blogCommitments = response.data;




   await showAllBlogs(blogCommitments)




}