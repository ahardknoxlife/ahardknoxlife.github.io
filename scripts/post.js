let post_id = window.location.search.substring(window.location.search.indexOf('=') + 1, window.location.search.length);

fetch(`https://public-api.wordpress.com/rest/v1.1/sites/ahardknoxlife28994277.wordpress.com/posts/${post_id}`).then(function(data){
    data.json().then(function(data) {
        var postContainer = document.querySelector('.site-content'),
            htmlString = `
                <h2 class="page-header">${data.title}</h2>
                <div class="post__social">
                    <a class="post__social__link" target="_blank" href="https://www.facebook.com/share.php?u=${encodeURIComponent(window.location.href)}">
                        <img src="/images/facebook.svg" alt="Share on Facebook"/>
                    </a>
                    <a class="post__social__link" target="_blank" href="https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${data.featured_image}&description=${data.title}">
                        <img src="/images/pinterest-blue.svg" alt="Share on Pinterest"/>
                    </a>
                </div>
                <date class="post__date">${new Date(data.date).toLocaleDateString()}</date>
                <div class="post__content">
                    ${data.content}
                </div>

                <author class="post__author">
                    <img class="post__author__img" src="${data.author.avatar_URL}" alt="Author Avatar"/>
                    <span class="post__author__name">${data.author.first_name} ${data.author.last_name}</span>
                </author>
                
            `;
        postContainer.innerHTML = htmlString;
    })
})