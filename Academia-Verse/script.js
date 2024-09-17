const thoughtForm = document.getElementById('thought-form');
const thoughtInput = document.getElementById('thought');
const thoughtList = document.getElementById('thought-list');


thoughtForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const thoughtText = thoughtInput.value.trim();
    if (thoughtText) {
        const thoughtItem = document.createElement('li');
        thoughtItem.textContent = thoughtText;


        const commentForm = document.createElement('form');
        commentForm.classList.add('comment-form');
        commentForm.innerHTML = `
            <textarea class="comment-input" placeholder="Add a comment"></textarea>
            <button type="submit" class="comment-button">Comment</button>
            <ul class="comment-list"></ul>
        `;


        thoughtItem.appendChild(commentForm);


        thoughtList.appendChild(thoughtItem);
        thoughtInput.value = '';


        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentInput = commentForm.querySelector('.comment-input');
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentList = commentForm.querySelector('.comment-list');
                const commentItem = document.createElement('li');
                commentItem.textContent = commentText;
                commentList.appendChild(commentItem);
                commentInput.value = '';
            }
        });
    }
});
