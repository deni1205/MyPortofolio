// Ambil elemen yang dibutuhkan dari DOM
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu li a');

// Fungsi untuk membuka/menutup menu
function toggleMenu() {
    navMenu.classList.toggle('active');
}

// Tambahkan event listener untuk 'click' pada ikon hamburger
hamburgerIcon.addEventListener('click', toggleMenu);

// Tambahkan event listener untuk setiap link di menu
// agar menu tertutup saat link diklik (berguna di mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Cek jika menu sedang aktif (terbuka di mobile)
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});