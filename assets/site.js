document.documentElement.classList.add("js");

/*
 * PENGATURAN TAUTAN – cukup ubah bagian ini sebelum website dipublikasikan.
 * Nomor WhatsApp memakai format internasional tanpa tanda +, contoh: 6281234567890.
 */
const SITE_CONFIG = {
  whatsappNumber: "6282120332438",
  instagramUrl: "https://www.instagram.com/desa_pameuntasan/",
  tiktokUrl: "https://www.tiktok.com/@kknm.desa.pameuntasan?is_from_webapp=1&sender_device=pc",
};

const whatsappMessage =
  "Halo Admin KKN Desa Pameuntasan, saya mendapatkan kontak ini dari portal peta desa.";

const channelUrls = {
  whatsapp: SITE_CONFIG.whatsappNumber
    ? `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`
    : "",
  instagram: SITE_CONFIG.instagramUrl,
  tiktok: SITE_CONFIG.tiktokUrl,
};

const channelNames = {
  whatsapp: "Nomor WhatsApp Pengaduan Admin Desa ",
  instagram: "Tautan Instagram",
  tiktok: "Tautan TikTok",
};

/*
 * DATA TIM – bagian "Tim Kami" di halaman utama.
 * Ganti "Nama ..." dengan nama asli dan "username" dengan username Instagram
 * (tanpa @) masing-masing anggota. Anggota PERTAMA pada array members setiap
 * divisi otomatis ditampilkan sebagai foto & nama penanggung jawab di kartu
 * divisi (mirip kartu Ketua/Wakil). Anggota lainnya baru muncul saat tombol
 * "Lihat tim" pada kartu itu diklik. Untuk divisi acara/konsumsi/humas/
 * logistik/pdd, anggota pertama diberi lead: true agar ditandai "Ketua Divisi".
 * Foto masih placeholder – ganti sendiri src gambarnya nanti kalau sudah ada
 * foto asli tiap anggota (taruh di assets/images/team/ lalu isi field "photo").
 */
