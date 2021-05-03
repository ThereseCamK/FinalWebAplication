let blogCommitments = model.blogPage;

async function addBlog() {
    let input = {
        title: model.blogPage.title,
        description: model.blogPage.description
    };

    return  await addBlogData(input);


}

async function addBlogData(obj) {

    let response = await axios.post('Blog/01_blogCommitment.php', obj);
    showText(response.data);
console.table(response.data)

   /* await getBlogData();*/

}
/*
async function getBlogData() {

    const response = await axios.get('Blog/01_blogCommitment.php');
    blogComitments = response.data;
    console.table(blogComitments);

    blogCommitments = response.data.blogs;

   showAllBlogs(); //til hovedsiden

}*/