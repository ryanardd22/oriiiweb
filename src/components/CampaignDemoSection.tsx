import React, { useState } from 'react';
import {
  FileCheck,
  Palette,
  Send,
  MessageCircle,
  ClipboardList,
  CheckCircle,
  CreditCard,
  AlertTriangle,
  Play,
} from 'lucide-react';

interface CampaignDemoSectionProps {
  onOpenLiveSimulator: () => void;
}

export const CampaignDemoSection: React.FC<CampaignDemoSectionProps> = ({
  onOpenLiveSimulator,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(3);
  const [selectedPax, setSelectedPax] = useState(25);
  const [selectedDate, setSelectedDate] = useState('Kamis, 14 Nov - 09:30 WIB');

  const demoSteps = [
    {
      id: 'step-offer',
      title: '1. Penawaran Disetujui Owner',
      desc: 'Owner kafe menyepakati Paket Coffee Break: 25 boks Croissant Mentega + Cold Brew Botol 250ml. HPP dan kapasitas slot dapur telah dihitung.',
      tag: 'Internal Kafe',
      icon: <FileCheck className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    },
    {
      id: 'step-visual',
      title: '2. Visual Promosi Dibuat',
      desc: 'Origin Systems menyiapkan flyer digital, format story, dan kartu ringkasan spesifikasi menu boks beresolusi tinggi.',
      tag: 'Produksi Aset',
      icon: <Palette className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    },
    {
      id: 'step-channel',
      title: '3. Kanal Distribusi Dipilih',
      desc: 'Penyebaran materi melalui broadcast WhatsApp berizin ke PIC kantor sekitar dan penempatan link di bio Instagram kafe.',
      tag: 'Distribusi',
      icon: <Send className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    },
    {
      id: 'step-chat',
      title: '4. Pelanggan Membuka WhatsApp',
      desc: 'Calon pemesan mengklik tautan promo dan langsung masuk ke percakapan WhatsApp dengan format data pesanan siap isi.',
      tag: 'Interaksi Tamu',
      icon: <MessageCircle className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    },
    {
      id: 'step-form',
      title: '5. Mengisi Jumlah, Tanggal & Kebutuhan',
      desc: 'Pemesan menentukan kebutuhan: jumlah pax, tanggal acara, jam pengiriman, dan request catatan khusus.',
      tag: 'Pengisian Kebutuhan',
      icon: <ClipboardList className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    },
    {
      id: 'step-recap',
      title: '6. Admin Menerima Rekap Terstruktur',
      desc: 'Sistem menyusun draft pemesanan rapi untuk admin kasir kafe, mencakup item, estimasi total, dan nomor kontak pemesan.',
      tag: 'Rekap Pesanan',
      icon: <CheckCircle className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    },
    {
      id: 'step-verify',
      title: '7. Tim Konfirmasi & Pembayaran Terverifikasi',
      desc: 'Staf kafe memeriksa ketersediaan slot dapur, mengirimkan nomor rekening kafe, dan memverifikasi bukti transfer pembayaran.',
      tag: 'Konfirmasi Transaksi',
      icon: <CreditCard className="w-4 h-4 text-slate-800 dark:text-slate-200" />,
    },
  ];

  // Tracking funnel metrics breakdown
  const funnelStages = [
    {
      label: 'Pertanyaan Masuk',
      count: '14 Kontak',
      note: 'Menanyakan ketersediaan menu boks, harga per pax, dan tanggal acara.',
      statusClass: 'text-stone-700 dark:text-neutral-300',
    },
    {
      label: 'Permintaan Pesanan',
      count: '8 Formulir Draft',
      note: 'Mengisi detail pax, jam pengantaran, dan alamat kantor.',
      statusClass: 'text-stone-700 dark:text-neutral-300',
    },
    {
      label: 'Pesanan Terkonfirmasi',
      count: '6 Invoice Kafe',
      note: 'Slot jadwal dapur disetujui admin dan invoice resmi dikirimkan.',
      statusClass: 'text-slate-900 dark:text-white font-semibold',
    },
    {
      label: 'Pembayaran Terverifikasi',
      count: '5 Transaksi Lunas',
      note: 'Dana masuk ke rekening kafe dan diproses untuk persiapan produksi.',
      statusClass: 'text-slate-950 dark:text-slate-100 font-bold',
    },
  ];

  const simulatedTotal = selectedPax * 48000;

  return (
    <section id="demo-campaign" className="py-20 sm:py-28 bg-white dark:bg-[#151518] border-b border-stone-200/80 dark:border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Studi Alur Kerja</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Simulasi Satu Campaign: Paket Coffee Break Kantor
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed">
            Perhatikan bagaimana setiap tahap berjalan tanpa kerumitan: mulai dari penawaran di awal, alur WhatsApp terstruktur, hingga pencatatan pembayaran di sisi admin kafe.
          </p>
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="mb-10 p-4 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 text-stone-800 dark:text-neutral-200 flex items-start gap-3 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-stone-700 dark:text-neutral-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-semibold">Pemberitahuan Transparansi:</strong> Ini adalah simulasi alur kerja frontend. Sistem demo ini tidak mengirimkan pesan ke nomor nyata, tidak membuat pesanan kafe sebenarnya, dan tidak memproses pembayaran perbankan. Angka kuantitas pada contoh di bawah adalah ilustrasi metodologi, bukan klaim hasil finansial klien.
          </div>
        </div>

        {/* 7-Step Horizontal / Tab Flow Selector */}
        <div className="mb-10 overflow-x-auto pb-3">
          <div className="flex items-center gap-2 min-w-max">
            {demoSteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  activeStepIndex === idx
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-black border-transparent shadow-xs'
                    : 'bg-stone-50 dark:bg-neutral-900 text-stone-700 dark:text-neutral-300 border-stone-200 dark:border-neutral-800 hover:border-stone-400 dark:hover:border-neutral-600'
                }`}
              >
                <span>{step.icon}</span>
                <span>{step.title.split('.')[0]}</span>
                <span className="hidden sm:inline">· {step.title.split('.')[1]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Workspace: Step Detail & Simulator Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Step Explainer Card */}
          <div className="lg:col-span-5 bg-stone-50 dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-neutral-800 space-y-6">
            <div className="space-y-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-white dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 text-slate-800 dark:text-slate-200">
                {demoSteps[activeStepIndex].tag}
              </span>
              <h3 className="text-xl font-bold text-stone-900 dark:text-white">
                {demoSteps[activeStepIndex].title}
              </h3>
              <p className="text-sm text-stone-600 dark:text-neutral-300 leading-relaxed">
                {demoSteps[activeStepIndex].desc}
              </p>
            </div>

            {/* Interactive Pax & Date Configuration */}
            <div className="p-4 rounded-xl bg-white dark:bg-neutral-800/80 border border-stone-200 dark:border-neutral-700 space-y-3">
              <p className="text-xs font-semibold text-stone-800 dark:text-neutral-200">
                Uji Coba Pengaturan Simulasi Pesanan:
              </p>
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-stone-600 dark:text-neutral-400">
                  <span>Jumlah Paket Boks:</span>
                  <span className="font-mono font-bold text-stone-900 dark:text-white">{selectedPax} Pax</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={selectedPax}
                  onChange={e => setSelectedPax(Number(e.target.value))}
                  className="w-full accent-slate-800 cursor-pointer"
                />
              </div>

              <div className="pt-2 text-xs text-stone-600 dark:text-neutral-400">
                <span>Contoh Jadwal: </span>
                <span className="font-mono text-stone-800 dark:text-neutral-200 font-semibold">{selectedDate}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenLiveSimulator}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl text-stone-900 dark:text-white bg-white dark:bg-neutral-800 hover:bg-stone-100 dark:hover:bg-neutral-700 border border-stone-300 dark:border-neutral-700 transition-colors shadow-2xs cursor-pointer"
              >
                <Play className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                <span>Buka Simulator WhatsApp Lengkap</span>
              </button>
            </div>

          </div>

          {/* Right: WhatsApp Alur Pesanan & Recap Mockup */}
          <div className="lg:col-span-7 bg-[#f0f2f5] dark:bg-[#0f172a] rounded-2xl border border-stone-300 dark:border-neutral-800 overflow-hidden shadow-md">
            
            {/* WhatsApp App Bar (Navy Header) */}
            <div className="px-4 py-3 bg-[#0f172a] text-white flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-800 font-bold flex items-center justify-center text-xs">
                  ☕
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold leading-tight">The Daily Bean Cafe</p>
                  <p className="text-[10px] text-stone-300 opacity-90">Origin Systems WhatsApp Flow · Terverifikasi</p>
                </div>
              </div>
              <span className="text-[11px] font-mono bg-white/10 px-2 py-0.5 rounded text-white/90">
                Simulasi Alur
              </span>
            </div>

            {/* WhatsApp Chat Conversation Area */}
            <div className="p-4 sm:p-6 space-y-4 text-xs sm:text-sm max-h-[460px] overflow-y-auto font-sans">
              
              {/* Broadcast or Link Inbound */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white dark:bg-[#1e293b] text-stone-800 dark:text-neutral-200 p-3 rounded-2xl rounded-tl-xs shadow-2xs border border-stone-200/50 dark:border-neutral-700/50 space-y-1">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 text-xs">
                    [Tawaran Terjadwal - Coffee Break Perkantoran]
                  </p>
                  <p className="text-xs leading-relaxed">
                    Halo Tim! Dapatkan paket Coffee Break Freshly Baked Croissant + Cold Brew Botol untuk meeting kantor Anda dengan slot waktu pengantaran terjadwal.
                  </p>
                  <span className="block text-[10px] text-stone-400 text-right">09:15</span>
                </div>
              </div>

              {/* Inbound Customer Inquiry with selected data */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-slate-200 dark:bg-slate-700 text-stone-900 dark:text-neutral-100 p-3 rounded-2xl rounded-tr-xs shadow-2xs space-y-1">
                  <p className="text-xs font-semibold">
                    “Halo, kami dari PT Nusantara Tech ingin memesan Paket Coffee Break:”
                  </p>
                  <ul className="text-xs space-y-0.5 pl-2 border-l-2 border-slate-700 dark:border-slate-300">
                    <li>• Jumlah: <strong>{selectedPax} Box</strong></li>
                    <li>• Jadwal: <strong>{selectedDate}</strong></li>
                    <li>• Isi: Butter Croissant + Signature Cold Brew</li>
                    <li>• Lokasi: Menara Astra Lt. 18</li>
                  </ul>
                  <span className="block text-[10px] text-stone-600 dark:text-stone-300 text-right">09:22</span>
                </div>
              </div>

              {/* Admin Automated Structured Confirmation */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white dark:bg-[#1e293b] text-stone-800 dark:text-neutral-200 p-3.5 rounded-2xl rounded-tl-xs shadow-2xs border border-stone-200/50 dark:border-neutral-700/50 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-slate-100">
                    <CheckCircle className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span>Rekap Draft Pesanan (Menunggu Konfirmasi Kasir)</span>
                  </div>
                  <div className="bg-stone-50 dark:bg-neutral-800/80 p-2.5 rounded-lg text-xs font-mono space-y-1 border border-stone-200 dark:border-neutral-700">
                    <div className="flex justify-between">
                      <span>Paket Coffee Break ({selectedPax} pax)</span>
                      <span>Rp {simulatedTotal.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between text-stone-500 dark:text-neutral-400 text-[11px]">
                      <span>Ongkos Kirim Terjadwal</span>
                      <span>Disepakati</span>
                    </div>
                    <div className="border-t border-stone-200 dark:border-neutral-700 pt-1 flex justify-between font-bold text-stone-900 dark:text-white">
                      <span>Estimasi Tagihan:</span>
                      <span>Rp {simulatedTotal.toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-neutral-400 leading-tight">
                    Tim kasir The Daily Bean sedang memeriksa ketersediaan slot kitchen dan akan mengirimkan detail rekening resmi dalam 3-5 menit.
                  </p>
                  <span className="block text-[10px] text-stone-400 text-right">09:23</span>
                </div>
              </div>

            </div>

            {/* WhatsApp Footer status */}
            <div className="p-3 bg-stone-100 dark:bg-[#0f172a] border-t border-stone-200 dark:border-neutral-800 text-[11px] text-stone-600 dark:text-neutral-400 flex items-center justify-between">
              <span>Alur: Chatbot mengumpulkan data → Admin mengonfirmasi fisik</span>
              <span className="text-slate-800 dark:text-slate-200 font-semibold">Simulasi Siap Uji</span>
            </div>

          </div>

        </div>

        {/* 4 Distinct Funnel Stages Display */}
        <div className="mt-12 bg-stone-50 dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-neutral-800">
          <div className="max-w-2xl mb-6">
            <h4 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white">
              Pembedaan Tahap Data yang Dicatat Secara Tertib
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-neutral-400 mt-1">
              Origin Systems secara transparan memisahkan antara interaksi awal dan transaksi nyata agar Anda tidak bias membaca data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {funnelStages.map((stage, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-white dark:bg-neutral-800/90 border border-stone-200 dark:border-neutral-700 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-400 dark:text-neutral-500 uppercase">
                    Tahap 0{sIdx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-stone-100 dark:bg-neutral-700 text-stone-800 dark:text-neutral-200">
                    {stage.count}
                  </span>
                </div>
                <p className={`text-sm font-bold ${stage.statusClass}`}>
                  {stage.label}
                </p>
                <p className="text-xs text-stone-600 dark:text-neutral-400 leading-snug">
                  {stage.note}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