const teamDivisions = {
  sekretaris: {
    label: "Sekretaris",
    members: [
      
      { name: "Adina", role: "Sekretaris 1", instagram: "andiinadtr", photo: "assets/images/team/andina.jpg", lead: true },
      { name: "arlinggawrdhni", role: "Sekretaris 2", instagram: "arlinggawrdhni", photo: "assets/images/team/ingga.jpg" },
    ],
  },
  bendahara: {
    label: "Bendahara",
    members: [
      { name: "Frida Faozan", role: "Bendahara 1", instagram: "fridafazn", photo: "assets/images/team/frida-faozan.jpg" },
      { name: "stefan", role: "Bendahara 2", instagram: "stevanhendr" , photo: "assets/images/team/stepan.jpg"},
    ],
  },
  acara: {
    label: "Acara",
    members: [
      { name: "juan_grld", role: "Ketua Divisi Acara", instagram: "juan_grld", photo: "assets/images/team/juan-grld.jpg", lead: true },
      { name: "Raisya Rahmawati", role: "Anggota Acara", instagram: "raisyarhma", photo: "assets/images/team/raisya-rahmawati.webp" },
      { name: "M.Rajeb", role: "Anggota Acara", instagram: "ihvcrushh.u", photo: "assets/images/team/m-rajeb.webp" },
      { name: "Ikhsan maulana", role: "Anggota Acara", instagram: "ikhsandhikaa_" , photo: "assets/images/team/ihsan.jpg"},
      { name: "Lucky Lumansyah", role: "Anggota Acara", instagram: "lkmnsyhh_" , photo: "assets/images/team/luki.jpg"},
      { name: "Anatasia Vinka", role: "Anggota Acara", instagram: "thvtsh" , photo: "assets/images/team/vinka.jpg"},
      { name: "Pasha fadhilah", role: "Anggota Acara", instagram: "pashafdlhhhh" , photo: "assets/images/team/pasa.jpg"},
    ],
  },
  konsumsi: {
    label: "Konsumsi",
    members: [
      { name: "dedeniqbal18", role: "Ketua Divisi Konsumsi", instagram: "dedeniqbal18", photo: "assets/images/team/dedeniqbal18.jpg", lead: true },
      { name: "Iqbal Maulana", role: "Anggota Konsumsi", instagram: "iqbalmauulana_", photo: "assets/images/team/iqbal-maulana.jpg"},
      { name: "Andhika Hikmah", role: "andhika hikmah maulid", instagram: "dikcharito", photo: "assets/images/team/andika-konsumsi.jpg"},
      { name: "Anita Khofsah", role: "Anggota Konsumsi", instagram: "anitakn__", photo: "assets/images/team/anita.jpg" },
      { name: "Jovanka ", role: "Anggota Konsumsi", instagram: "jovankapa", photo: "assets/images/team/jovanka.jpg"},
    ],
  },
  humas: {
    label: "Humas",
    members: [
      { name: "pputrawjy", role: "Ketua Divisi Humas", instagram: "pputrawjy", photo: "assets/images/team/pputrawjy.jpg", lead: true },
      { name: "Nevi Nadia", role: "Anggota Humas", instagram: "Nevinadpras", photo: "assets/images/team/nevi-nadia.webp" },
      { name: "Andika Fajrillah ", role: "Anggota Humas", instagram: "andikafc_" , photo: "assets/images/team/dika.jpg"},
      { name: "M.Rifky", role: "Anggota Humas", instagram: "rifkyy.p107", photo: "assets/images/team/rifki.jpg" },
      { name: "Selfi Safitri", role: "Anggota Humas", instagram: "selfitrr" , photo: "assets/images/team/selfi.jpg"},
      { name: "Reni Nurhasanah", role: "Anggota Humas", instagram: "reniiinrhsnh" , photo: "assets/images/team/reni.jpg"},
      { name: "Aditya Rodeo", role: "Anggota Humas", instagram: "adityarodeo" , photo: "assets/images/team/rodeo.jpg"},
    ],
  },
  logistik: {
    label: "Logistik",
    members: [
      { name: "zaa.frhan_", role: "Ketua Divisi Logistik", instagram: "zaa.frhan_", photo: "assets/images/team/zaa-frhan.jpg", lead: true },
      { name: "Irma Triyani ", role: "Anggota Logistik", instagram: "irmaatry", photo: "assets/images/team/irma.jpg" },
      { name: "Dendri Giri Syahbani", role: "Anggota Logistik", instagram: "dendrigiriii23", photo: "assets/images/team/dendri.jpg" },
      { name: "Tegar", role: "Anggota Logistik", instagram: "_rnggasptra", photo: "assets/images/team/tegar.jpg" },
      { name: "Rendy Firmansyah Fadliana", role: "Anggota Logistik", instagram: "fadlianaf", photo: "assets/images/team/ajona.jpg" },
    ],
  },
  pdd: {
    label: "PDD",
    members: [
      { name: "Muhamad Ali", role: "Ketua Divisi PDD", instagram: "alimhdw_", photo: "assets/images/team/muhamad-ali.png", lead: true },
      { name: "Zahra Salsabila", role: "Anggota PDD", instagram: "rraaaila" , photo: "assets/images/team/lala.jpg"},
      { name: "Adelia malika Fitrahania", role: "Anggota PDD", instagram: "adeliamalikaaa" , photo: "assets/images/team/adell.jpg"},
      { name: "Muhammad Rizal", role: "Anggota PDD", instagram: "rizalll3iraw" , photo: "assets/images/team/rijal.jpg"},
      { name: "Ihsan Lumanul", role: "Anggota PDD", instagram: "username" , photo: "assets/images/team/lumanul.jpg"},
      { name: "Danuarkha", role: "Anggota PDD", instagram: "danuleandros" , photo: "assets/images/team/danu.jpg"},
    ],
  },
};

