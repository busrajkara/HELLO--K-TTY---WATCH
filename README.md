# Hello Kitty Temalı Dijital Saat ve Kronometre

Bu proje, kullanıcıya sevimli bir Hello Kitty temalı dijital saat ve kronometre sunar. Kullanıcılar bu uygulama sayesinde güncel saati izleyebilir ve bir kronometre ile zaman tutabilir. Proje, pastel renk tonları, sevimli kalp simgeleri ve özel efektlerle kullanıcı deneyimini artırmayı hedeflemektedir.

## Görslleri 
![image](https://github.com/user-attachments/assets/040361bb-7b2b-439b-824b-5a7f4d4b8418)
### Kronometrenin Tuşlarına Basınca
![image](https://github.com/user-attachments/assets/f789f7bc-bf11-42ba-a2bb-a5935def436a)


## Proje Özellikleri
- **Dijital Saat**: Gerçek zamanlı olarak güncel saati gösterir.
- **Kronometre**: Başlat, duraklat ve sıfırla özellikleri olan işlevsel bir kronometre sunar.
- **Özel Kalp Efektleri**: Kronometreye yapılan her işlemde, ekranda rastgele konumlarda kalp simgeleri belirir ve kaybolur, böylece daha eğlenceli bir deneyim sağlanır.
- **Hello Kitty Teması**: Arayüz, pastel pembe tonlarında, yuvarlak köşeli kutular ve özel imleç efektleri ile Hello Kitty temasına uygun hale getirilmiştir.

## Kullanılan Teknolojiler
- **HTML**: Sayfanın temel yapısını oluşturmak için.
- **CSS**: Sevimli ve kullanıcı dostu bir arayüz için.
- **JavaScript**: Zaman fonksiyonları, DOM manipülasyonu ve özel efektler için.

- 
## Kod Açıklamaları

- **Dijital Saat Fonksiyonu:** `updateClock()` fonksiyonu, bilgisayarın sistem saatini alır ve her saniyede bir güncellenerek kullanıcının gerçek zamanlı saati görmesini sağlar. `setInterval` kullanılarak saat her saniye otomatik olarak güncellenir.

- **Kronometre İşlevleri:** Kronometre, üç ana fonksiyonla çalışır:
  - **Başlat:** `startStopwatch()` fonksiyonu, kronometreyi başlatır ve her saniyede bir `elapsedTime` değişkenini günceller.
  - **Duraklat:** `stopStopwatch()` fonksiyonu, kronometreyi duraklatır ve süreyi durdurur.
  - **Sıfırla:** `resetStopwatch()` fonksiyonu, kronometreyi sıfırlar ve `elapsedTime` değişkenini 0'a geri getirir.

- **Kalp Efekti:** `addHeartEffect()` fonksiyonu, kronometrede her işlem yapıldığında rastgele bir konumda pembe bir kalp simgesi oluşturur ve bu simge bir saniye sonra kaybolur. Bu, kronometreye şirin bir etkileşim eklemek için oluşturulmuştur.

- **Yardımcı Fonksiyon: Zaman Formatlama:** `formatTime()` fonksiyonu, saat, dakika ve saniye değerlerini her zaman iki basamaklı olacak şekilde biçimlendirir. Bu fonksiyon, hem dijital saat hem de kronometre için kullanılarak kod tekrarını azaltır.

## Proje ile İlgili Notlar

- **Tema:** Hello Kitty temasına uygun pastel pembe ve beyaz tonlarında hazırlanmıştır.
- **İmleç:** Dijital saat ve kronometre üzerinde kalp şeklinde özel bir imleç kullanılmaktadır.
- **Mobil Uyum:** Bu proje daha çok masaüstü görünümüne göre optimize edilmiştir.

## Geliştirici Notları

- **Özelleştirme:** Tasarımı değiştirmek veya yeni efektler eklemek için `style.css` dosyasındaki renkleri ve stil ayarlarını güncelleyebilirsiniz.
- **Geliştirme:** projeyi geliştirip yeni özellikler ekleyerek veya farklı temalar deneyerek deneyimlerinizi artırabilirsiniz.
