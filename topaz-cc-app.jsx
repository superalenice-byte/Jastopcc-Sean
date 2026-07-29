import React, { useState } from "react";
import {
  Sparkles, Home, ListVideo, ClipboardList, Images, Phone, Circle,
  Users, Layers, Clock, ShieldCheck, Megaphone, X, Wand2, Lock,
  Zap, MessageCircle, Music2, Bot, UploadCloud, Info, ChevronLeft,
  Download, CheckCircle2, LayoutDashboard, ListOrdered, Database,
  Settings, LogOut, Search, ChevronDown, Trash2
} from "lucide-react";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */

const CC_LIST = [
  { id: 0, name: "No CC", tag: "Original", grad: "from-zinc-600 to-zinc-800" },
  { id: 1, name: "Chyko", tag: "Recommended", grad: "from-fuchsia-500 to-purple-700" },
  { id: 2, name: "Hesitate", tag: "New", grad: "from-fuchsia-500 to-purple-900" },
  { id: 3, name: "Idhasatrya14", tag: "", grad: "from-violet-500 to-purple-900" },
  { id: 4, name: "itt.kqmxdow1-1", tag: "", grad: "from-purple-400 to-violet-900" },
  { id: 5, name: "itt.kqmxdow1-2", tag: "", grad: "from-violet-400 to-purple-900" },
  { id: 6, name: "Parthedits", tag: "", grad: "from-fuchsia-400 to-violet-900" },
  { id: 7, name: "Sharpen", tag: "Hot", grad: "from-violet-400 to-fuchsia-800" },
  { id: 8, name: "Luxesharp", tag: "", grad: "from-purple-400 to-fuchsia-900" },
];

const GALLERY = [
  { id: "video_kpop1.mp4", cc: "Chyko", notes: "Hilangkan haze, sharpen dikit", status: "Selesai", date: "12 Mei 2024, 20:15" },
  { id: "video_kpop2.mp4", cc: "Sharpen", notes: "Clean + sharpen", status: "Selesai", date: "11 Mei 2024, 18:42" },
  { id: "video_kpop3.mp4", cc: "Hesitate", notes: "Warna lebih soft", status: "Diproses", date: "10 Mei 2024, 16:30" },
  { id: "video_kpop4.mp4", cc: "No CC", notes: "-", status: "Pending", date: "9 Mei 2024, 14:10" },
];

const ORDERS = [
  { id: "#0007", name: "Sean", cc: "Chyko", quality: "1080p", status: "Selesai", time: "12 Mei 15:10" },
  { id: "#0006", name: "Al", cc: "Sharpen", status: "Diproses", quality: "1080p", time: "12 Mei 14:22" },
  { id: "#0005", name: "Raka", cc: "Hesitate", status: "Rendering", quality: "1080p", time: "12 Mei 13:50" },
  { id: "#0004", name: "Dipa", cc: "itt.kqmxdow1", status: "Pending", quality: "1080p", time: "12 Mei 12:33" },
  { id: "#0003", name: "Den", cc: "Parthedits", status: "Selesai", quality: "1080p", time: "11 Mei 11:47" },
  { id: "#0002", name: "Aska", cc: "Luxesharp", status: "Selesai", quality: "1080p", time: "11 Mei 22:10" },
  { id: "#0001", name: "Bima", cc: "No CC", status: "Selesai", quality: "1080p", time: "11 Mei 20:05" },
];

const STATUS_STYLE = {
  Selesai: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
  Diproses: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  Rendering: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Pending: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
};

/* ---------------------------------------------------------
   SHARED BITS
--------------------------------------------------------- */

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-900/40">
        <Sparkles size={16} className="text-white" strokeWidth={2.5} />
      </div>
      <span className="font-extrabold tracking-tight text-white text-[15px]">
        TOPAZ <span className="text-violet-400">CC</span>
      </span>
    </div>
  );
}