/*
 * ============================================================
 * DATA MODUL PROKER – bagian "Proker" (#proker) di halaman utama.
 * ============================================================
 * Isi 3 kategori: unggulan, partisipasi, promosi.
 *
 * Tiap proker punya:
 *  - title       : nama proker (mis. "Peta Administrasi RW")
 *  - tag         : label kecil di badan kartu (boleh sama dgn kategori atau custom)
 *  - cover       : foto sampul kartu (assets/images/proker/....jpg)
 *  - summary     : 1-2 kalimat ringkas, tampil di badan kartu
 *  - description : deskripsi lebih panjang, tampil di bawah galeri saat dibuka
 *  - gallery     : array foto proses/dokumentasi. Tiap foto:
 *        { src: "assets/images/proker/....jpg", caption: "Keterangan singkat foto" }
 *      Kalau gallery dikosongkan array [], tombol otomatis jadi
 *      "Lihat cerita" tanpa galeri (silakan sesuaikan kalau proker itu
 *      belum punya dokumentasi foto proses).
 *
 * Taruh semua foto proker di folder assets/images/proker/ lalu ganti
 * path di bawah ini sesuai nama file kamu. Item PERTAMA di kategori
 * "unggulan", dan proker yang SENDIRIAN di kategorinya (lihat "promosi"),
 * otomatis tampil sebagai kartu sorotan (lebih besar, layout horizontal) —
 * lihat class .proker-card--feature di site.css.
 */
