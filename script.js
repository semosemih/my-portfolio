/**
 * SEMIH ŞENGÜL - PORTFOLIO INTERACTION LOGIC
 * Features:
 * - Dynamic Ambient Canvas (Starfield / Neural Network Constellation)
 * - Complete Bilingual Translation Engine (English & Turkish)
 * - Interactive Project Filter System
 * - Architecture Deep-Dive Modal
 * - Copy to Clipboard & Toast System
 * - Contact Form Handler
 * - Active Scroll Spy Navigation
 */

// ==========================================
// 1. TRANSLATION DICTIONARY (EN / TR)
// ==========================================
const translations = {
  en: {
    navAbout: "About",
    navExperience: "Experience",
    navProjects: "Projects",
    navSkills: "Skills",
    navEducation: "Education",
    navContact: "Contact",
    resumeBtn: "Resume",
    heroBadge: "Bilkent CTIS Senior • AI & Systems Developer",
    heroGreeting: "Hi, I'm",
    heroRole: "AI Engineer & Software Developer",
    heroBio: "Passionate about building intelligent AI systems, state-of-the-art RAG pipelines, high-performance systems, and interactive digital experiences. Currently working as an AI Intern at Mobiliz and finishing my senior year at Bilkent University.",
    statGpa: "Bilkent CTIS CGPA",
    statInternships: "Internships & Roles",
    statLanguages: "Languages & Frameworks",
    viewWork: "Explore Projects",
    getInTouch: "Get in Touch",
    previewCv: "View CV",
    profileBadge: "Bilkent CTIS • Mobiliz AI Intern",
    availability: "Open to full-time & master's opportunities",
    aboutTag: "BIOGRAPHY",
    aboutTitle: "About Me",
    aboutSubtitle: "Blending AI research, game physics, and modern software architectures.",
    aboutStoryTitle: "Passionate Technologist & Lifelong Learner",
    aboutStoryP1: "I am a 4th-year Computer Technology and Information Systems (CTIS) student at Bilkent University. My engineering journey spans Artificial Intelligence, Retrieval-Augmented Generation (RAG) systems, Unity Game Development, and scalable software backends.",
    aboutStoryP2: "At Mobiliz, I work as an AI Intern focusing on production-grade RAG evaluation, semantic chunking, and intelligent Q&A platforms. Alongside my academic degree, I take additional university courses in advanced mathematics to strengthen the rigorous theoretical foundation behind modern deep learning.",
    aboutStoryP3: "Outside the terminal, I produce music and play guitar, swim actively as a member of the Bilkent Swimming Club, and study German to prepare for future international research and master's studies in computer science.",
    labelPhone: "Phone:",
    labelEmail: "Primary Email:",
    labelUniEmail: "Bilkent Email:",
    hlAiTitle: "AI & RAG Specialization",
    hlAiDesc: "Hands-on experience developing enterprise RAG engines, cross-encoder rerankers, OCR pipelines, and live benchmarking tools.",
    hlGameTitle: "Game Development & Graphics",
    hlGameDesc: "Professional Unity 2D/3D development experience at Creasaur, game physics, rapid GameJam sprints, and OpenGL coursework.",
    hlMathTitle: "Mathematical Rigor",
    hlMathDesc: "Taking extra higher-level university mathematics courses to ground machine learning concepts in deep analytical understanding.",
    hlLifeTitle: "Music, Sports & Languages",
    hlLifeDesc: "Avid guitar player, beat producer, Bilkent Swimming Club swimmer, and currently studying German (German master's track).",
    expTag: "CAREER ROADMAP",
    expTitle: "Work Experience",
    expSubtitle: "From corporate AI research to indie game development and frontend engineering.",
    mobRole: "Artificial Intelligence Intern",
    mobDate: "August 2026 – Ongoing",
    mobDesc: "Conducting cutting-edge AI engineering and RAG (Retrieval-Augmented Generation) evaluations. Architecting platforms like EVA to benchmark live deployment quality, answer accuracy, and concurrent stress loads for enterprise AI systems.",
    creaRole: "Unity 2D and 3D Game Development Intern",
    creaDate: "June 2025 – January 2026",
    creaDesc: "Engineered core gameplay loops, character controllers, physics-based mechanics, and UI systems in Unity C#. Collaborated closely with game designers and 3D artists, profiling mobile device performance and refining user interaction flows.",
    layerRole: "Frontend Development Intern",
    layerDate: "July – August 2024",
    layerDesc: "Developed responsive web application interfaces and interactive dashboard components for enterprise GIS and spatial data applications. Utilized modern JavaScript, HTML5/CSS3, and REST API integration.",
    gameClubRole: "2D Game Developer & Contributor",
    gameClubDate: "February 2024 – October 2025",
    gameClubDesc: "Participated in two fast-paced 48-hour GameJams as the core 2D Game Developer. Built functional, creative game mechanics, audio integrations, and visual shaders under tight time constraints.",
    campRole: "Blockchain101 Camp Participation",
    campDate: "25 August – 3 September 2023",
    campDesc: "Completed rigorous hands-on training on distributed ledger architectures, cryptographic hashing, consensus protocols, and decentralized smart contract concepts at Turkey's premier open-source developer camp.",
    projTag: "PORTFOLIO",
    projTitle: "Featured Projects",
    projSubtitle: "High-impact engineering works spanning Artificial Intelligence, Computer Vision, and Systems.",
    filterAll: "All Projects",
    filterAi: "AI & RAG",
    filterGame: "Game Development",
    filterSys: "Backend & Systems",
    badgeSenior: "Senior Capstone Project",
    observaiDesc: "AI-powered, real-time human analytics system that analyzes CCTV camera feeds to generate live density heatmaps, occupancy tracking, and dwell-time metrics for café and restaurant managers.",
    contextiqDesc: "Enterprise document Q&A platform powered by advanced RAG. Features semantic chunking, cross-encoder reranking, OCR & table parsing for PDF documents, WebSocket streaming, and speech-to-text.",
    evaDesc: "Automated evaluation and stress platform for Mobiliz RAG deployments. Evaluates live answer accuracy while simultaneously driving concurrent load to inspect server behavior under pressure.",
    gameDesc: "Engineered interactive mobile mechanics, ragdoll/rigid-body physics, procedural obstacles, and player feedback loops at Creasaur Entertainment and Bilkent GameJam events.",
    backendDesc: "Robust user authentication and management architecture using modern microservices, decoupled service endpoints, relational database persistence, and clean MVC paradigms.",
    learnMore: "Details & Architecture",
    skillsTag: "EXPERTISE",
    skillsTitle: "Technical Arsenal",
    skillsSubtitle: "Languages, systems, machine learning toolkits, and academic coursework.",
    skillLangTitle: "Programming Languages",
    skillAiTitle: "AI & Machine Learning",
    skillCourseTitle: "Coursework & Certifications",
    skillPassionsTitle: "Interests & Languages",
    eduTag: "ACADEMIA",
    eduTitle: "Education",
    eduSubtitle: "Academic excellence at Turkey's leading research university.",
    eduObsText: "Developing an AI-powered human analytics system tracking customer dwell time and space utilization through live video heatmaps.",
    eduMathText: "Completing additional university mathematics lectures beyond curriculum requirements to fortify foundational theory for deep learning.",
    eduProjText: "Built comprehensive, tested term projects for every core language (C/C++, Java, Python, JavaScript, R, Unity C#).",
    contactTag: "GET IN TOUCH",
    contactTitle: "Let's Connect",
    contactSubtitle: "Available for AI engineering opportunities, master's collaborations, and technical discussions.",
    contactPrimary: "Primary Email",
    contactUni: "University Email",
    contactPhone: "Phone / WhatsApp",
    formTitle: "Send a Message",
    formSubtitle: "Whether you have an inquiry, feedback, or a collaborative project in mind.",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Message",
    formSubmit: "Send Message",
    footerText: "Bilkent University CTIS • AI Engineer & Systems Developer"
  },
  tr: {
    navAbout: "Hakkımda",
    navExperience: "Deneyim",
    navProjects: "Projeler",
    navSkills: "Yetenekler",
    navEducation: "Eğitim",
    navContact: "İletişim",
    resumeBtn: "Özgeçmiş (CV)",
    heroBadge: "Bilkent CTIS Son Sınıf • Yapay Zeka & Sistem Geliştirici",
    heroGreeting: "Merhaba, ben",
    heroRole: "Yapay Zeka Mühendisi & Yazılım Geliştirici",
    heroBio: "Yapay zeka sistemleri, son teknoloji RAG mimarileri, yüksek performanslı yazılımlar ve etkileşimli dijital deneyimler geliştiriyorum. Şu anda Mobiliz'de Yapay Zeka Stajyeri olarak çalışıyor ve Bilkent Üniversitesi'ndeki son yılımı tamamlıyorum.",
    statGpa: "Bilkent CTIS Not Ortalaması",
    statInternships: "Staj & Görev",
    statLanguages: "Programlama Dili & Teknoloji",
    viewWork: "Projeleri İncele",
    getInTouch: "İletişime Geç",
    previewCv: "CV'yi Görüntüle",
    profileBadge: "Bilkent CTIS • Mobiliz AI Stajyeri",
    availability: "Tam zamanlı & yüksek lisans fırsatlarına açık",
    aboutTag: "BİYOGRAFİ",
    aboutTitle: "Hakkımda",
    aboutSubtitle: "Yapay zeka araştırmaları, oyun fizikleri ve modern yazılım mimarilerinin kesişimi.",
    aboutStoryTitle: "Teknoloji Tutkunu & Sürekli Öğrenen Mühendis",
    aboutStoryP1: "Bilkent Üniversitesi Bilgisayar Teknolojileri ve Bilişim Sistemleri (CTIS) 4. sınıf öğrencisiyim. Mühendislik serüvenim Yapay Zeka, RAG (Retrieval-Augmented Generation) sistemleri, Unity Oyun Geliştirme ve ölçeklenebilir backend sistemlerini kapsıyor.",
    aboutStoryP2: "Mobiliz şirketinde yapay zeka stajyeri olarak üretim seviyesinde RAG değerlendirme platformları, semantik parçalama ve akıllı soru-cevap sistemleri üzerinde çalışıyorum. Derin öğrenmenin arkasındaki sağlam teorik temeli güçlendirmek adına üniversitede ileri düzey ek matematik dersleri alıyorum.",
    aboutStoryP3: "Kod yazmanın dışında müzik prodüksiyonu yapıyor ve gitar çalıyorum. Bilkent Yüzme Kulübü üyesi olarak aktif yüzüyor ve Almanya'da master hedeflerim doğrultusunda Almanca çalışıyorum.",
    labelPhone: "Telefon:",
    labelEmail: "Kişisel E-posta:",
    labelUniEmail: "Bilkent E-posta:",
    hlAiTitle: "Yapay Zeka & RAG Uzmanlığı",
    hlAiDesc: "Kurumsal RAG motorları, cross-encoder yeniden sıralama, OCR boru hatları ve canlı stres/kalite test araçları geliştirme tecrübesi.",
    hlGameTitle: "Oyun Geliştirme & Grafikler",
    hlGameDesc: "Creasaur'da profesyonel Unity 2D/3D oyun stajı, oyun fiziği, hızlı GameJam sprintleri ve OpenGL dersleri.",
    hlMathTitle: "Matematiksel Altyapı",
    hlMathDesc: "Makine öğrenimi teorilerini güçlü bir analitik temele oturtmak için fazladan ileri seviye üniversite matematik dersleri.",
    hlLifeTitle: "Müzik, Spor & Yabancı Diller",
    hlLifeDesc: "Gitarist, müzik yapımcısı, Bilkent Yüzme Kulübü sporcusu ve Almanya yüksek lisansı hazırlığında Almanca eğitimi.",
    expTag: "KARİYER YOLCULUĞU",
    expTitle: "İş Deneyimi",
    expSubtitle: "Kurumsal yapay zeka araştırmalarından bağımsız oyun geliştirmeye ve frontend mühendisliğine.",
    mobRole: "Yapay Zeka (AI) Stajyeri",
    mobDate: "Ağustos 2026 – Devam Ediyor",
    mobDesc: "İleri düzey yapay zeka mühendisliği ve RAG (Retrieval-Augmented Generation) değerlendirmeleri yürütme. EVA platformunu tasarlayarak canlı RAG sistemlerinin yanıt kalitesini ve eşzamanlı yük altındaki sunucu metriklerini test etme.",
    creaRole: "Unity 2D & 3D Oyun Geliştirme Stajyeri",
    creaDate: "Haziran 2025 – Ocak 2026",
    creaDesc: "Unity C# ile temel oyun döngüleri, karakter kontrol mekanikleri, fizik sistemleri ve UI geliştirme. Oyun tasarımcıları ve 3D artistlerle yakın iş birliği içinde mobil performans profilleme ve optimizasyon.",
    layerRole: "Frontend Geliştirme Stajyeri",
    layerDate: "Temmuz – Ağustos 2024",
    layerDesc: "Kurumsal coğrafi bilgi ve harita sistemleri için duyarlı web arayüzleri ve etkileşimli kontrol paneli bileşenleri geliştirme. Modern JavaScript, HTML5/CSS3 ve REST API entegrasyonu.",
    gameClubRole: "2D Oyun Geliştirici & Katılımcı",
    gameClubDate: "Şubat 2024 – Ekim 2025",
    gameClubDesc: "48 saatlik iki farklı GameJam maratonuna baş 2D oyun geliştiricisi olarak katılım. Sıkı zaman kısıtlarında çalışan yaratıcı mekanikler ve ses entegrasyonları üretme.",
    campRole: "Blockchain101 Kamp Katılım Sertifikası",
    campDate: "25 Ağustos – 3 Eylül 2023",
    campDesc: "Mustafa Akgül Özgür Yazılım Kampı kapsamında dağıtık defter sistemleri, kriptografik özetleme, mutabakat protokolleri ve akıllı sözleşmeler üzerine yoğun uygulamalı eğitim.",
    projTag: "PORTFOLYO",
    projTitle: "Öne Çıkan Projeler",
    projSubtitle: "Yapay Zeka, Bilgisayarlı Görü ve Sistem Mimarilerini buluşturan yüksek etkili çalışmalar.",
    filterAll: "Tüm Projeler",
    filterAi: "Yapay Zeka & RAG",
    filterGame: "Oyun Geliştirme",
    filterSys: "Backend & Sistemler",
    badgeSenior: "Bitirme Projesi (Senior Capstone)",
    observaiDesc: "Kamera görüntülerinden canlı yoğunluk ısı haritaları, doluluk oranı ve bekleme süresi metrikleri üreterek kafe ve restoran yöneticilerine rehberlik eden yapay zeka destekli insan analitiği sistemi.",
    contextiqDesc: "Gelişmiş RAG ile güçlendirilmiş kurumsal belge soru-cevap platformu. Semantik parçalama, cross-encoder reranker, PDF OCR & tablo analizi, WebSocket akışı ve sesten metne dönüştürme.",
    evaDesc: "Mobiliz RAG sistemleri için otomatik kalite ve yük değerlendirme platformu. Gerçek sorularla yanıt doğruluğunu ölçerken aynı anda sunucuya eşzamanlı yük bindirerek performans analizi yapar.",
    gameDesc: "Creasaur Entertainment ve Bilkent GameJam etkinliklerinde geliştirilen etkileşimli mobil mekanikler, 2D/3D fizik sistemleri, engeller ve oyuncu geri bildirim döngüleri.",
    backendDesc: "Modern mikroservisler, ayrık servis uçları, ilişkisel veritabanı kalıcılığı ve temiz MVC paradigmaları kullanan güvenilir kullanıcı kimlik doğrulama mimarisi.",
    learnMore: "Detaylar & Mimari",
    skillsTag: "UZMANLIK",
    skillsTitle: "Teknoloji Cephaneliği",
    skillsSubtitle: "Diller, sistemler, makine öğrenimi araçları ve akademik dersler.",
    skillLangTitle: "Programlama Dilleri",
    skillAiTitle: "Yapay Zeka & Makine Öğrenimi",
    skillCourseTitle: "Akademik Dersler & Sertifikalar",
    skillPassionsTitle: "İlgi Alanları & Diller",
    eduTag: "AKADEMİK GEÇMİŞ",
    eduTitle: "Eğitim",
    eduSubtitle: "Türkiye'nin öncü araştırma üniversitesinde akademik başarı.",
    eduObsText: "Canlı video ısı haritaları üzerinden müşteri bekleme süresi ve alan kullanımını takip eden yapay zeka destekli insan analitiği sistemi.",
    eduMathText: "Derin öğrenme teorisini sağlam analitik temele oturtmak için müfredatın ötesinde ek üniversite matematik dersleri tamamlama.",
    eduProjText: "Tüm temel dillerde (C/C++, Java, Python, JavaScript, R, Unity C#) kapsamlı, test edilmiş dönem projeleri geliştirme.",
    contactTag: "İLETİŞİME GEÇİN",
    contactTitle: "Bağlantı Kuralım",
    contactSubtitle: "Yapay zeka mühendisliği fırsatları, yüksek lisans iş birlikleri ve teknik sohbetler için her zaman açığım.",
    contactPrimary: "Kişisel E-posta",
    contactUni: "Üniversite E-postası",
    contactPhone: "Telefon / WhatsApp",
    formTitle: "Mesaj Gönderin",
    formSubtitle: "İster bir iş fırsatı, ister geri bildirim veya ortak bir proje fikri için.",
    formName: "Adınız Soyadınız",
    formEmail: "E-posta Adresiniz",
    formMessage: "Mesajınız",
    formSubmit: "Mesajı Gönder",
    footerText: "Bilkent Üniversitesi CTIS • Yapay Zeka Mühendisi & Sistem Geliştirici"
  }
};

