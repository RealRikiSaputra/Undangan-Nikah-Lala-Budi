$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if( wScroll > $('.flower').offset().top - 500 ) {
        $('.flower').addClass('muncul');
    } else {
        $('.flower').removeClass('muncul');
    }
    
    if( wScroll > $('.title').offset().top - 510 ) {
        $('.title').addClass('muncul'); 
    } else {
        $('.title').removeClass('muncul');
    }

    if( wScroll > $('.opening').offset().top - 530 ) {
        $('.opening').addClass('muncul'); 
    } else {
        $('.opening').removeClass('muncul');
    }

    if( wScroll > $('.profiles').offset().top - 560 ) {
        $('.profiles').addClass('muncul'); 
    } else {
        $('.profiles').removeClass('muncul');
    }

    if( wScroll > $('.profile-1').offset().top - 500 ) {
        $('.profile-1').addClass('muncul');
    } else {
        $('.profile-1').removeClass('muncul');
    }

    if( wScroll > $('.profile-2').offset().top - 500 ) {
        $('.profile-2').addClass('muncul');
    } else {
        $('.profile-2').removeClass('muncul');
    }

    if( wScroll > $('.dan').offset().top - 550 ) {
        $('.dan').addClass('muncul'); 
    } else {
        $('.dan').removeClass('muncul');
    }

    if( wScroll > $('.dan2').offset().top - 500 ) {
        $('.dan2').addClass('muncul'); 
    } else {
        $('.dan2').removeClass('muncul');
    }

    if( wScroll > $('.flower2').offset().top - 550 ) {
        $('.flower2').addClass('muncul');
    } else {
        $('.flower2').removeClass('muncul');
    }

    if( wScroll > $('.title2').offset().top - 540 ) {
        $('.title2').addClass('muncul'); 
    } else {
        $('.title2').removeClass('muncul');
    }

    if( wScroll > $('.flower3').offset().top - 550 ) {
        $('.flower3').addClass('muncul');
    } else {
        $('.flower3').removeClass('muncul');
    }

    if( wScroll > $('.title3').offset().top - 550 ) {
        $('.title3').addClass('muncul'); 
    } else {
        $('.title3').removeClass('muncul');
    }

    if( wScroll > $('.flower4').offset().top - 550 ) {
        $('.flower4').addClass('muncul');
    } else {
        $('.flower4').removeClass('muncul');
    }

    if( wScroll > $('.title4').offset().top - 550 ) {
        $('.title4').addClass('muncul'); 
    } else {
        $('.title4').removeClass('muncul');
    }

    if( wScroll > $('.flower5').offset().top - 550 ) {
        $('.flower5').addClass('muncul');
    } else {
        $('.flower5').removeClass('muncul');
    }

    if( wScroll > $('.title5').offset().top - 550 ) {
        $('.title5').addClass('muncul'); 
    } else {
        $('.title5').removeClass('muncul');
    }

    if( wScroll > $('.card1').offset().top - 500 ) {
        $('.card1').addClass('muncul'); 
    } else {
        $('.card1').removeClass('muncul');
    }

    if( wScroll > $('.card2').offset().top - 500 ) {
        $('.card2').addClass('muncul'); 
    } else {
        $('.card2').removeClass('muncul');
    }

    if( wScroll > $('#img1').offset().top - 600 ) {
        $('#img1').addClass('muncul');
    } else {
        $('#img1').removeClass('muncul');
    }

    if( wScroll > $('#img2').offset().top - 600 ) {
        $('#img2').addClass('muncul'); 
    } else {
        $('#img2').removeClass('muncul');
    }

    if( wScroll > $('#img4').offset().top - 600 ) {
        $('#img4').addClass('muncul'); 
    } else {
        $('#img4').removeClass('muncul');
    }

    if( wScroll > $('#img5').offset().top - 600 ) {
        $('#img5').addClass('muncul'); 
    } else {
        $('#img5').removeClass('muncul');
    }

    if( wScroll > $('#img6').offset().top - 600 ) {
        $('#img6').addClass('muncul'); 
    } else {
        $('#img6').removeClass('muncul');
    }

    if(wScroll > $('.circle1').offset().top - 550 ) {
        $('.circle1').addClass('muncul');
    } else {
        $('.circle1').removeClass('muncul');
    }
    
    if(wScroll > $('.circle2').offset().top - 550 ) {
        $('.circle2').addClass('muncul');
    } else {
        $('.circle2').removeClass('muncul');
    }

    if(wScroll > $('.circle3').offset().top - 550 ) {
        $('.circle3').addClass('muncul');
    } else {
        $('.circle3').removeClass('muncul');
    }

    if(wScroll > $('.circle4').offset().top - 550 ) {
        $('.circle4').addClass('muncul');
    } else {
        $('.circle4').removeClass('muncul');
    }

    if(wScroll > $('.btn-map').offset().top - 550 ) {
        $('.btn-map').addClass('muncul');
    } else {
        $('.btn-map').removeClass('muncul');
    }

});


document.getElementById('open').addEventListener('click', () => {
    const cover = document.querySelector('#cover');
    const audio = document.getElementById('invitationAudio'); // Ambil elemen audio

    // Efek transisi
    cover.style.marginTop = "-100rem";
    cover.style.opacity = "0";
    cover.style.transition = "all 1s .1s ease-in-out";
    
    setTimeout(() => {
        cover.classList.add('hidden');
    }, 2000);

    // Putar audio ketika tombol ditekan
    audio.play().catch(error => {
        console.error("Audio tidak dapat diputar secara otomatis:", error);
    });
});

window.onload = function() {
    // Sembunyikan loading, tampilkan konten
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}
// END JS ANIMATION

// CountDown
document.addEventListener("DOMContentLoaded", function() {
    // Tentukan tanggal target hitung mundur
    var countDownDate = new Date("Oct 19, 2024 00:00:00").getTime();

    // Update hitungan setiap 1 detik
    var x = setInterval(function() {
        // Dapatkan tanggal dan waktu saat ini
        var now = new Date().getTime();

        // Hitung selisih antara tanggal saat ini dan tanggal target
        var distance = countDownDate - now;

        // Hitung waktu dalam hari, jam, menit, dan detik
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Tampilkan hasil di elemen-elemen yang sesuai
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // Jika hitungan sudah selesai, tampilkan teks
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);
});

// LIGHBOX JS
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}

// audio js
const playerButton = document.querySelector('.player-button'),
      audio = document.querySelector('audio'),
      timeline = document.querySelector('.timeline'),
      soundButton = document.querySelector('.sound-button'),
      playIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `,
      pauseIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>
      `;

function toggleAudio () {
  if(audio.paused) {
    audio.play();
    playerButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playerButton.innerHTML = playIcon;
  }
}

playerButton.addEventListener('click', toggleAudio);

function changeTimelinePosition () {
  const percentagePosition = (100*audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}

// NAV JS
// $(document).ready(function() {
//     $('li').on('click', function(){
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');
//     })
// });

const navLi = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if(scrollY >= sectionTop){
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*= '+ current +']').classList.add('active');
    });
});

function salinRekening(element) {
    const nomorRekening = element.getAttribute('data-nomer');
    
    const tempInput = document.createElement('input');
    tempInput.value = nomorRekening;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert('Nomor rekening berhasil disalin: ' + nomorRekening);
}