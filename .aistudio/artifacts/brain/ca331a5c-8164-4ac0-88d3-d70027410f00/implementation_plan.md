# Origins AI System — Redesign Standar Big Tech & Apple-Style Product Tour

Mendesain ulang antarmuka **Origins AI System** menjadi standar *big tech* (estetika minimalis ala Apple, Linear, dan Stripe): tipografi *neo-grotesque sans-serif* monokrom yang tegas dan bersih, eliminasi total elemen *AI slop* (menghilangkan font script/kursif, menghapus pill badge berlebih, dan menghilangkan border dekoratif tebal), serta menghadirkan **Apple-style Interactive Product Tour** yang mengalir halus tanpa jeda atau popup mengganggu.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Berdasarkan jawaban klarifikasi yang telah Anda pilih:
> - **Arah Visual & Tipografi**: *Clean Tech Minimalist* serba *sans-serif* monokrom (`Plus Jakarta Sans` dengan tracking presisi, kontras hitam-putih murni, tanpa font tulisan tangan kursif atau serif koran yang padat).
> - **Alur Showcase & Demo**: *Tab showcase interaktif bergaya product tour Apple* dengan transisi halus antara sudut pandang Meja Kerja, Desain Menu Cetak, Simulator Chatbot WhatsApp, dan Fitur Panic Button/SOP.
> - **Alur Konversi**: Tombol aksi langsung terhubung ke simulator WhatsApp interaktif dengan opsi kontak WhatsApp resmi satu ketukan.

---

## 1. Overview & Core Concept

- **Apa yang Dibangun**: Platform presentasi produk dan agensi otomasi bisnis kelas enterprise yang elegan, tenang, dan meyakinkan. Mengomunikasikan dua solusi inti: (1) Produksi visual & culinary branding premium, serta (2) Otomasi WhatsApp pintar 24/7 (order, reservasi, flash sale broadcast, dan bot training staf).
- **Target Audiens**: Pemilik kafe/restoran, manajer operasional ritel, dan pengusaha kuliner modern yang menginginkan efisiensi operasional dan standar estetika visual tertinggi.
- **Nilai Utama**: Membangun impresi produk layaknya hardware/software rilis Apple—sederhana, percaya diri, tanpa jargon bising, dan langsung dapat diuji coba secara riil.

---

## 2. User Experience & Visual Design

### A. Eliminasi Total Elemen "AI Slop"
1. **Pembersihan Tipografi**:
   - Menghapus font script tulisan tangan (`Alex Brush` / `Dancing Script`) dan serif majalah lama dari seluruh aplikasi.
   - Menggunakan satu sistem keluarga tipografi utama: **Plus Jakarta Sans** (Light, Regular, Medium, SemiBold, Bold) dengan *tracking* ketat (`tracking-tight`) untuk judul utama, dan *monospace tabular* (`tabular-nums`) untuk data angka/harga.
2. **Disiplin Zero-Pill & Metadata Bersih**:
   - Mengganti seluruh badge/kapsul dekoratif statis dengan teks polos elegan berpembatas tipografis halus (`·` atau `/`).
   - Tidak ada titik hijau berkedip dekoratif (*no fake pulsing dots*), tidak ada prefix komentar kode (`//`), dan tidak ada watermark transparan besar di latar belakang.
3. **Palet Warna Monokrom Murni (60-30-10)**:
   - Canvas: Putih bersih `#FFFFFF` (Light) / Hitam pekat `#000000` & `#0A0A0A` (Dark).
   - Permukaan: Garis *hairline* presisi `border-neutral-200 dark:border-neutral-800` dan latar kartu `bg-neutral-50 dark:bg-neutral-900/60`.
   - Aksen: Hitam absolut pada tombol aksi di light mode, putih terang di dark mode.

### B. Apple-Style Interactive Product Tour (Pusat Showcase)
Sebuah komponen showcase terpadu yang memadukan visual fotorealistis dan simulasi interaktif melalui bilah tab halus bergaya Apple:
- **Tab 1: Workspace Overview**: Tampilan meja minimalis dengan pencahayaan *morning daylight*, dilengkapi hotspot interaktif berdesain minimal untuk mengeksplorasi ekosistem.
- **Tab 2: Visual & Menu System**: Menampilkan aset fotografi kuliner tajam, standar tata letak cetak editorial linen 300gsm, dan kalkulasi peningkatan nilai pesanan meja.
- **Tab 3: Live WhatsApp Assistant**: Simulator percakapan WhatsApp responsif langsung di tempat (*inline* atau *docked*), siap melayani pesanan, struk otomatis, dan reservasi seketika.
- **Tab 4: Growth Engine (Panic Button & SOP)**: Demonstrasi interaktif fitur broadcast kode rahasia toko saat sepi dan asisten bot onboarding staf internal.

