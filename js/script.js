// Ambil elemen container hero
const heroContainer = document.querySelector('.hero .container');

// Tambahkan event listener untuk mendeteksi saat halaman dimuat
window.addEventListener('load', () => {
    // Tambahkan kelas 'animated' setelah jeda singkat
    setTimeout(() => {
        heroContainer.classList.add('animated');
    }, 100);
});

document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.querySelector(".about");
    
    aboutSection.classList.add("show");
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Menghentikan aksi default dari tautan
            event.preventDefault();
            
            // Menghapus class "active" dari semua tautan
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            
            // Menambah class "active" ke tautan yang diklik
            this.classList.add("active");
            
            // Mendapatkan id dari bagian terkait
            const targetId = this.getAttribute("href").substring(1);
            
            // Menggulir halaman ke bagian terkait dengan efek smooth
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    function setActiveNavLink() {
        // Mendapatkan posisi scroll
        const scrollPosition = window.scrollY;

        // Menentukan bagian yang sedang ditampilkan di layar
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Menentukan tautan yang sesuai dengan bagian yang sedang ditampilkan
                const targetId = section.getAttribute("id");
                const targetLink = document.querySelector(`nav a[href="#${targetId}"]`);

                // Menghapus kelas "active" dari semua tautan
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });

                // Menambahkan kelas "active" ke tautan yang sesuai
                if (targetLink) {
                    targetLink.classList.add("active");
                }
            }
        });
    }

    // Memanggil fungsi untuk menetapkan tautan yang aktif saat halaman dimuat
    setActiveNavLink();

    // Mendeteksi perubahan posisi scroll
    window.addEventListener("scroll", setActiveNavLink);
});

document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Backend Developer", "FrontEnd Developer", "Web Developer", "Software Engineer"]; // Array of texts to be displayed
    const typingSpeed = 100; // Kecepatan typing (ms per karakter)
    const typingDelay = 1000; // Delay sebelum typing dimulai (ms)

    const typingElement = document.getElementById("typingEffect");
    const cursorElement = document.getElementById("cursor");
    let index = 0;

    function typeNextText() {
        let currentText = textArray[index];
        let currentIndex = 0;

        // Interval untuk menambahkan karakter satu per satu
        let typingInterval = setInterval(function() {
            if (currentIndex < currentText.length) {
                typingElement.textContent += currentText[currentIndex];
                currentIndex++;
            } else {
                // Jika semua karakter telah ditambahkan, hentikan interval
                clearInterval(typingInterval);

                // Tunggu sebelum menghapus teks
                setTimeout(function() {
                    deleteCurrentText();
                }, typingDelay);
            }
        }, typingSpeed);
    }

    function deleteCurrentText() {
        // Interval untuk menghapus teks satu per satu
        let deletingInterval = setInterval(function() {
            let currentLength = typingElement.textContent.length;
            if (currentLength > 0) {
                // Hapus satu karakter terakhir
                typingElement.textContent = typingElement.textContent.slice(0, currentLength - 1);
            } else {
                // Jika teks telah dihapus, lanjutkan ke teks berikutnya
                clearInterval(deletingInterval);
                index = (index + 1) % textArray.length; // Pindah ke indeks teks berikutnya
                typeNextText(); // Mulai menampilkan teks berikutnya
            }
        }, typingSpeed);
    }

    // Memulai animasi pengetikan
    setTimeout(function() {
        typeNextText();
        setInterval(function() {
            cursorElement.classList.toggle("hidden");
        }, typingSpeed);
    }, typingDelay);
});