// Current Active Language (Default to Turkish if browser is TR, else EN)
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang] || translations.en;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update Language toggle button label
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'en' ? 'TR' : 'EN';
  }

  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);

  // Store preference in localStorage
  try {
    localStorage.setItem('portfolio_lang', lang);
  } catch (e) {
    // localStorage might fail in restricted environments
  }
}

// ==========================================
// 2. PROJECT MODAL CONTENT DETAILS
// ==========================================
const projectModals = {
  observai: {
    title: {
      en: "ObservAI — Senior Capstone Project (Bilkent University)",
      tr: "ObservAI — Bitirme Projesi (Bilkent Üniversitesi)"
    },
    content: {
      en: `
        <h4>Project Overview</h4>
        <p>ObservAI is an AI-powered human analytics solution engineered for café and restaurant owners. By tapping into standard CCTV cameras, the system generates real-time occupancy heatmaps and calculates key metrics like dwell time, customer flow patterns, and underutilized tables.</p>
        
        <h4>Technical Architecture</h4>
        <ul>
          <li><strong>Computer Vision Pipeline:</strong> PyTorch & YOLO-based person detection optimized for varying lighting conditions and camera angles.</li>
          <li><strong>Live Heatmapping:</strong> Kernel Density Estimation (KDE) dynamically rendered over venue 2D floor plans.</li>
          <li><strong>Real-time Analytics:</strong> Continuous tracking across frames to identify bottleneck zones and table turnover velocity.</li>
          <li><strong>Manager Dashboard:</strong> Modern interactive telemetry dashboard allowing managers to inspect peak hours and reconfigure floor layouts.</li>
        </ul>

        <h4>Key Outcomes</h4>
        <p>Eliminates manual customer counting and empowers hospitality managers with concrete, privacy-preserving business intelligence.</p>
      `,
      tr: `
        <h4>Proje Özeti</h4>
        <p>ObservAI, kafe ve restoran işletmecileri için geliştirilmiş yapay zeka destekli bir insan analitiği sistemidir. Standart güvenlik kameralarını işleyerek gerçek zamanlı doluluk ısı haritaları üretir; müşteri kalış süresi, akış yoğunluğu ve verimsiz masa bölgelerini tespit eder.</p>

        <h4>Teknik Mimari</h4>
        <ul>
          <li><strong>Bilgisayarlı Görü Boru Hattı:</strong> Değişken ışık ve kamera açılarında optimize edilmiş PyTorch ve YOLO tabanlı insan tespiti.</li>
          <li><strong>Canlı Isı Haritalandırma:</strong> Mekan kat planı üzerine bindirilmiş dinamik Çekirdek Yoğunluk Tahmini (KDE).</li>
          <li><strong>Gerçek Zamanlı Analitik:</strong> Müşteri akışını ve masa devir hızını ölçmek için kareler arası takip.</li>
          <li><strong>Yönetici Paneli:</strong> Zirve saatleri ve masa optimizasyonlarını görselleştiren interaktif arayüz.</li>
        </ul>

        <h4>Sağlanan Değer</h4>
        <p>Manuel sayım ihtiyacını ortadan kaldırır ve kişisel gizliliği ihlal etmeden mekan yöneticilerine somut veri sunar.</p>
      `
    }
  },
  contextiq: {
    title: {
      en: "ContextIQ — Enterprise Intelligent Document Q&A (RAG)",
      tr: "ContextIQ — Kurumsal Akıllı Doküman Soru-Cevap (RAG)"
    },
    content: {
      en: `
        <h4>Platform Vision</h4>
        <p>ContextIQ is an enterprise-ready Retrieval-Augmented Generation (RAG) platform that empowers organizations to extract precise, context-backed answers from complex multi-page PDF documents.</p>

        <h4>Core Innovations</h4>
        <ul>
          <li><strong>Marker-Based Extraction & OCR:</strong> Deep parsing of multi-column PDFs, embedded data tables, and scanned text.</li>
          <li><strong>Semantic Chunking & Cross-Encoders:</strong> Chunks documents along semantic sentence boundaries and reranks retrieved passages with cross-encoder models for ultra-high retrieval precision.</li>
          <li><strong>WebSocket Real-time Streaming:</strong> Sub-second streaming token output with live source citation highlighting.</li>
          <li><strong>Multimodal & Voice Input:</strong> Built-in speech-to-text querying and dual-language (Turkish / English) understanding.</li>
        </ul>
      `,
      tr: `
        <h4>Platform Vizyonu</h4>
        <p>ContextIQ, kurumların karmaşık çok sayfalı PDF dokümanlarından kaynak doğrulamalı kesin yanıtlar almasını sağlayan kurumsal seviyede RAG platformudur.</p>

        <h4>Temel Yenilikler</h4>
        <ul>
          <li><strong>Gelişmiş Çıkarım & OCR:</strong> Çok sütunlu PDF'ler, gömülü tablolar ve taranmış belgeler üzerinde derin ayrıştırma.</li>
          <li><strong>Semantik Parçalama & Cross-Encoder Reranker:</strong> Metinleri anlam bütünlüğüne göre bölme ve en doğru pasajları cross-encoder ile yeniden sıralama.</li>
          <li><strong>WebSocket Canlı Akışı:</strong> Gerçek zamanlı kelime akışı ve doğrudan kaynak referanslama.</li>
          <li><strong>Sesli Girdi & Çift Dil Desteği:</strong> Konuşmadan metne sorgulama ve Türkçe/İngilizce çift dil kabiliyeti.</li>
        </ul>
      `
    }
  },
  eva: {
    title: {
      en: "EVA — Mobiliz RAG Quality & Load Evaluation Platform",
      tr: "EVA — Mobiliz RAG Kalite & Yük Değerlendirme Platformu"
    },
    content: {
      en: `
        <h4>Mission</h4>
        <p>EVA benchmarks live production RAG deployments at Mobiliz. Unlike synthetic benchmarks, EVA queries the running product with real-world workloads while evaluating answer correctness and stressing server concurrency.</p>

        <h4>Capabilities</h4>
        <ul>
          <li><strong>RAGTargetProvider Interface:</strong> Pluggable provider architecture allowing any deployment (ContextIQ or external engines) to be benchmarked seamlessly.</li>
          <li><strong>Dual Quality & Concurrency Engine:</strong> Correlates answer degradation against CPU, memory, and token generation latency under concurrent load spikes.</li>
          <li><strong>Scoped Historical Projects:</strong> Enables distinct engineering teams to record experiments without cross-contaminating benchmark histories.</li>
        </ul>
      `,
      tr: `
        <h4>Görev Tanımı</h4>
        <p>EVA, Mobiliz bünyesindeki canlı RAG sistemlerini değerlendiren platformdur. Sentetik testlerin ötesine geçerek canlı sisteme gerçek sorular sorar, cevap doğruluğunu puanlar ve eşzamanlı yük altındaki sunucu davranışını ölçer.</p>

        <h4>Öne Çıkan Özellikler</h4>
        <ul>
          <li><strong>RAGTargetProvider Mimarisi:</strong> Farklı RAG hedeflerini tek çatı altında test etmeye olanak tanıyan modüler arayüz.</li>
          <li><strong>Eşzamanlı Yük & Kalite Motoru:</strong> Yanıt doğruluğundaki düşüşü, sunucu yükü ve yanıt gecikmesi ile korele eder.</li>
          <li><strong>İzole Proje Geçmişi:</strong> Farklı ekiplerin test sonuçlarını birbirine karıştırmadan arşivleme.</li>
        </ul>
      `
    }
  },
  games: {
    title: {
      en: "Unity 2D & 3D Interactive Game Systems",
      tr: "Unity 2D & 3D Etkileşimli Oyun Sistemleri"
    },
    content: {
      en: `
        <h4>Creasaur Internship & GameJam Projects</h4>
        <p>Extensive experience architecting interactive gameplay mechanics in Unity with C#, developed during a 7-month internship at Creasaur and two competitive university GameJams.</p>

        <h4>Technical Highlights</h4>
        <ul>
          <li><strong>Physics & Ragdoll Simulations:</strong> Custom character controllers, physics-driven interaction loops, and responsive input mapping.</li>
          <li><strong>Mobile Profiling & Optimization:</strong> Draw-call minimization, texture atlas compression, and memory leak elimination.</li>
          <li><strong>Rapid Prototyping:</strong> Designing polished core game loops from scratch within 48-hour timeframes during GameJam sprints.</li>
        </ul>
      `,
      tr: `
        <h4>Creasaur Stajı & GameJam Projeleri</h4>
        <p>Creasaur'da 7 aylık staj süresince ve iki üniversite GameJam yarışmasında Unity C# ile geliştirilmiş etkileşimli oyun mekanikleri.</p>

        <h4>Teknik Vurgular</h4>
        <ul>
          <li><strong>Fizik & Karakter Sistemleri:</strong> Özel karakter kontrolcüleri, fizik etkileşimleri ve hassas tepki veren kontrol döngüleri.</li>
          <li><strong>Mobil Performans Optimizasyonu:</strong> Draw-call azaltma, atlas sıkıştırma ve bellek sızıntılarını önleme.</li>
          <li><strong>Hızlı Prototipleme:</strong> 48 saatlik GameJam maratonlarında sıfırdan oynanabilir, eğlenceli ve cilalı oyun döngüleri inşa etme.</li>
        </ul>
      `
    }
  },
  microservices: {
    title: {
      en: "UsersMicroservices & UsersMVC Distributed Backend",
      tr: "UsersMicroservices & UsersMVC Dağıtık Backend Mimarisi"
    },
    content: {
      en: `
        <h4>Architecture Breakdown</h4>
        <p>A distributed user management and security platform demonstrating modern enterprise design patterns in Java and Spring Boot.</p>

        <h4>Architecture Components</h4>
        <ul>
          <li><strong>Decoupled Microservices:</strong> Independent services for authentication, profile persistence, and audit logging.</li>
          <li><strong>Security & Tokens:</strong> Stateless JWT authentication, role-based access control (RBAC), and encrypted password storage.</li>
          <li><strong>Database Resilience:</strong> Relational SQL schema design with optimized indexing, transaction rollbacks, and connection pooling.</li>
        </ul>
      `,
      tr: `
        <h4>Mimari İnceleme</h4>
        <p>Java ve Spring Boot üzerinde modern kurumsal yazılım kalıplarını uygulayan dağıtık kullanıcı yönetimi ve güvenlik platformu.</p>

        <h4>Mimari Bileşenleri</h4>
        <ul>
          <li><strong>Ayrık Mikroservisler:</strong> Kimlik doğrulama, kullanıcı profili ve loglama için bağımsız çalışan servisler.</li>
          <li><strong>Güvenlik & Yetkilendirme:</strong> Durumsuz (stateless) JWT doğrulaması, rol tabanlı erişim kontrolü (RBAC) ve şifreli veri saklama.</li>
          <li><strong>Veritabanı Sağlamlığı:</strong> İndeksleme, transaction yönetimi ve bağlantı havuzuyla optimize edilmiş SQL veritabanı tasarımı.</li>
        </ul>
      `
    }
  }
};