const prokerData = {
  unggulan: [
    {
      title: "Peta Administrasi RW",
      tag: "Unggulan",
      cover: "assets/images/proker/peta-cover.jpg",
      summary: "Peta A0 batas 13 RW dan sebaran fasilitas publik Desa Pameuntasan.",
      description:
        "Survei lapangan, pengumpulan titik koordinat fasilitas, hingga desain akhir peta A0 yang dibagikan ke warga dalam bentuk cetak dan PDF.",
      gallery: [
        { src: "assets/images/proker/peta-proses-1.jpg", caption: "Survei dan pengambilan titik koordinat di lapangan" },
        { src: "assets/images/proker/peta-proses-2.jpg", caption: "Diskusi batas wilayah RW bersama perangkat desa" },
        { src: "assets/images/proker/peta-proses-3.jpg", caption: "Proses desain dan pewarnaan wilayah RW" },
        { src: "assets/images/proker/peta-proses-4.jpg", caption: "Pengecekan akhir sebelum peta dicetak A0" },
      ],
    },
    {
      title: "Papan Edukasi Sampah",
      tag: "Unggulan",
      cover: "assets/images/proker/papan-edukasi-cover.jpg",
      summary: "Papan informasi jenis sampah dan cara memilahnya untuk warga.",
      description:
        "Papan edukasi dipasang di titik strategis desa berisi panduan memilah sampah organik, anorganik, dan B3 agar warga lebih mudah memulai kebiasaan memilah dari rumah.",
      gallery: [
        { src: "assets/images/proker/papan-edukasi-proses-1.jpg", caption: "Perancangan desain dan materi papan edukasi" },
        { src: "assets/images/proker/papan-edukasi-proses-2.jpg", caption: "Proses pembuatan dan pengecatan papan" },
        { src: "assets/images/proker/papan-edukasi-proses-3.jpg", caption: "Pemasangan papan edukasi di lokasi warga" },
      ],
    },
    {
      title: "Tong Sampah Pilah",
      tag: "Unggulan",
      cover: "assets/images/proker/tong-sampah-cover.jpg",
      summary: "Tong sampah pilah organik & anorganik untuk fasilitas umum.",
      description:
        "Pengadaan dan pengecatan tong sampah pilah yang ditempatkan di fasilitas umum sebagai tindak lanjut dari edukasi pemilahan sampah kepada warga.",
      gallery: [
        { src: "assets/images/proker/tong-sampah-proses-1.jpg", caption: "Persiapan dan pengecatan tong sampah" },
        { src: "assets/images/proker/tong-sampah-proses-2.jpg", caption: "Pemberian label kategori sampah" },
        { src: "assets/images/proker/tong-sampah-proses-3.jpg", caption: "Penempatan tong sampah di titik fasilitas umum" },
      ],
    },
  ],
  partisipasi: [
    {
      title: "Bebersih Masjid",
      tag: "Partisipasi",
      cover: "assets/images/proker/bebersih-masjid-cover.jpg",
      summary: "Ikut membersihkan area masjid bersama warga dan remaja setempat.",
      description:
        "Tim KKN turut serta dalam kegiatan bersih-bersih masjid bersama warga, mulai dari menyapu halaman, mengepel lantai, hingga merapikan area wudu menjelang waktu salat.",
      gallery: [
        { src: "assets/images/proker/bebersih-masjid-proses-1.jpg", caption: "Membersihkan halaman dan teras masjid" },
        { src: "assets/images/proker/bebersih-masjid-proses-2.jpg", caption: "Kerja bakti bersama warga dan remaja masjid" },
      ],
    },
    {
      title: "Gotong Royong Warga",
      tag: "Partisipasi",
      cover: "assets/images/proker/gotong-royong-cover.jpg",
      summary: "Ikut serta membersihkan lingkungan bersama warga tiap RW.",
      description:
        "Berpartisipasi dalam kegiatan gotong royong rutin membersihkan saluran air dan lingkungan sekitar bersama warga di beberapa titik RW.",
      gallery: [
        { src: "assets/images/proker/gotong-royong-proses-1.jpg", caption: "Kerja bakti membersihkan saluran air" },
        { src: "assets/images/proker/gotong-royong-proses-2.jpg", caption: "Gotong royong bersama warga dan perangkat desa" },
      ],
    },
    {
      title: "Pengajian Warga",
      tag: "Partisipasi",
      cover: "assets/images/proker/pengajian-cover.jpg",
      summary: "Mengikuti pengajian rutin warga sebagai bentuk silaturahmi.",
      description:
        "Tim KKN hadir dan ikut serta dalam pengajian rutin warga, menjadi ajang mempererat silaturahmi sekaligus memperkenalkan program-program KKN kepada jemaah.",
      gallery: [
        { src: "assets/images/proker/pengajian-proses-1.jpg", caption: "Mengikuti pengajian rutin bersama warga" },
        { src: "assets/images/proker/pengajian-proses-2.jpg", caption: "Silaturahmi dengan jemaah pengajian" },
      ],
    },
    {
      title: "Mengajar di SD saat 17 Agustusan",
      tag: "Partisipasi",
      cover: "assets/images/proker/ngajar-17an-cover.jpg",
      summary: "Mendampingi lomba dan mengajar di SD dalam rangkaian HUT RI.",
      description:
        "Membantu kegiatan belajar mengajar sekaligus mendampingi lomba-lomba 17 Agustusan di SDN Pameuntasan sebagai bagian dari perayaan Hari Kemerdekaan bersama siswa.",
      gallery: [
        { src: "assets/images/proker/ngajar-17an-proses-1.jpg", caption: "Mendampingi lomba 17 Agustus bersama siswa" },
        { src: "assets/images/proker/ngajar-17an-proses-2.jpg", caption: "Kegiatan belajar mengajar di kelas" },
      ],
    },
  ],
  promosi: [
    {
      title: "Promosi Kampus ke Sekolah",
      tag: "Promosi",
      cover: "assets/images/proker/promosi-kampus-cover.jpg",
      summary:
        "Memperkenalkan Universitas Langlangbuana kepada siswa SMA/SMK di sekitar desa, salah satunya SMAN 1 Margaasih.",
      description:
        "Tim KKN berkunjung ke sekolah menengah di sekitar Desa Pameuntasan, salah satunya SMAN 1 Margaasih, untuk memperkenalkan Universitas Langlangbuana kepada siswa kelas akhir — mulai dari program studi, jalur pendaftaran, hingga sesi tanya jawab seputar dunia kuliah.",
      gallery: [
        { src: "assets/images/proker/promosi-kampus-proses-1.jpg", caption: "Sesi perkenalan kampus di SMAN 1 Margaasih" },
        { src: "assets/images/proker/promosi-kampus-proses-2.jpg", caption: "Tanya jawab seputar pendaftaran dan jurusan" },
        { src: "assets/images/proker/promosi-kampus-proses-3.jpg", caption: "Foto bersama siswa dan guru pendamping" },
      ],
    },
  ],
};

