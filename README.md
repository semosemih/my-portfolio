# Semih Şengül - Kişisel Portfolyo Sitesi

Bu portfolyo sitesi, **Semih Şengül**'ün akademik başarıları (Bilkent Üniversitesi CTIS), yapay zeka & RAG alanındaki staj ve projeleri (Mobiliz, ObservAI, ContextIQ, EVA), oyun geliştirme tecrübeleri (Creasaur, GameJam) ve teknik yeteneklerini modern, yüksek performanslı ve interaktif bir arayüzle sergilemek üzere hazırlanmıştır.

## 🚀 Vercel'e Nasıl Dağıtılır? (2 Kolay Yöntem)

### Yöntem 1: GitHub Üzerinden (En Pratik & Önerilen)
1. Bu klasördeki kodları GitHub reponuza push edin:
   ```bash
   git init
   git add .
   git commit -m "feat: semih sengul portfolio website"
   git branch -M main
   git remote add origin https://github.com/semosemih/<repo-adi>.git
   git push -u origin main
   ```
2. [Vercel](https://vercel.com) hesabınıza giriş yapın.
3. **"Add New..." -> "Project"** butonuna tıklayın.
4. GitHub deponuzu seçin ve **Deploy** butonuna basın.
5. Siteniz 10 saniye içinde küresel CDN üzerinde canlıya (`https://<projeniz>.vercel.app`) alınacaktır!

---

### Yöntem 2: Terminal / Vercel CLI ile Doğrudan
Terminalde bu klasördeyken tek bir komutla yayınlayabilirsiniz:
```bash
npx vercel
```
*(İlk çalıştırmada Vercel oturumunuzu onaylamanız istenecektir. Sonrasında size özel bir canlı URL verecektir).*

Canlı ortama (production) deploy etmek için:
```bash
npx vercel --prod
```

---

## 💻 Yerel Geliştirme (Local Preview)
Projeyi bilgisayarınızda yerel olarak çalıştırmak için:

```bash
npm run dev
```
veya Python ile:
```bash
python3 -m http.server 3000
```
Tarayıcınızda `http://localhost:3000` adresini açabilirsiniz.

---

## ✨ Öne Çıkan Özellikler
- **Bilingual (İki Dilli):** Türkçe & İngilizce tek tıkla anında geçiş (yerel hafızalı).
- **Modern Dark Tasarım:** Derin obsidian arka plan, cam efektleri (glassmorphism), siber ışıma ve tipografi.
- **İnteraktif Arka Plan:** Fare hareketlerine tepki veren hafif ve akıcı parçacık/ağ (constellation) canvas animasyonu.
- **Proje Mimarisi Detayları:** ObservAI, ContextIQ, EVA ve Unity projeleri için mimari popup detay pencereleri.
- **CV İndirme & Önizleme:** Doğrudan siteden `Semih_Sengul_CV.pdf` indirme ve görüntüleme.
- **Kategori Filtreleme:** Projeleri *Tümü*, *Yapay Zeka & RAG*, *Oyun Geliştirme*, *Backend & Sistemler* şeklinde filtreleme.
- **İletişim & Panoya Kopyalama:** Tek tıkla e-posta kopyalama ve doğrudan mesaj formu.