// ==========================================
// 3. BACKGROUND AMBIENT PARTICLES CANVAS
// ==========================================
function initCanvasBackground() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.8 + 0.8,
      color: Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(121, 40, 202, '
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.fill();

      // Connect with close particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Mouse interactive attraction/line
      const mdx = p.x - mouseX;
      const mdy = p.y - mouseY;
      const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mDist < 160) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(121, 40, 202, ${0.35 * (1 - mDist / 160)})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 4. TOAST NOTIFICATION UTILITY
// ==========================================
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ==========================================
// 5. DOM INITIALIZATION ON LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Start canvas
  initCanvasBackground();

  // Initialize saved or default language
  let savedLang = 'en';
  try {
    const stored = localStorage.getItem('portfolio_lang');
    if (stored && (stored === 'en' || stored === 'tr')) {
      savedLang = stored;
    } else {
      // Check browser locale
      const navLang = navigator.language || navigator.userLanguage || '';
      if (navLang.toLowerCase().startsWith('tr')) {
        savedLang = 'tr';
      }
    }
  } catch (e) {
    savedLang = 'en';
  }
  applyLanguage(savedLang);

  // Language Toggle Button Event
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'tr' : 'en';
      applyLanguage(nextLang);
      showToast(nextLang === 'tr' ? 'Dil Türkçe olarak ayarlandı 🇹🇷' : 'Language switched to English 🌐');
    });
  }

  // Navbar Scroll Shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close when clicking nav link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // Project Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || cat.includes(filterVal)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Details Modal Dialog
  const modalBackdrop = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  function openProjectModal(key) {
    const data = projectModals[key];
    if (!data) return;

    const title = data.title[currentLang] || data.title.en;
    const content = data.content[currentLang] || data.content.en;

    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modalBackdrop.classList.add('open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modalBackdrop.classList.remove('open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalKey = btn.getAttribute('data-modal');
      openProjectModal(modalKey);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeProjectModal();
    }
  });

  // Copy to Clipboard buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          // Fallback
          showToast(`Email: ${textToCopy}`);
        });
      }
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-msg').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all fields.');
        return;
      }

      // Prepare mailto link as direct action
      const mailtoUrl = `mailto:semihyahama@gmail.com?subject=${encodeURIComponent('Portfolio Contact from ' + name)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;

      showToast(currentLang === 'tr' ? 'Mesajınız hazırlanıyor...' : 'Preparing message in your email client...');
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);

      contactForm.reset();
    });
  }

  // Active Navigation Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
});