const prokerPhotoFallback = "assets/images/proker/foto-placeholder.jpg";

const toast = document.querySelector("[data-toast]");
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

document.querySelectorAll("[data-channel]").forEach((link) => {
  const channel = link.dataset.channel;
  const url = channelUrls[channel];

  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    return;
  }

  link.setAttribute("aria-disabled", "true");
  link.classList.add("is-pending");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`${channelNames[channel]} akan diaktifkan sebelum publikasi.`);
  });
});

const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation?.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

const header = document.querySelector("[data-header]");
const progress = document.querySelector(".scroll-progress span");

function updateScrollUi() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
  if (!progress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progress.style.width = `${Math.min(value, 100)}%`;
}

window.addEventListener("scroll", updateScrollUi, { passive: true });
updateScrollUi();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll("[data-reveal]");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        window.setTimeout(() => entry.target.classList.add("is-visible"), delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
}

const mapDialog = document.querySelector("[data-map-dialog]");
let lastMapTrigger;

document.querySelectorAll("[data-open-map]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!mapDialog) return;
    lastMapTrigger = button;
    mapDialog.hidden = false;
    mapDialog.classList.add("is-open");
    document.body.classList.add("dialog-open");
    mapDialog.querySelector("[data-close-map]")?.focus();
  });
});

function closeMapDialog() {
  mapDialog?.classList.remove("is-open");
  if (mapDialog) mapDialog.hidden = true;
  document.body.classList.remove("dialog-open");
  lastMapTrigger?.focus();
}

document.querySelector("[data-close-map]")?.addEventListener("click", closeMapDialog);
mapDialog?.addEventListener("click", (event) => {
  if (event.target === mapDialog) closeMapDialog();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mapDialog && !mapDialog.hidden) closeMapDialog();
});

const instagramIcon =
  '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/></svg>';
const teamPhotoFallback = "assets/images/team/foto-placeholder.jpg";

function renderTeamMembers(members) {
  return members
    .map((member) => {
      const igLink = member.instagram
        ? `<a class="ig-chip" href="https://instagram.com/${member.instagram}" target="_blank" rel="noopener">${instagramIcon}@${member.instagram}</a>`
        : "";
      const photoSrc = member.photo || teamPhotoFallback;
      return `
        <div class="team-member${member.lead ? " is-lead" : ""}">
          <span class="team-member-photo">
            <img src="${photoSrc}" alt="${member.photo ? member.name : ""}" loading="lazy" onerror="this.onerror=null;this.src='${teamPhotoFallback}';" />
          </span>
          <strong>${member.name}</strong>
          <span class="team-member-role">${member.role}</span>
          ${igLink}
        </div>`;
    })
    .join("");
}

/*
 * Isi kartu tiap divisi dengan foto & nama penanggung jawab (anggota pertama
 * pada array members di teamDivisions). Sisanya (anggota lain) tetap hanya
 * muncul lewat pop-up saat tombol "Lihat tim" diklik.
 */
