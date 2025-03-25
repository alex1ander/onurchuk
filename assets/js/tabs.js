document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll('.tab-head');
    const indicator = document.querySelector('.indicator');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab-head.active').classList.remove('active');
            tab.classList.add('active');
            indicator.style.transform = `translateX(${index * 100}%)`;


            const tabId = tab.id; // "tab-head-1"
            const tabNumber = tabId.split('-').pop(); // Получаем "1"

            document.querySelector('.tab-body.active').classList.remove('active');
            // Формируем новый ID и добавляем класс active
            const newTabId = `#tab-body-${tabNumber}`;
            document.querySelector(newTabId).classList.add('active');

            // Двигаем индикатор (если он есть)
            if (indicator) {
                indicator.style.transform = `translateX(${(tabNumber - 1) * 100}%)`;
            }
        });
    });
});
