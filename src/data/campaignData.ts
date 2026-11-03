export const CONTACT_INFO = {
  whatsappNumber: '6285177460854',
  whatsappDisplay: '+62 851-7746-0854',
  whatsappUrl: 'https://wa.me/6285177460854',
  email: 'ryanard92@gmail.com',
};

export interface CampaignGoal {
  id: string;
  code: 'retention' | 'slow-days' | 'group-orders' | 'menu-launch';
  title: string;
  subtitle: string;
  description: string;
  metrics: string[];
  suggestedChannels: string[];
}

export const CAMPAIGN_GOALS: CampaignGoal[] = [
  {
    id: 'goal-retention',
    code: 'retention',
    title: 'Mengajak pelanggan lama kembali',
    subtitle: 'Kunjungan Ulang & Loyalitas',
    description:
      'Susun penawaran kunjungan ulang khusus untuk pelanggan yang telah memberikan izin dan bersedia menerima pesan berkala dari kafe Anda.',
    metrics: ['Voucher ditebus', 'Jumlah transaksi pelanggan lama', 'Margin setelah diskon promo'],
    suggestedChannels: ['Database kontak WhatsApp berizin', 'Kartu reward/stempel fisik'],
  },
  {
    id: 'goal-slow-days',
    code: 'slow-days',
    title: 'Menambah pesanan pada hari sepi',
    subtitle: 'Aktivasi Jam & Hari Lengang',
    description:
      'Uji paket penawaran khusus pada hari kerja atau jam sepi yang disepakati bersama owner berdasarkan data histori transaksi kafe.',
    metrics: ['Jumlah pesanan pada slot sepi', 'Margin bersih dibanding periode pembanding yang relevan'],
    suggestedChannels: ['Instagram Story berjadwal', 'Penawaran meja (tent card)', 'Pesan siaran berizin'],
  },
  {
    id: 'goal-group-orders',
    code: 'group-orders',
    title: 'Mendapatkan pesanan grup',
    subtitle: 'Coffee Break & Acara Komunitas',
    description:
      'Siapkan paket coffee break, boks snack, atau konsumsi pertemuan untuk perkantoran, instansi, dan komunitas di sekitar lokasi kafe.',
    metrics: ['Pertanyaan relevan dari PIC kantor', 'Pesanan terkonfirmasi', 'Pembayaran transaksi lunas'],
    suggestedChannels: ['Outreach email/WhatsApp ke kantor sekitar', 'Katalog digital PDF/WhatsApp'],
  },
  {
    id: 'goal-menu-launch',
    code: 'menu-launch',
    title: 'Meluncurkan menu baru',
    subtitle: 'Pengenalan & Uji Adopsi Menu',
    description:
      'Siapkan materi pengenalan, detail informasi produk dan alergen, serta jalur pemesanan sebelum tanggal resmi peluncuran menu di kafe.',
    metrics: ['Pesanan menu baru yang terjual', 'Total nilai transaksi menu baru', 'Margin kontribusi produk'],
    suggestedChannels: ['Materi visual media sosial', 'Buku menu fisik & digital', 'Rekomendasi kasir/barista'],
  },
];

