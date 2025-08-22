document.addEventListener('DOMContentLoaded', () => {
    // Плавная прокрутка для навигации на главной странице
    // (на gallery.html ссылки уже абсолютные или относительные к #)
    if (document.body.id === 'index-page') { // Добавим ID для body на index.html
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    // Здесь можно добавить другие скрипты, общие для всех страниц
    // Например, для ленивой загрузки изображений (но пока не включено)
});
