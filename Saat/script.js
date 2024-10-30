function saatGuncelle() {
    const simdi = new Date();
    const saat = String(simdi.getHours()).padStart(2, '0');
    const dakika = String(simdi.getMinutes()).padStart(2, '0');
    const saniye = String(simdi.getSeconds()).padStart(2, '0');
    
    document.getElementById('saat').innerText = `${saat}:${dakika}:${saniye}`;
}

// Saatı her saniye güncelle
setInterval(saatGuncelle, 1000);

// Sayfa yüklendiğinde saat güncellemeye başla
saatGuncelle();