function renderDivisionCards() {
  document.querySelectorAll("[data-division]").forEach((card) => {
    const key = card.dataset.division;
    const division = teamDivisions[key];
    if (!division || !division.members.length) return;

    const pj = division.members[0];
    const photoSrc = pj.photo || teamPhotoFallback;
    const igLink = pj.instagram
      ? `<a class="ig-chip" href="https://instagram.com/${pj.instagram}" target="_blank" rel="noopener">${instagramIcon}@${pj.instagram}</a>`
      : "";
    const copy = card.querySelector(".team-copy");
    if (!copy) return;

    copy.innerHTML = `
      <span class="team-photo">
        <img src="${photoSrc}" alt="${pj.photo ? pj.name : ""}" loading="lazy" onerror="this.onerror=null;this.src='${teamPhotoFallback}';" />
      </span>
      <strong>${pj.name}</strong>
      <small>${pj.role}</small>
      ${igLink}
      <span class="team-division-meta">${division.label} - ${division.members.length} orang</span>`;
  });
}

renderDivisionCards();

const teamDialog = document.querySelector("[data-team-dialog]");
const teamDialogPanel = document.querySelector(".team-dialog-panel");
const teamDialogTitle = document.querySelector("[data-team-dialog-title]");
const teamDialogCount = document.querySelector("[data-team-dialog-count]");
const teamDialogBody = document.querySelector("[data-team-dialog-body]");
let lastTeamTrigger;
let teamDialogHideTimer;

function openTeamDialog(key, trigger) {
  const division = teamDivisions[key];
  if (!teamDialog || !division) return;

  lastTeamTrigger = trigger;
  window.clearTimeout(teamDialogHideTimer);

  if (teamDialogTitle) teamDialogTitle.textContent = division.label;
  if (teamDialogCount) teamDialogCount.textContent = `${division.members.length} anggota`;
  if (teamDialogBody) {
    teamDialogBody.innerHTML = `<div class="team-member-grid">${renderTeamMembers(division.members)}</div>`;
  }
  if (teamDialogPanel) {
    teamDialogPanel.style.maxWidth = division.members.length <= 3 ? "520px" : "720px";
  }

  teamDialog.hidden = false;
  document.body.classList.add("dialog-open");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => teamDialog.classList.add("is-open"));
  });

  teamDialog.querySelector("[data-close-team]")?.focus();
}

function closeTeamDialog() {
  if (!teamDialog || teamDialog.hidden) return;
  teamDialog.classList.remove("is-open");
  document.body.classList.remove("dialog-open");
  window.clearTimeout(teamDialogHideTimer);
  teamDialogHideTimer = window.setTimeout(() => {
    teamDialog.hidden = true;
  }, 260);
  lastTeamTrigger?.focus();
}

document.querySelectorAll("[data-open-team]").forEach((button) => {
  button.addEventListener("click", () => openTeamDialog(button.dataset.openTeam, button));
});

document.querySelector("[data-close-team]")?.addEventListener("click", closeTeamDialog);
teamDialog?.addEventListener("click", (event) => {
  if (event.target === teamDialog) closeTeamDialog();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && teamDialog && !teamDialog.hidden) closeTeamDialog();
});

/*
 * ============================================================
 * RENDER & INTERAKSI MODUL PROKER
 * ============================================================
 */

const categoryTape = {
  unggulan: "tape-gold",
  partisipasi: "tape-green",
  promosi: "tape-blue",
};

