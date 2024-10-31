function saatGuncelle() {
    const simdi = new Date();
    const saat = String(simdi.getHours()).padStart(2, '0');
    const dakika = String(simdi.getMinutes()).padStart(2, '0');
    const saniye = String(simdi.getSeconds()).padStart(2, '0');
    
    const yeniSaat = `${saat}:${dakika}:${saniye}`;
    const saatElementi = document.getElementById('saat');
    
    // Eğer saat metni zaten güncel değilse güncelle
    if (saatElementi.innerText !== yeniSaat) {
        saatElementi.innerText = yeniSaat;
    }
}

function baslat() {
    saatGuncelle();
    // Her saniyede bir güncellemeyi sağlamak için süre kontrolü
    let sonGuncellemeZamani = Date.now();
    function animasyonDongusu() {
        const simdi = Date.now();
        if (simdi - sonGuncellemeZamani >= 1000) { // 1 saniye geçmişse güncelle
            saatGuncelle();
            sonGuncellemeZamani = simdi;
        }
        requestAnimationFrame(animasyonDongusu);
    }
    animasyonDongusu();
}

// Sayfa yüklendiğinde başlat
window.addEventListener('DOMContentLoaded', baslat);
