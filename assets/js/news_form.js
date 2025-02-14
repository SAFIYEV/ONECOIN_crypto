// Массив для хранения статей
let articles = [];

// Функция для отображения статей на странице
function renderArticles() {
    const articleList = document.getElementById('articleList');
    articleList.innerHTML = ''; // Очистка списка

    articles.forEach((article, news) => {
        const li = document.createElement('li');
        li.innerHTML = 
            <><p><strong>${article.shortDescription}</strong></p><a href="${article.articleLink}" target="_blank">Читать полную статью</a><button onclick="deleteArticle(${news})">Удалить</button></>
        ;
        articleList.appendChild(li);
    });
}

// Обработка отправки формы
document.getElementById('articleForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const shortDescription = document.getElementById('shortDescription').value.trim();
    const articleLink = document.getElementById('articleLink').value.trim();

    if (shortDescription && articleLink) {
        const newArticle = { shortDescription, articleLink };
        articles.push(newArticle); // Добавление статьи в массив
        renderArticles(); // Перерисовка списка статей
        clearForm(); // Очистка формы
    } else {
        alert('Заполните все поля!');
    }
});

// Функция для удаления статьи
function deleteArticle(news) {
    articles.splice(news, 1); // Удаление статьи из массива
    renderArticles(); // Перерисовка списка статей
}

// Функция для очистки формы
function clearForm() {
    document.getElementById('shortDescription').value = '';
    document.getElementById('articleLink').value = '';
}

// Инициализация страницы
renderArticles();