function renderProkerPanels() {
  Object.keys(prokerData).forEach((categoryKey) => {
    const panel = document.querySelector(`[data-proker-panel="${categoryKey}"]`);
    if (!panel) return;

    const items = prokerData[categoryKey];
    panel.innerHTML = items
      .map((item, index) => {
        const hasGallery = Array.isArray(item.gallery) && item.gallery.length > 0;
        const buttonLabel = hasGallery ? "Lihat proses" : "Lihat cerita";
        const metaText = hasGallery ? `${item.gallery.length} foto proses` : "Dokumentasi";
        const isFeature = categoryKey === "unggulan" ? index === 0 : items.length === 1;
        const tapeClass = categoryTape[categoryKey] || "tape-gold";

        return `
          <article class="proker-card${isFeature ? " proker-card--feature" : ""}">
            <span class="proker-tape ${tapeClass}" aria-hidden="true"></span>
            <div class="proker-card-media">
              <img
                src="${item.cover}"
                alt="${item.title}"
                loading="lazy"
                onerror="this.onerror=null;this.src='${prokerPhotoFallback}';"
              />
            </div>
            <div class="proker-card-body">
              <small>${item.tag || ""}</small>
              <strong>${item.title}</strong>
              <p>${item.summary || ""}</p>
              <div class="proker-card-footer">
                <span class="proker-card-meta">${metaText}</span>
                <button type="button" class="proker-card-action" data-open-proker="${categoryKey}" data-proker-index="${index}">
                  ${buttonLabel}
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
          </article>`;
      })
      .join("");
  });
}

renderProkerPanels();

const prokerTabs = document.querySelectorAll("[data-proker-tab]");
const prokerPanels = document.querySelectorAll("[data-proker-panel]");

prokerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.prokerTab;

    prokerTabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle("is-active", isActive);
      t.setAttribute("aria-selected", String(isActive));
    });

    prokerPanels.forEach((panel) => {
      panel.hidden = panel.dataset.prokerPanel !== key;
    });
  });
});

const prokerDialog = document.querySelector("[data-proker-dialog]");
const prokerDialogTitle = document.querySelector("[data-proker-dialog-title]");
const prokerDialogKicker = document.querySelector("[data-proker-dialog-kicker]");
const prokerDialogImage = document.querySelector("[data-proker-dialog-image]");
const prokerDialogCaption = document.querySelector("[data-proker-dialog-caption]");
const prokerDialogDesc = document.querySelector("[data-proker-dialog-desc]");
const prokerDialogCount = document.querySelector("[data-proker-dialog-count]");
const prokerDialogStrip = document.querySelector("[data-proker-dialog-strip]");
const prokerPrevButton = document.querySelector("[data-proker-prev]");
const prokerNextButton = document.querySelector("[data-proker-next]");

let activeProkerItem = null;
let activeProkerPhoto = 0;
let lastProkerTrigger;
let prokerDialogHideTimer;

function renderProkerStrip() {
  if (!prokerDialogStrip || !activeProkerItem) return;
  const gallery = activeProkerItem.gallery || [];

  if (gallery.length < 2) {
    prokerDialogStrip.hidden = true;
    prokerDialogStrip.innerHTML = "";
    return;
  }

  prokerDialogStrip.hidden = false;
  prokerDialogStrip.innerHTML = gallery
    .map(
      (photo, i) => `
        <button type="button" class="proker-thumb${i === activeProkerPhoto ? " is-active" : ""}" data-proker-thumb="${i}" aria-label="Lihat foto ${i + 1}">
          <img src="${photo.src}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${prokerPhotoFallback}';" />
        </button>`
    )
    .join("");
}

function updateProkerDialogPhoto() {
  if (!activeProkerItem) return;
  const gallery = activeProkerItem.gallery || [];
  const hasGallery = gallery.length > 0;

  if (hasGallery) {
    const photo = gallery[activeProkerPhoto];
    if (prokerDialogImage) {
      prokerDialogImage.src = photo.src;
      prokerDialogImage.alt = photo.caption || activeProkerItem.title;
      prokerDialogImage.onerror = function () {
        this.onerror = null;
        this.src = prokerPhotoFallback;
      };
    }
    if (prokerDialogCaption) prokerDialogCaption.textContent = photo.caption || "";
    if (prokerDialogCount) prokerDialogCount.textContent = `Foto ${activeProkerPhoto + 1} / ${gallery.length}`;
  } else if (prokerDialogImage) {
    prokerDialogImage.src = activeProkerItem.cover;
    prokerDialogImage.alt = activeProkerItem.title;
    if (prokerDialogCaption) prokerDialogCaption.textContent = "";
    if (prokerDialogCount) prokerDialogCount.textContent = "";
  }

  const showNav = hasGallery && gallery.length > 1;
  prokerPrevButton?.toggleAttribute("hidden", !showNav);
  prokerNextButton?.toggleAttribute("hidden", !showNav);

  renderProkerStrip();
}

