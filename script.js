// DOM Yüklendikten Sonra İşlemler
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown menü butonu ve içerik
    const dropdownButton = document.querySelector('.dropdown span');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Dropdown menüyü aç/kapat
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Tıklamanın diğer eventlere yayılmasını engeller
        dropdownContent.classList.toggle('show');
    });

    // Sayfada herhangi bir yere tıklanınca dropdown menüyü kapat
    window.addEventListener('click', (event) => {
        if (!dropdownContent.contains(event.target) && event.target !== dropdownButton) {
            dropdownContent.classList.remove('show');
        }
    });

    // Kategori bağlantılarına tıklama
    const categoryLinks = dropdownContent.querySelectorAll('a');
    categoryLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Sayfanın yeniden yüklenmesini engelle
            alert("${link.textContent}" kategorisine gidiliyor...);

            // Yönlendirme kodunu buraya ekleyebilirsin
            // window.location.href = 'kategoriler/' + link.textContent.toLowerCase().replace(/ /g, '-');

            // Dropdown'ı kapat
            dropdownContent.classList.remove('show');
        });
    });
});