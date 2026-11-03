import React, { useState, useEffect } from 'react';
import { CheckCircle2, MessageSquare, Mail, ArrowRight, Copy, Check } from 'lucide-react';

interface CampaignIntakeFormProps {
  initialGoal?: string;
  initialPlan?: string;
}

export const CampaignIntakeForm: React.FC<CampaignIntakeFormProps> = ({
  initialGoal = '',
  initialPlan = '',
}) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [outletCount, setOutletCount] = useState('1');
  const [contactInfo, setContactInfo] = useState('');
  const [goal, setGoal] = useState('Menambah pesanan pada hari sepi');
  const [channels, setChannels] = useState<string[]>([
    'Akun Instagram resmi kafe',
    'Database kontak WhatsApp berizin',
  ]);
  const [targetPeriod, setTargetPeriod] = useState('');
  const [notes, setNotes] = useState('');

  const [draftGenerated, setDraftGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialGoal) {
      setGoal(initialGoal);
    }
  }, [initialGoal]);

  useEffect(() => {
    if (initialPlan) {
      setNotes(prev => (prev ? `${prev} | Tertarik dengan: ${initialPlan}` : `Tertarik dengan: ${initialPlan}`));
    }
  }, [initialPlan]);

  const channelOptions = [
    'Akun Instagram resmi kafe',
    'Database kontak WhatsApp berizin',
    'Komunitas / langganan sekitar',
    'Jaringan perkantoran terdekat',
    'Media promosi meja (tent card) fisik',
    'Iklan berbayar (Meta Ads)',
  ];

  const handleChannelToggle = (ch: string) => {
    setChannels(prev =>
      prev.includes(ch) ? prev.filter(c => c !== ch) : [...prev, ch]
    );
  };

  const constructDraftMessage = () => {
    return `Halo Tim Origin Systems, saya ingin berdiskusi mengenai rencana campaign penjualan kafe:\n\n` +
      `• Nama: ${name || '-'}\n` +
      `• Usaha: ${businessName || '-'}\n` +
      `• Kota: ${city || '-'}\n` +
      `• Jumlah Outlet: ${outletCount} outlet\n` +
      `• Kontak (WA/Email): ${contactInfo || '-'}\n` +
      `• Tujuan Campaign: ${goal}\n` +
      `• Kanal Tersedia: ${channels.length > 0 ? channels.join(', ') : '-'}\n` +
      `• Target Periode: ${targetPeriod || 'Disesuaikan dengan jadwal tim'}\n` +
      `• Catatan Tambahan: ${notes || '-'}\n\n` +
      `Mohon informasikan ketersediaan waktu untuk pembahasan proposal dan kelayakan alur campaign ini. Terima kasih!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDraftGenerated(true);
  };

  const draftText = constructDraftMessage();
  const whatsappUrl = `https://wa.me/6285177460854?text=${encodeURIComponent(draftText)}`;
  const mailtoUrl = `mailto:ryanard92@gmail.com?subject=${encodeURIComponent(
    `[Origin Systems] Rencana Campaign - ${businessName || 'Kafe'}`
  )}&body=${encodeURIComponent(draftText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(draftText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="form-campaign" className="py-20 sm:py-28 bg-white dark:bg-[#151518] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-neutral-300 text-xs font-mono font-medium">
            <span>Mulai dari Diskusi Awal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            Bagian penjualan mana yang ingin Anda perbaiki?
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Isi formulir ringkas di bawah untuk merangkum tujuan Anda. Sistem akan menyiapkan draft pesan resmi yang dapat langsung Anda kirimkan ke tim Origin Systems melalui WhatsApp atau Email.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-stone-50 dark:bg-neutral-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-neutral-800 shadow-md">
          {!draftGenerated ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nama */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Contoh: Ryan / Sarah"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors"
                  />
                </div>

                {/* Nama Usaha */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                    Nama Usaha Kafe / Resto <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={e => setBusinessName(e.target.value)}
                    placeholder="Contoh: The Daily Bean Cafe"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Kota */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                    Kota Lokasi Outlet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Contoh: Jakarta Selatan"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors"
                  />
                </div>

                {/* Jumlah Outlet */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                    Jumlah Outlet Aktif
                  </label>
                  <select
                    value={outletCount}
                    onChange={e => setOutletCount(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors cursor-pointer"
                  >
                    <option value="1">1 Outlet</option>
                    <option value="2">2 Outlet</option>
                    <option value="3">3 Outlet</option>
                    <option value="4+">Lebih dari 3 Outlet</option>
                  </select>
                </div>

                {/* WhatsApp atau Email */}
                <div className="space-y-1.5 sm:col-span-1">
                  <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                    Nomor WhatsApp / Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={e => setContactInfo(e.target.value)}
                    placeholder="0812... atau email"
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors"
                  />
                </div>
              </div>

              {/* Tujuan Campaign */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                  Tujuan Campaign yang Ingin Dijalankan <span className="text-red-500">*</span>
                </label>
                <select
                  value={goal}
                  onChange={e => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors cursor-pointer"
                >
                  <option value="Menambah pesanan pada hari sepi">Menambah pesanan pada hari sepi</option>
                  <option value="Mengajak pelanggan lama kembali">Mengajak pelanggan lama kembali</option>
                  <option value="Mendapatkan pesanan grup (Coffee Break / Catering)">Mendapatkan pesanan grup (Coffee Break / Catering)</option>
                  <option value="Meluncurkan menu baru">Meluncurkan menu baru</option>
                  <option value="Eksplorasi kebutuhan campaign lainnya">Eksplorasi kebutuhan campaign lainnya</option>
                </select>
              </div>

              {/* Kanal Pelanggan yang Sudah Tersedia */}
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200 block">
                  Kanal Pelanggan yang Sudah Dimiliki Kafe (Pilih yang relevan):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {channelOptions.map((ch, idx) => {
                    const isChecked = channels.includes(ch);
                    return (
                      <label
                        key={idx}
                        className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-slate-100 dark:bg-slate-800/80 border-slate-500 text-stone-900 dark:text-neutral-100 font-medium'
                            : 'bg-white dark:bg-neutral-800 border-stone-200 dark:border-neutral-700 text-stone-600 dark:text-neutral-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleChannelToggle(ch)}
                          className="accent-slate-800 dark:accent-slate-300 rounded"
                        />
                        <span>{ch}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Target Periode (Opsional) */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                  Target Periode Pelaksanaan (Opsional)
                </label>
                <input
                  type="text"
                  value={targetPeriod}
                  onChange={e => setTargetPeriod(e.target.value)}
                  placeholder="Contoh: Bulan depan, 2 minggu ke depan, atau tanggal khusus"
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors"
                />
              </div>

              {/* Catatan Singkat */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-neutral-200">
                  Catatan Singkat / Harapan Spesifik
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Tuliskan jika ada menu unggulan tertentu atau preferensi operasional..."
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-stone-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-800 dark:focus:ring-slate-300 transition-colors"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Bahas Campaign Saya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-center text-stone-500 dark:text-neutral-400">
                Formulir ini menyusun ringkasan kebutuhan Anda menjadi format teks rapi. Tidak ada data tersembunyi yang dijual ke pihak ketiga.
              </p>

            </form>
          ) : (
            /* Result Screen: Honest & Real Message Dispatching */
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-2xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-slate-800 dark:text-slate-200 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs sm:text-sm text-stone-800 dark:text-neutral-200 leading-relaxed">
                  <strong className="text-stone-900 dark:text-white font-bold block">
                    Draft Rencana Campaign Siap Dikirim
                  </strong>
                  <p>
                    Origin Systems tidak menggunakan notifikasi database palsu. Silakan pilih kanal komunikasi di bawah untuk mengirimkan draft pesan ini langsung ke tim konsultan kami.
                  </p>
                </div>
              </div>

              {/* Draft Message Preview Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-600 dark:text-neutral-400">
                  <span className="font-mono font-semibold">Teks Draft Konsultasi:</span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-slate-900 dark:text-white hover:underline cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
                        <span>Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin Teks</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-stone-300 dark:border-neutral-700 text-xs font-mono text-stone-800 dark:text-neutral-200 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                  {draftText}
                </div>
              </div>

              {/* Real Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim ke WhatsApp (+62 851-7746-0854)</span>
                </a>

                <a
                  href={mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-stone-100 text-slate-900 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 font-semibold text-xs sm:text-sm border border-stone-300 dark:border-neutral-700 transition-colors shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kirim via Email (ryanard92@gmail.com)</span>
                </a>
              </div>

              <div className="pt-2 text-center">
                <button
                  onClick={() => setDraftGenerated(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-neutral-200 underline cursor-pointer"
                >
                  ← Edit kembali data formulir
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
