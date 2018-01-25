fetch('https://public-api.wordpress.com/rest/v1.1/sites/ahardknoxlife28994277.wordpress.com/posts/?number=2&pretty=true').then(function(data){
    data.json().then(function(data) {
        var postsContainer = document.querySelector('.posts-container'),
            htmlString = ``;
        data.posts.map(function(post, index) {
            console.log(post)
            htmlString = htmlString + `
                <div class="post">
                    <div class="post__image">
                        <a href="/post?post_id=${post.ID}">
                            <img src="${post.featured_image}" alt=""/>
                        </a> 
                    </div>
                    <div class="post__content">
                        <a href="/post?post_id=${post.ID}" class="post__title">
                            ${post.title}
                        </a>
                        <date class="post__date">${new Date(post.date).toLocaleDateString()}</date>
                        <summary class="post__excerpt">${post.excerpt}</summary>
                    </div>
                </div>
            `
            
        })
        postsContainer.innerHTML = htmlString;
    })
})