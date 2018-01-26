let post_id = window.location.search.substring(window.location.search.indexOf('=') + 1, window.location.search.length);

fetch(`https://public-api.wordpress.com/rest/v1.1/sites/ahardknoxlife28994277.wordpress.com/posts/${post_id}`).then(function(data){
    data.json().then(function(data) {
        let head = document.querySelector('head'),
            ogURL = document.createElement('meta'),
            ogType = document.createElement('meta'),
            ogTitle = document.createElement('meta'),
            ogDesc = document.createElement('meta'),
            ogImg = document.createElement('meta');

            ogURL.setAttribute('property', 'og:url');
            ogURL.setAttribute('content', window.location.href);

            ogType.setAttribute('property', 'og:type');
            ogType.setAttribute('content', 'article');

            ogTitle.setAttribute('property', 'og:title');
            ogTitle.setAttribute('content', data.title);

            ogType.setAttribute('property', 'og:type');
            ogType.setAttribute('content', 'article');

            ogDesc.setAttribute('property', 'og:description');
            ogDesc.setAttribute('content', data.excerpt);

            ogImg.setAttribute('property', 'og:image');
            ogImg.setAttribute('content', data.featured_image);

        head.appendChild(ogURL);
        head.appendChild(ogType);
        head.appendChild(ogTitle);
        head.appendChild(ogDesc);
        head.appendChild(ogImg);


        var postContainer = document.querySelector('.site-content'),
            htmlString = `
                <h2 class="page-header">${data.title}</h2>
                <div class="post__social">
                    <a class="post__social__link" target="_blank" href="https://www.facebook.com/sharer.php?description=${data.title}&u=${encodeURIComponent(window.location.href)}&picture=${data.featured_image}">
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