### C. Alur Bagian Halaman (Linear Storytelling Flow)
```
[Header: 3-Zone Contract]
       │
       ▼
[Hero: Value Proposition Tegas + Single Primary Action]
       │
       ▼
[Interactive Product Tour: 4-Tab Smooth Experience]
       │
       ▼
[Bento Grid: 5 Pilar End-to-End Otomasi Bisnis]
       │
       ▼
[Pricing Matrix: 3 Paket Transparan + Kalkulasi ROI Riil]
       │
       ▼
[Footer: Minimalist Clean Colophon]
```

---

## 3. Key Product Decisions & Trade-Offs

- **Keputusan 1: Tabbed Tour Terpadu Menggantikan Toolbar Kontrol yang Tersebar**:
  - *Pendekatan*: Menggabungkan mode sudut pandang kamera, showcase menu, dan simulasi chat ke dalam satu komponen tab tour yang kohesif layaknya tur produk MacBook / iPhone di apple.com.
  - *Alasan*: Pengguna tidak perlu berpindah-pindah modal popup atau mengklik kontrol teknis yang membingungkan.
- **Keputusan 2: Penyeragaman ke Sans-Serif Modern**:
  - *Pendekatan*: Menghilangkan font kursif "Origins" dan serif bergaya majalah tradisional demi menciptakan impresi teknologi tinggi (*Apple/Linear vibe*).
  - *Alasan*: Tipografi sans-serif modern memberikan keterbacaan sempurna pada layar resolusi tinggi dan memancarkan wibawa teknologi profesional.
- **Keputusan 3: Modal Chatbot dengan Seamless Inline Transition**:
  - *Pendekatan*: Simulator WhatsApp dapat dicoba langsung di Tab 3 Product Tour atau dibuka dalam fokus modal bila pengguna mengklik tombol "Coba WhatsApp" di header/hero.
  - *Alasan*: Memberikan fleksibilitas eksplorasi cepat tanpa memaksa pengguna membuka popup jika hanya ingin membaca sekilas.

---

## 4. Technical Architecture & Data Strategy

### Diagram Komponen & Alur Interaksi
```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│  (Theme State, Active Tour Tab, Simulator Modal State) │
└───────────────────────────┬────────────────────────────┘
                            │
   ┌────────────────────────┼────────────────────────┐
   ▼                        ▼                        ▼
┌───────────────┐  ┌──────────────────┐  ┌───────────────────────┐
│ AgencyTopBar  │  │ HeroSection      │  │ ProductTourShowcase   │
│ - Brand Logo  │  │ - Headline       │  │ - 4-Tab Switcher      │
│ - 4 Nav Links │  │ - Value Prop     │  │ - Visual Stage Frame  │
│ - Theme & CTA │  │ - Primary Action │  │ - Hotspot System      │
└───────────────┘  └──────────────────┘  │ - Inline Chat Embed   │
                                         └───────────┬───────────┘
                                                     │
   ┌─────────────────────────────────────────────────┴───────────┐
   ▼                                                             ▼
┌──────────────────────────────┐              ┌──────────────────────────┐
│ EndToEndBento                │              │ PricingMatrix            │
│ - 5 Clean Capability Cards   │              │ - Starter, Growth, Pro   │
│ - Quantitative Metric Proof  │              │ - ROI Comparison Block   │
└──────────────────────────────┘              └──────────────────────────┘
```

### Pemetaan State & Penanganan Komponen
- `activeTab`: `'workspace' | 'visual-menu' | 'whatsapp-bot' | 'growth-engine'` — Mengatur transisi tampilan media dan simulator dengan animasi opacity halus.
- `theme`: `'light' | 'dark'` — Mengendalikan kelas `.dark` pada `<html>`, didukung penuh oleh `@custom-variant dark` di Tailwind v4.
- `simulatorState`: Mengelola input percakapan, kalkulasi tagihan dinamis, dan rekomendasi menu otomatis menggunakan `chatbotEngine.ts` yang telah teruji unit test.
