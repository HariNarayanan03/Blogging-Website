const mainSection = document.querySelector('.main-sec');

db.collection("blogs").get().then((blogs) =>{
    blogs.forEach(blog =>{
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) =>{
    let data=blog.data();
     mainSection.innerHTML +=`
    <section class="blogs-section">
      <div class="blog-card">
    <div class="card__header">
      <img src="${data.bannerImage}" class="card__image" alt="">
    </div>
    <div class="card__body">
     <h1 class="blog-title">${data.title.substring(0,100)+'...'}</h1>
     <p class="blog-overview">${data.article.substring(0,200) + '...'}</p>
     <a href="/${blog.id}" class="btn">read</a>
    </div>
 </div> 
</section>
     `;
}