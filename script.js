document.getElementById('submitComment').addEventListener('click', function() {
    const commentText = document.getElementById('newComment').value;
    if (commentText) {
        const commentSection = document.getElementById('commentSection');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <p><strong>Usuário Novo:</strong> ${commentText}</p>
            <button class="likeBtn">👍</button>
            <button class="replyBtn">Responder</button>
            <div class="replySection"></div>
        `;
        commentSection.appendChild(newComment);
        document.getElementById('newComment').value = '';
    }
});

document.getElementById('commentSection').addEventListener('click', function(event) {
    if (event.target.classList.contains('likeBtn')) {
        const likeBtn = event.target;
        let count = 0;
        count += 1;
        likeBtn.textContent = `👍 ${count}`;

    } else if (event.target.classList.contains('replyBtn')) {
        const replySection = event.target.nextElementSibling;
        const replyInput = document.createElement('textarea');
        const replySubmit = document.createElement('button');
        replySubmit.textContent = 'Responder';
        
        
        replySection.appendChild(replyInput);
        replySection.appendChild(replySubmit);
        
        replySubmit.addEventListener('click', function() {
            const replyText = replyInput.value;
            if (replyText) {
                const replyComment = document.createElement('div');
                replyComment.innerHTML = `<p><strong>Usuário Resposta:</strong> ${replyText}</p>`;
                replySection.appendChild(replyComment);
                replyInput.value = '';
                replyInput.remove();
                replySubmit.remove();
            }
        });
    }
});
