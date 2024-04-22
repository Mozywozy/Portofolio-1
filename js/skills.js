document.querySelectorAll('.card-skill').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.querySelector('.card-back').style.display = 'flex'; // Tampilkan teks saat kursor masuk
    });
    
    card.addEventListener('mouseleave', function() {
        card.querySelector('.card-back').style.display = 'none'; // Sembunyikan teks saat kursor meninggalkan card
    });
});
