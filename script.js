function showPage(page) {
    const article = document.getElementById('article');

    if (page === 'news') {
        article.innerHTML = '<h1>Новости</h1><p>Это текст новостей. Здесь публикуются актуальные события и обновления.</p><p>Сегодня отличный день для изучения HTML и CSS!</p>';
    }
    else if (page === 'about') {
        article.innerHTML = '<h1>Южный федеральный университет</h1><p>Южный федеральный университет (ЮФУ) — один из крупнейших университетов юга России.</p><p>Основан в 1915 году. Расположен в Ростове-на-Дону и Таганроге.</p>';
    }
    else if (page === 'contacts') {
        article.innerHTML = '<h1>Контакты</h1><p>Телефон: +7 (999) 123-45-67</p><p>Email: valeriya@sfedu.ru</p>';
    }
    else {
        article.innerHTML = '<h1>404 - Страница не найдена</h1><p>Извините, запрашиваемая страница не существует.</p>';
    }
}