export interface WorkflowStep {
  step: string;
  title: string;
  summary: string;
  details: string;
  deliverables: string[];
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Penawaran yang masuk akal',
    summary: 'Disusun bersama owner berdasarkan hitungan riil.',
    details:
      'Paket disusun bersama pemilik kafe dengan mempertimbangkan biaya bahan baku (HPP), besaran potongan harga, kapasitas persiapan dapur/barista, dan target yang ingin dicapai.',
    deliverables: ['Struktur harga & diskon', 'Batas kuota harian/kapasitas dapur', 'Periode berlaku yang disepakati'],
  },
  {
    step: '02',
    title: 'Jalur untuk menjangkau pelanggan',
    summary: 'Menentukan siapa yang dijangkau dan kanal yang tepat.',
    details:
      'Pilih kanal distribusi yang paling relevan dengan tujuan: akun media sosial resmi kafe, basis data pelanggan yang bersedia menerima pesan, komunitas sekitar, outreach kantor terdekat, atau iklan berbayar.',
    deliverables: ['Rencana kanal distribusi', 'Format pesan & materi pembuka', 'Pemisahan anggaran iklan/media'],
  },
  {
    step: '03',
    title: 'Alur pemesanan yang jelas',
    summary: 'Mengarahkan minat pelanggan ke jalur konfirmasi yang rapi.',
    details:
      'Materi promosi mengarahkan calon pembeli ke informasi menu yang lengkap dan alur percakapan WhatsApp yang terstruktur, sebelum kemudian tim kafe Anda mengonfirmasi ketersediaan dan pesanan.',
    deliverables: ['Aset visual & ringkasan menu', 'Format draft pesan pesanan WhatsApp', 'Format serah terima pesanan ke admin/kasir'],
  },
  {
    step: '04',
    title: 'Hasil yang dapat diperiksa',
    summary: 'Pencatatan pertanyaan, pesanan, dan margin nyata.',
    details:
      'Catat dari mana sumber pertanyaan datang, jumlah pesanan yang terkonfirmasi, status pembayaran, serta rincian biaya yang menyertai jalannya campaign untuk dievaluasi secara objektif.',
    deliverables: ['Laporan rekap pertanyaan & pesanan', 'Evaluasi margin terhadap periode pembanding', 'Rekomendasi untuk perbaikan periode berikutnya'],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Apakah menjamin kafe ramai?',
    answer:
      'Tidak. Origin Systems membantu persiapan teknis, materi visual, alur pemesanan, dan pencatatan hasil campaign. Keberhasilan akhir juga sangat dipengaruhi oleh kecocokan produk, daya tarik penawaran, ketepatan audiens, konsistensi distribusi, serta kualitas pelayanan di kafe Anda.',
  },
  {
    question: 'Apakah cocok untuk kafe yang baru buka?',
    answer:
      'Kebutuhannya akan kami periksa terlebih dahulu. Layanan campaign penjualan kami bekerja paling terarah pada kafe yang sudah memiliki produk teruji, kapasitas tim yang siap, serta jalur awal untuk menjangkau calon pelanggan.',
  },
  {
    question: 'Apakah iklan wajib?',
    answer:
      'Tidak. Pemilihan kanal distribusi ditentukan bersama berdasarkan tujuan campaign dan aset pelanggan yang sudah dimiliki kafe Anda (seperti media sosial organik, kontak pelanggan berizin, atau komunitas sekitar).',
  },
  {
    question: 'Apakah budget iklan termasuk?',
    answer:
      'Tidak. Fee layanan Origin Systems dan anggaran belanja media/iklan dijelaskan secara terpisah. Anda memegang kendali penuh atas besaran anggaran iklan jika memilih menggunakan kanal berbayar.',
  },
  {
    question: 'Apakah harus mengganti POS?',
    answer:
      'Tidak untuk layanan standar. Alur pemesanan kami berfokus pada WhatsApp dan rekap admin. Integrasi teknis ke sistem POS atau printer kasir diperiksa secara terpisah sesuai kompatibilitas perangkat kafe.',
  },
  {
    question: 'Apakah chatbot menggantikan admin?',
    answer:
      'Chatbot membantu menjawab pertanyaan berulang seputar menu, jam buka, dan mengumpulkan draft pesanan secara terstruktur. Admin atau staf kafe Anda tetap memegang kendali penuh untuk konfirmasi ketersediaan stok, pengecualian, serta pemenuhan pesanan.',
  },
  {
    question: 'Apa yang perlu disiapkan?',
    answer:
      'Daftar menu beserta harga aktif, foto/materi produk yang sudah ada, informasi perkiraan biaya bahan untuk menyusun paket penawaran, konfirmasi kapasitas pelayanan dapur/bar, serta penanggung jawab operasional di pihak kafe.',
  },
  {
    question: 'Bagaimana menilai keberhasilan?',
    answer:
      'Tentukan satu ukuran utama sebelum campaign dimulai (misal: pesanan hari sepi atau pesanan grup kantor). Di akhir periode, evaluasi penjualan yang tercatat serta margin riil setelah dikurangi biaya bahan, diskon promo, dan fee layanan, lalu bandingkan dengan data histori kafe Anda.',
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  headline: string;
  priceDisplay: string;
  billingPeriod: string;
  setupFee?: string;
  description: string;
  scopeList: string[];
  limitations: string[];
  ctaLabel: string;
  inquirySubject: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-campaign',
    name: 'Campaign Penjualan',
    headline: 'Mulai dari satu campaign yang jelas.',
    priceDisplay: 'Sesuai Cakupan',
    billingPeriod: 'Penawaran proyek per campaign',
    description:
      'Fokus menyusun, menyiapkan materi, mengonfigurasi jalur pemesanan, dan mengevaluasi satu tujuan promosi spesifik bersama owner kafe.',
    scopeList: [
      'Tentukan satu tujuan dan periode pelaksanaan',
      'Penyusunan paket penawaran bersama owner berdasarkan HPP & kapasitas',
      'Pembuatan materi visual promosi dan ringkasan menu terkait',
      'Penyiapan jalur pemesanan WhatsApp terstruktur',
      'Kesepakatan aktivitas & panduan kanal distribusi',
      'Pencatatan data pertanyaan, pesanan, dan evaluasi hasil akhir',
    ],
    limitations: [
      'Cakupan dan nilai fee dihitung setelah diskusi kebutuhan',
      'Tidak termasuk belanja iklan, cetak fisik, atau biaya pihak ketiga',
    ],
    ctaLabel: 'Bahas Rencana Campaign',
    inquirySubject: 'Konsultasi Layanan: Campaign Penjualan',
  },
  {
    id: 'plan-visual',
    name: 'Paket Visual',
    headline: 'Produksi aset visual statis untuk promosi kafe.',
    priceDisplay: 'Rp 990.000',
    billingPeriod: 'per proyek',
    description:
      'Pilihan ringkas bagi kafe yang membutuhkan pembaruan materi visual promosi dan sosial media menggunakan foto produk yang sudah ada.',
    scopeList: [
      '5 konsep visual promosi statis',
      'Menggunakan materi dan foto produk yang disediakan klien',
      '1 ukuran utama (feed 1:1 / 4:5) dan 1 ukuran turunan (story 9:16) per konsep',
      '1 putaran revisi gabungan untuk seluruh aset',
      'Format siap tayang resolusi tinggi',
    ],
    limitations: [
      'Tidak termasuk sesi pemotretan langsung di lokasi',
      'Tidak termasuk biaya cetak, konfigurasi chatbot, distribusi, maupun iklan',
    ],
    ctaLabel: 'Bahas Proyek Visual',
    inquirySubject: 'Konsultasi Layanan: Paket Visual (Rp 990.000)',
  },
  {
    id: 'plan-growth',
    name: 'Paket Growth',
    badge: 'Paket Utama',
    headline: 'Pendampingan bulanan visual, WhatsApp, dan 1 campaign berkala.',
    priceDisplay: 'Rp 1.990.000',
    billingPeriod: 'per bulan',
    setupFee: 'Setup awal standar Rp 2.490.000 (sekali bayar di awal)',
    description:
      'Dukungan menyeluruh bulanan untuk 1 outlet: produksi materi rutin, pemeliharaan alur WhatsApp, dan bantuan konfigurasi untuk 1 campaign penjualan setiap bulan.',
    scopeList: [
      'Dukungan untuk 1 outlet dan 1 nomor WhatsApp operasional',
      '8 konsep visual promosi per bulan (dengan ukuran turunan)',
      'Alur menu digital, FAQ standar, dan rekap pesanan otomatis',
      'Format rekap permintaan pesanan rapi untuk admin kasir',
      'Dukungan materi dan konfigurasi untuk 1 campaign penjualan per bulan',
      'Laporan sederhana pertanyaan dan pesanan bulanan',
      'Dukungan teknis pada jam kerja yang disepakati',
    ],
    limitations: [
      'Dukungan campaign tidak otomatis mencakup pembelian media iklan, pengelolaan ad campaign, outreach langsung ke kantor, atau manajemen komunitas',
      'Biaya langganan WhatsApp Cloud API (jika berbayar di atas kuota resmi) dibayarkan langsung oleh klien',
    ],
    ctaLabel: 'Bahas Paket Growth',
    inquirySubject: 'Konsultasi Layanan: Paket Growth (Rp 1.990.000/bln)',
  },
  {
    id: 'plan-scale',
    name: 'Paket Scale',
    headline: 'Otomasi terpadu untuk kafe multi-outlet dengan bot SOP.',
    priceDisplay: 'Rp 3.490.000',
    billingPeriod: 'per bulan',
    setupFee: 'Setup awal standar Rp 4.490.000 (sekali bayar di awal)',
    description:
      'Dirancang untuk bisnis kafe yang berkembang hingga 3 outlet, dilengkapi asisten SOP internal staf untuk standardisasi resep dan operasional.',
    scopeList: [
      'Dukungan hingga 3 outlet menggunakan 1 nomor WhatsApp pusat',
      '16 konsep visual promosi per bulan',
      'Alur layanan pelanggan, info menu, dan pesanan multi-cabang',
      'Bot asisten SOP karyawan berbasis dokumen resmi yang disepakati',
      'Laporan performa berkala dan evaluasi terkoordinasi',
      'Dukungan teknis prioritas pada jam operasional yang disepakati',
    ],
    limitations: [
      'Dokumen SOP disediakan oleh manajemen kafe',
      'Integrasi POS kustom dan hardware kasir ditawarkan secara terpisah',
    ],
    ctaLabel: 'Bahas Paket Scale',
    inquirySubject: 'Konsultasi Layanan: Paket Scale (Rp 3.490.000/bln)',
  },
];