function openProkerDialog(categoryKey, index, trigger) {
  const item = prokerData[categoryKey]?.[index];
  if (!prokerDialog || !item) return;

  activeProkerItem = item;
  activeProkerPhoto = 0;
  lastProkerTrigger = trigger;
  window.clearTimeout(prokerDialogHideTimer);

  if (prokerDialogKicker) prokerDialogKicker.textContent = `Proses & cerita — ${item.tag || ""}`;
  if (prokerDialogTitle) prokerDialogTitle.textContent = item.title;
  if (prokerDialogDesc) prokerDialogDesc.textContent = item.description || item.summary || "";

  updateProkerDialogPhoto();

  prokerDialog.hidden = false;
  document.body.classList.add("dialog-open");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => prokerDialog.classList.add("is-open"));
  });

  prokerDialog.querySelector("[data-close-proker]")?.focus();
}

function closeProkerDialog() {
  if (!prokerDialog || prokerDialog.hidden) return;
  prokerDialog.classList.remove("is-open");
  document.body.classList.remove("dialog-open");
  window.clearTimeout(prokerDialogHideTimer);
  prokerDialogHideTimer = window.setTimeout(() => {
    prokerDialog.hidden = true;
    activeProkerItem = null;
  }, 260);
  lastProkerTrigger?.focus();
}

function stepProkerPhoto(direction) {
  if (!activeProkerItem) return;
  const gallery = activeProkerItem.gallery || [];
  if (gallery.length < 2) return;
  activeProkerPhoto = (activeProkerPhoto + direction + gallery.length) % gallery.length;
  updateProkerDialogPhoto();
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-proker]");
  if (!trigger) return;
  openProkerDialog(trigger.dataset.openProker, Number(trigger.dataset.prokerIndex), trigger);
});

document.querySelector("[data-close-proker]")?.addEventListener("click", closeProkerDialog);
prokerDialog?.addEventListener("click", (event) => {
  if (event.target === prokerDialog) closeProkerDialog();
});
prokerPrevButton?.addEventListener("click", () => stepProkerPhoto(-1));
prokerNextButton?.addEventListener("click", () => stepProkerPhoto(1));

prokerDialogStrip?.addEventListener("click", (event) => {
  const thumb = event.target.closest("[data-proker-thumb]");
  if (!thumb || !activeProkerItem) return;
  activeProkerPhoto = Number(thumb.dataset.prokerThumb);
  updateProkerDialogPhoto();
});

document.addEventListener("keydown", (event) => {
  if (!prokerDialog || prokerDialog.hidden) return;
  if (event.key === "Escape") closeProkerDialog();
  if (event.key === "ArrowLeft") stepProkerPhoto(-1);
  if (event.key === "ArrowRight") stepProkerPhoto(1);
});

async function sharePortal() {
  const shareData = {
    title: "KKN Desa Pameuntasan",
    text: "Lihat Peta Administrasi RW dan Fasilitas Publik Desa Pameuntasan.",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    showToast("Tautan portal berhasil disalin.");
  } catch (error) {
    if (error?.name !== "AbortError") showToast("Tautan belum dapat dibagikan. Coba salin dari browser.");
  }
}

document.querySelector("[data-share]")?.addEventListener("click", sharePortal);
document.querySelector("[data-copy-link]")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Tautan portal berhasil disalin.");
  } catch {
    showToast("Silakan salin tautan dari kolom alamat browser.");
  }
});
