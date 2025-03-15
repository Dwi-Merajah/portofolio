const welcomeText = document.querySelector('.welcome-text span');
const text = "Welcome To Tamako";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        welcomeText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 400); // Sesuaikan kecepatan mengetik di sini
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgm');

    // Coba putar audio secara langsung
    audio.play()
        .then(() => {
            console.log('Autoplay berhasil!');
        })
        .catch(error => {
            console.error('Autoplay gagal:', error);

            // Jika autoplay gagal, coba putar audio setelah interaksi pengguna pertama
            const playAudio = () => {
                audio.play();
                document.removeEventListener('click', playAudio);
            };

            document.addEventListener('click', playAudio);
        });
});

typeWriter();