function StatusPill({ status }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${STATUS_STYLE[status]}`}>
      {status}
    </span>
  );
}

function NavBar({ page, setPage, publicOnly = true }) {
  const items = [
    { key: "home", label: "Home", icon: Home },
    { key: "pilihcc", label: "Pilih CC", icon: ListVideo },
    { key: "cara", label: "Cara Order", icon: ClipboardList },
    { key: "galeri", label: "Galeri", icon: Images },
    { key: "kontak", label: "Kontak", icon: Phone },
  ];
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0a0a10]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <button onClick={() => setPage("home")} className="shrink-0">
          <Logo />
        </button>
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium">
          {items.map((it) => (
            <button
              key={it.key}
              onClick={() => setPage(it.key)}
              className={`transition-colors ${page === it.key ? "text-white" : "text-zinc-400 hover:text-zinc-200"}`}
            >
              {it.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 px-3 py-1.5 text-[11px] font-semibold text-fuchsia-400">
          <Circle size={7} className="fill-fuchsia-400 text-fuchsia-400" />
          Sedang Online
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-5 pb-6 pt-2 text-center text-[11px] text-zinc-600">
      © 2024 TOPAZ CC · All Rights Reserved
    </div>
  );
}

function BackButton({ onClick, label = "Kembali" }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-zinc-300 border border-white/10 rounded-lg px-3.5 py-2 hover:bg-white/5 transition-colors"
    >
      <ChevronLeft size={15} /> {label}
    </button>
  );
}

/* ---------------------------------------------------------
   HOME PAGE
--------------------------------------------------------- */

function HomePage({ setPage }) {
  const [annOpen, setAnnOpen] = useState(true);
  return (
    <div>
      <NavBar page="home" setPage={setPage} />
      <main className="max-w-6xl mx-auto px-5 pt-12 pb-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-[38px] leading-[1.1] font-extrabold text-white">
            Jasa Enhance Video
            <br />
            <span className="text-violet-400">Topaz &amp; CC</span> K-POP
          </h1>
          <p className="mt-4 text-zinc-400 text-[14.5px] leading-relaxed max-w-md">
            Buat video kalian jadi lebih tajam, bersih, halus, dan berkualitas
            tinggi dengan Topaz + Color Correction pilihan terbaik.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setPage("pilihcc")}
              className="bg-violet-600 hover:bg-violet-500 transition-colors text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-violet-900/40"
            >
              Pilih CC Sekarang
            </button>
            <button
              onClick={() => setPage("cara")}
              className="border border-white/15 text-zinc-200 text-[13.5px] font-semibold px-5 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
            >
              Lihat Cara Order
            </button>
          </div>

          <div className="mt-10 grid grid-cols-4 gap-4">
            {[
              { icon: Users, val: "8+", label: "CC Tersedia" },
              { icon: Layers, val: "500+", label: "Video Diproses" },
              { icon: Clock, val: "1–24 Jam", label: "Estimasi Proses" },
              { icon: ShieldCheck, val: "100%", label: "Aman & Privat" },
            ].map((s, i) => (
              <div key={i}>
                <s.icon size={18} className="text-violet-400 mb-1.5" />
                <div className="text-white font-bold text-[15px]">{s.val}</div>
                <div className="text-zinc-500 text-[11px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-gradient-to-br from-violet-950 via-zinc-900 to-fuchsia-950">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full bg-gradient-to-br from-zinc-700/60 to-zinc-900 flex items-end p-4">
              <span className="text-[11px] font-bold bg-black/60 px-2.5 py-1 rounded-md text-white">Before</span>
            </div>
            <div className="w-1/2 h-full bg-gradient-to-br from-fuchsia-500/40 via-violet-600/40 to-purple-900 flex items-end justify-end p-4">
              <span className="text-[11px] font-bold bg-black/60 px-2.5 py-1 rounded-md text-white">After</span>
            </div>
          </div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/70" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <Wand2 size={15} className="text-violet-700" />
          </div>
        </div>
      </main>

      {annOpen && (
        <div className="max-w-6xl mx-auto px-5 mt-6">
          <div className="flex items-center justify-between gap-3 rounded-xl border border-violet-500/25 bg-violet-500/10 px-4 py-3">
            <div className="flex items-center gap-3 text-[13px]">
              <Megaphone size={16} className="text-violet-400 shrink-0" />
              <span className="font-semibold text-white">Announcement</span>
              <span className="text-zinc-400 hidden sm:inline">
                Order hari ini masih dibuka! Estimasi 1–24 jam tergantung antrian.
              </span>
            </div>
            <button onClick={() => setAnnOpen(false)} className="text-zinc-500 hover:text-zinc-300">
              <X size={15} />
            </button>
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-5 mt-12">
        <h2 className="text-white font-bold text-lg mb-5">Kenapa pilih jasa ini?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Zap, title: "Kualitas Maksimal", desc: "Menggunakan Topaz Video Enhance AI untuk hasil terbaik." },
            { icon: ListVideo, title: "CC Pilihan Editor", desc: "CC pilihan editor K-POP buat hasil yang clean & aesthetic." },
            { icon: Lock, title: "Privat & Aman", desc: "Video kamu aman, tidak akan disebar ke mana pun." },
            { icon: MessageCircle, title: "Fast Response", desc: "Admin fast respon dan selalu online setiap hari." },
          ].map((f, i) => (
            <div key={i} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <div className="w-9 h-9 rounded-lg bg-violet-500/15 flex items-center justify-center mb-3">
                <f.icon size={16} className="text-violet-400" />
              </div>
              <div className="text-white font-semibold text-[13.5px] mb-1">{f.title}</div>
              <div className="text-zinc-500 text-[12px] leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 mt-12">
        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5 flex flex-wrap items-center justify-between gap-4">
          <span className="text-white font-semibold text-[13.5px]">Hubungi Admin</span>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">
              <MessageCircle size={14} /> WhatsApp
            </button>
            <button className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">
              <Music2 size={14} /> TikTok
            </button>
            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white text-[12.5px] font-semibold px-4 py-2 rounded-lg">
              <Bot size={14} /> Discord
            </button>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   PILIH CC PAGE
--------------------------------------------------------- */

function PilihCCPage({ setPage, setSelectedCC }) {
  return (
    <div>
      <NavBar page="pilihcc" setPage={setPage} />
      <main className="max-w-5xl mx-auto px-5 py-10">
        <div className="text-center mb-8">
          <h1 className="text-white font-extrabold text-2xl">Pilih CC</h1>
          <p className="text-zinc-500 text-[13px] mt-1">Pilih CC yang cocok buat video kamu</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {CC_LIST.map((cc) => (
            <div key={cc.id} className="rounded-xl overflow-hidden border border-white/8 bg-white/[0.02]">
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${cc.grad} flex items-center justify-center`}>
                {cc.tag && (
                  <span className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    cc.tag === "Recommended" ? "bg-fuchsia-600 text-white" :
                    cc.tag === "New" ? "bg-purple-600 text-white" :
                    cc.tag === "Hot" ? "bg-violet-600 text-white" : "bg-black/50 text-white"
                  }`}>
                    {cc.tag}
                  </span>
                )}
                {cc.id === 0 && (
                  <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/50 text-white">
                    Original
                  </span>
                )}
                <Sparkles size={26} className="text-white/70" />
              </div>
              <div className="p-3">
                <div className="text-white text-[12.5px] font-semibold mb-2 truncate">
                  {cc.id !== 0 ? `${cc.id}. ${cc.name}` : cc.name}
                </div>
                <button
                  onClick={() => {
                    setSelectedCC(cc.name);
                    setPage("upload");
                  }}
                  className="w-full bg-violet-600 hover:bg-violet-500 transition-colors text-white text-[12px] font-semibold py-1.5 rounded-lg"
                >
                  Pilih CC
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <BackButton label="Kembali ke Home" onClick={() => setPage("home")} />
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------
   UPLOAD VIDEO PAGE
--------------------------------------------------------- */

function UploadPage({ setPage, selectedCC, setOrderPlaced }) {
  const [notes, setNotes] = useState("");
  const [quality, setQuality] = useState("1080p (Recommended)");
  const [format, setFormat] = useState("MP4");

  return (
    <div>
      <NavBar page="upload" setPage={setPage} />
      <main className="max-w-4xl mx-auto px-5 py-10">
        <div className="text-center mb-8">
          <h1 className="text-white font-extrabold text-2xl">Upload Video</h1>
          <p className="text-zinc-500 text-[13px] mt-1">Upload video kamu, isi notes, lalu kirim untuk diproses</p>
        </div>

        <div className="grid md:grid-cols-[1.5fr,1fr] gap-6">
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
            <div className="text-white text-[13px] font-semibold mb-3">Video</div>
            <div className="rounded-lg border-2 border-dashed border-white/15 py-10 flex flex-col items-center justify-center text-center hover:border-violet-500/40 transition-colors cursor-pointer">
              <div className="w-11 h-11 rounded-full bg-violet-500/15 flex items-center justify-center mb-3">
                <UploadCloud size={20} className="text-violet-400" />
              </div>
              <div className="text-zinc-300 text-[13px]">
                Drag &amp; Drop video kamu di sini
              </div>
              <div className="text-zinc-500 text-[12px] mt-1">
                atau <span className="text-violet-400 font-semibold">klik untuk pilih file</span>
              </div>
              <div className="text-zinc-600 text-[11px] mt-2">MP4 / MOV / MKV (Max. 2GB)</div>
            </div>

            <div className="mt-5">
              <div className="text-white text-[13px] font-semibold mb-2">Notes (Opsional)</div>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Hilangkan haze, sharpen dikit, warna lebih clean, dll."
                rows={3}
                className="w-full rounded-lg bg-black/30 border border-white/10 text-zinc-200 text-[12.5px] p-3 outline-none focus:border-violet-500/50 placeholder:text-zinc-600"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              <div>
                <div className="text-white text-[13px] font-semibold mb-2">Kualitas Output</div>
                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                  className="w-full rounded-lg bg-black/30 border border-white/10 text-zinc-200 text-[12.5px] p-2.5 outline-none focus:border-violet-500/50"
                >
                  <option>1080p (Recommended)</option>
                  <option>720p</option>
                  <option>4K</option>
                </select>
              </div>
              <div>
                <div className="text-white text-[13px] font-semibold mb-2">Format Output</div>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full rounded-lg bg-black/30 border border-white/10 text-zinc-200 text-[12.5px] p-2.5 outline-none focus:border-violet-500/50"
                >
                  <option>MP4</option>
                  <option>MOV</option>
                  <option>MKV</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                setOrderPlaced({ cc: selectedCC || "Chyko", quality, format, notes: notes || "-" });
                setPage("status");
              }}
              className="w-full mt-6 bg-violet-600 hover:bg-violet-500 transition-colors text-white text-[13.5px] font-semibold py-2.5 rounded-lg shadow-lg shadow-violet-900/40"
            >
              Kirim Order
            </button>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5 h-fit">
            <div className="text-white text-[13px] font-semibold mb-4">Ringkasan Order</div>
            <div className="space-y-3 text-[12.5px]">
              <div className="flex justify-between">
                <span className="text-zinc-500">CC Dipilih</span>
                <span className="text-violet-400 font-semibold">{selectedCC || "Chyko"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Kualitas</span>
                <span className="text-zinc-200 font-medium">{quality.split(" ")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Format</span>
                <span className="text-zinc-200 font-medium">{format}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Estimasi Proses</span>
                <span className="text-zinc-200 font-medium">1 – 24 Jam</span>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-2 rounded-lg bg-violet-500/10 border border-violet-500/20 p-3">
              <Info size={14} className="text-violet-400 mt-0.5 shrink-0" />
              <span className="text-[11.5px] text-zinc-400 leading-relaxed">
                Pastikan video sudah sesuai sebelum dikirim ya!
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <BackButton onClick={() => setPage("pilihcc")} />
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------
   STATUS ORDER PAGE
--------------------------------------------------------- */

function StatusPage({ setPage, order }) {
  const steps = [
    { key: "Pending", icon: Clock, time: "12 Mei 10:20" },
    { key: "Diproses", icon: Layers, time: "12 Mei 11:00" },
    { key: "Rendering", icon: ListVideo, time: "12 Mei 13:40" },
    { key: "Selesai", icon: CheckCircle2, time: "12 Mei 15:10" },
  ];
  const activeIdx = 3;

  return (
    <div>
      <NavBar page="status" setPage={setPage} />
      <main className="max-w-3xl mx-auto px-5 py-10">
        <div className="text-center mb-8">
          <h1 className="text-white font-extrabold text-2xl">Status Order</h1>
          <p className="text-zinc-500 text-[13px] mt-1">
            ID Order: <span className="text-violet-400 font-semibold">#0007</span>
          </p>
        </div>

        <div className="flex items-center justify-between mb-10 px-2">
          {steps.map((s, i) => (
            <React.Fragment key={s.key}>
              <div className="flex flex-col items-center gap-2 text-center w-20">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border-2 ${
                    i <= activeIdx
                      ? "bg-fuchsia-600 border-fuchsia-600 text-white"
                      : "bg-zinc-900 border-white/10 text-zinc-500"
                  }`}
                >
                  <s.icon size={17} />
                </div>
                <div className="text-[11.5px] font-semibold text-zinc-300">{s.key}</div>
                <div className="text-[10px] text-zinc-600">{s.time}</div>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mt-[-20px] ${i < activeIdx ? "bg-fuchsia-600" : "bg-white/10"}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="rounded-xl border border-white/8 bg-white/[0.02] p-5">
          <div className="text-white text-[13px] font-semibold mb-4">Detail Order</div>
          <div className="space-y-3 text-[12.5px]">
            <div className="flex justify-between">
              <span className="text-zinc-500">CC Dipilih</span>
              <span className="text-violet-400 font-semibold">{order?.cc || "Chyko"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Kualitas</span>
              <span className="text-zinc-200 font-medium">{order?.quality?.split(" ")[0] || "1080p"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500">Format</span>
              <span className="text-zinc-200 font-medium">{order?.format || "MP4"}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-zinc-500 shrink-0">Notes</span>
              <span className="text-zinc-200 font-medium text-right">{order?.notes || "Hilangkan haze, sharpen dikit, warna lebih clean."}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <button className="flex items-center justify-center gap-2 border border-white/15 text-zinc-200 text-[12.5px] font-semibold py-2 rounded-lg hover:bg-white/5 transition-colors">
              <Download size={14} /> Download Original
            </button>
            <button className="flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors text-white text-[12.5px] font-semibold py-2 rounded-lg">
              <Download size={14} /> Download Hasil
            </button>
          </div>
        </div>

        <div className="mt-8">
          <BackButton label="Kembali ke Galeri" onClick={() => setPage("galeri")} />
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------
   CARA ORDER PAGE
--------------------------------------------------------- */

function CaraOrderPage({ setPage }) {
  const steps = [
    { n: 1, title: "Pilih CC", desc: "Pilih CC yang kamu suka di halaman Pilih CC." },
    { n: 2, title: "Upload Video", desc: "Upload video kamu dan pastikan kualitas bagus." },
    { n: 3, title: "Isi Notes", desc: "Tulis notes sesuai yang kamu mau." },
    { n: 4, title: "Tunggu Diproses", desc: "Tunggu sesuai estimasi waktu yang tertera." },
    { n: 5, title: "Hasil Dikirim", desc: "Jika sudah selesai, kamu bisa download hasilnya." },
  ];
  return (
    <div>
      <NavBar page="cara" setPage={setPage} />
      <main className="max-w-2xl mx-auto px-5 py-10">
        <h1 className="text-white font-extrabold text-2xl mb-8 text-center">Cara Order</h1>
        <div className="space-y-5">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-4">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-[13px]">
                {s.n}
              </div>
              <div>
                <div className="text-white font-semibold text-[13.5px]">{s.title}</div>
                <div className="text-zinc-500 text-[12.5px] mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <BackButton label="Kembali ke Home" onClick={() => setPage("home")} />
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------
   GALERI PAGE
--------------------------------------------------------- */

function GaleriPage({ setPage }) {
  return (
    <div>
      <NavBar page="galeri" setPage={setPage} />
      <main className="max-w-2xl mx-auto px-5 py-10">
        <h1 className="text-white font-extrabold text-2xl mb-1 text-center">Galeri Saya</h1>
        <p className="text-zinc-500 text-[13px] mb-8 text-center">Riwayat video yang pernah kamu order</p>
        <div className="space-y-3">
          {GALLERY.map((v) => (
            <button
              key={v.id}
              onClick={() => setPage("status")}
              className="w-full flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.02] p-3 text-left hover:border-violet-500/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-violet-700 to-fuchsia-800 flex items-center justify-center shrink-0">
                <ListVideo size={18} className="text-white/80" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-[13px] font-semibold truncate">{v.id}</div>
                <div className="text-zinc-500 text-[11.5px] truncate">CC: {v.cc}</div>
                <div className="text-zinc-600 text-[11px] truncate">Notes: {v.notes}</div>
              </div>
              <div className="flex flex-col items-end gap-2 shrink-0">
                <StatusPill status={v.status} />
                <Download size={14} className="text-zinc-500" />
              </div>
            </button>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <BackButton label="Kembali ke Home" onClick={() => setPage("home")} />
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------
   KONTAK PAGE (simple)
--------------------------------------------------------- */

function KontakPage({ setPage }) {
  return (
    <div>
      <NavBar page="kontak" setPage={setPage} />
      <main className="max-w-md mx-auto px-5 py-16 text-center">
        <h1 className="text-white font-extrabold text-2xl mb-2">Hubungi Admin</h1>
        <p className="text-zinc-500 text-[13px] mb-8">Admin fast respon setiap hari.</p>
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 transition-colors text-white text-[13px] font-semibold py-2.5 rounded-lg">
            <MessageCircle size={15} /> WhatsApp
          </button>
          <button className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 transition-colors text-white text-[13px] font-semibold py-2.5 rounded-lg">
            <Music2 size={15} /> TikTok
          </button>
          <button className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 transition-colors text-white text-[13px] font-semibold py-2.5 rounded-lg">
            <Bot size={15} /> Discord
          </button>
        </div>
        <div className="mt-8">
          <BackButton label="Kembali ke Home" onClick={() => setPage("home")} />
        </div>
      </main>
    </div>
  );
}

/* ---------------------------------------------------------
   ADMIN DASHBOARD
--------------------------------------------------------- */

function AdminPage({ setPage }) {
  const [tab, setTab] = useState("Semua");
  const [activeOrder, setActiveOrder] = useState(ORDERS[0]);
  const filtered = tab === "Semua" ? ORDERS : ORDERS.filter((o) => o.status === tab);

  const sideItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Daftar Order", icon: ListOrdered, active: true },
    { label: "Data CC", icon: Database },
    { label: "Announcement", icon: Megaphone },
    { label: "Pengaturan", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-white/5 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center">
            <ShieldCheck size={14} className="text-violet-400" />
          </div>
          <span className="text-white font-bold text-[14px]">
            ADMIN <span className="text-violet-400">DASHBOARD</span>
          </span>
        </div>
        <button onClick={() => setPage("home")} className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 text-[12.5px] font-medium">
          <LogOut size={14} /> Logout
        </button>
      </header>

      <div className="flex flex-1">
        <aside className="w-48 border-r border-white/5 py-6 px-3 hidden md:block">
          <nav className="space-y-1">
            {sideItems.map((it) => (
              <button
                key={it.label}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12.5px] font-medium text-left ${
                  it.active ? "bg-violet-600/15 text-violet-300" : "text-zinc-400 hover:bg-white/5"
                }`}
              >
                <it.icon size={15} /> {it.label}
              </button>
            ))}
          </nav>
          <div className="mt-10 pt-4 border-t border-white/5">
            <div className="text-[11px] text-zinc-600 px-3">TOPAZ CC</div>
            <div className="text-[10px] text-zinc-700 px-3">Admin Panel</div>
          </div>
        </aside>

        <main className="flex-1 grid md:grid-cols-[1.5fr,1fr] gap-5 p-5">
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-semibold text-[13.5px]">Daftar Order</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              {["Semua", "Pending", "Diproses", "Selesai"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`text-[11.5px] font-semibold px-3 py-1.5 rounded-lg ${
                    tab === t ? "bg-violet-600 text-white" : "text-zinc-400 hover:bg-white/5"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="relative mb-3">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-600" />
              <input
                placeholder="Cari order..."
                className="w-full rounded-lg bg-black/30 border border-white/10 text-zinc-300 text-[12px] pl-8 pr-3 py-2 outline-none focus:border-violet-500/50 placeholder:text-zinc-600"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="text-zinc-500 text-left border-b border-white/5">
                    <th className="pb-2 font-medium">ID</th>
                    <th className="pb-2 font-medium">Nama</th>
                    <th className="pb-2 font-medium">CC</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Waktu</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((o) => (
                    <tr
                      key={o.id}
                      onClick={() => setActiveOrder(o)}
                      className={`border-b border-white/5 cursor-pointer ${activeOrder.id === o.id ? "bg-violet-500/10" : "hover:bg-white/[0.03]"}`}
                    >
                      <td className="py-2.5 text-zinc-400">{o.id}</td>
                      <td className="py-2.5 text-zinc-200 font-medium">{o.name}</td>
                      <td className="py-2.5 text-zinc-400">{o.cc}</td>
                      <td className="py-2.5"><StatusPill status={o.status} /></td>
                      <td className="py-2.5 text-zinc-500">{o.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 h-fit">
            <span className="text-white font-semibold text-[13.5px]">Detail Order {activeOrder.id}</span>
            <div className="grid grid-cols-2 gap-4 mt-4 text-[12px]">
              <div>
                <div className="text-zinc-500 mb-0.5">Nama</div>
                <div className="text-zinc-200 font-medium">{activeOrder.name}</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-0.5">Status</div>
                <select
                  value={activeOrder.status}
                  onChange={() => {}}
                  className="w-full rounded-md bg-black/30 border border-white/10 text-zinc-200 text-[11.5px] py-1 px-1.5 outline-none"
                >
                  <option>Pending</option>
                  <option>Diproses</option>
                  <option>Rendering</option>
                  <option>Selesai</option>
                </select>
              </div>
              <div>
                <div className="text-zinc-500 mb-0.5">CC</div>
                <div className="text-violet-400 font-semibold">{activeOrder.cc}</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-0.5">Kualitas</div>
                <div className="text-zinc-200 font-medium">{activeOrder.quality}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-zinc-500 text-[12px] mb-0.5">Notes</div>
              <div className="text-zinc-300 text-[12px]">Hilangkan haze, sharpen dikit, warna lebih clean.</div>
            </div>

            <div className="mt-4">
              <div className="text-white text-[12.5px] font-semibold mb-2">Upload Video Hasil</div>
              <div className="rounded-lg border-2 border-dashed border-white/15 py-6 flex flex-col items-center justify-center text-center">
                <UploadCloud size={17} className="text-violet-400 mb-1.5" />
                <div className="text-zinc-400 text-[11px]">Drag &amp; Drop atau klik untuk pilih file</div>
                <div className="text-zinc-600 text-[10px] mt-1">MP4 / MOV (Max. 2GB)</div>
              </div>
              <button className="w-full mt-3 bg-violet-600 hover:bg-violet-500 transition-colors text-white text-[12.5px] font-semibold py-2 rounded-lg">
                Upload
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-1.5 border border-white/15 text-zinc-200 text-[11.5px] font-semibold py-1.5 rounded-lg hover:bg-white/5">
                <Download size={13} /> Download
              </button>
              <button className="flex items-center justify-center gap-1.5 border border-rose-500/30 text-rose-400 text-[11.5px] font-semibold py-1.5 rounded-lg hover:bg-rose-500/10">
                <Trash2 size={13} /> Hapus Order
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   ROOT APP
--------------------------------------------------------- */

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedCC, setSelectedCC] = useState("");
  const [order, setOrder] = useState(null);

  const pageMap = {
    home: <HomePage setPage={setPage} />,
    pilihcc: <PilihCCPage setPage={setPage} setSelectedCC={setSelectedCC} />,
    upload: <UploadPage setPage={setPage} selectedCC={selectedCC} setOrderPlaced={setOrder} />,
    status: <StatusPage setPage={setPage} order={order} />,
    cara: <CaraOrderPage setPage={setPage} />,
    galeri: <GaleriPage setPage={setPage} />,
    kontak: <KontakPage setPage={setPage} />,
    admin: <AdminPage setPage={setPage} />,
  };

  return (
    <div className="min-h-screen bg-[#0a0a10] font-sans" style={{ fontFamily: "Inter, ui-sans-serif, system-ui" }}>
      {pageMap[page]}
      {page !== "admin" && (
        <button
          onClick={() => setPage("admin")}
          className="fixed bottom-4 right-4 text-[10px] text-zinc-700 hover:text-zinc-400 bg-zinc-900/60 border border-white/5 px-2.5 py-1.5 rounded-lg"
        >
          Admin Dashboard →
        </button>
      )}
    </div>
  );
}
