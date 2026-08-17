document.documentElement.classList.add("js");

/*
 * PENGATURAN TAUTAN – cukup ubah bagian ini sebelum website dipublikasikan.
 * Nomor WhatsApp memakai format internasional tanpa tanda +, contoh: 6281234567890.
 */
const SITE_CONFIG = {
  whatsappNumber: "",
  instagramUrl: "https://www.instagram.com/desa_pameuntasan/",
  tiktokUrl: "https://www.tiktok.com/@kknm.unla.pameuntasan",
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
  whatsapp: "Nomor WhatsApp Admin KKN",
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
      { name: "arlinggawrdhni", role: "Sekretaris 1", instagram: "arlinggawrdhni", photo: "assets/images/team/arlinggawrdhni.jpg" },
      { name: "Nama Sekretaris 2", role: "Sekretaris 2", instagram: "username" },
    ],
  },
  bendahara: {
    label: "Bendahara",
    members: [
      { name: "Frida Faozan", role: "Bendahara 1", instagram: "fridafazn", photo: "assets/images/team/frida-faozan.jpg" },
      { name: "Nama Bendahara 2", role: "Bendahara 2", instagram: "username" },
    ],
  },
  acara: {
    label: "Acara",
    members: [
      { name: "juan_grld", role: "Ketua Divisi Acara", instagram: "juan_grld", photo: "assets/images/team/juan-grld.jpg", lead: true },
      { name: "Raisya Rahmawati", role: "Anggota Acara", instagram: "raisyarhma", photo: "assets/images/team/raisya-rahmawati.webp" },
      { name: "M.Rajeb", role: "Anggota Acara", instagram: "ihvcrushh.u", photo: "assets/images/team/m-rajeb.webp" },
      { name: "Nama Anggota 3", role: "Anggota Acara", instagram: "username" },
      { name: "Nama Anggota 4", role: "Anggota Acara", instagram: "username" },
      { name: "Nama Anggota 5", role: "Anggota Acara", instagram: "username" },
      { name: "Nama Anggota 6", role: "Anggota Acara", instagram: "username" },
    ],
  },
  konsumsi: {
    label: "Konsumsi",
    members: [
      { name: "dedeniqbal18", role: "Ketua Divisi Konsumsi", instagram: "dedeniqbal18", photo: "assets/images/team/dedeniqbal18.jpg", lead: true },
      { name: "Nama Anggota 1", role: "Anggota Konsumsi", instagram: "username" },
      { name: "Nama Anggota 2", role: "Anggota Konsumsi", instagram: "username" },
      { name: "Nama Anggota 3", role: "Anggota Konsumsi", instagram: "username" },
      { name: "Nama Anggota 4", role: "Anggota Konsumsi", instagram: "username" },
    ],
  },
  humas: {
    label: "Humas",
    members: [
      { name: "pputrawjy", role: "Ketua Divisi Humas", instagram: "pputrawjy", photo: "assets/images/team/pputrawjy.jpg", lead: true },
      { name: "Nevi Nadia", role: "Anggota Humas", instagram: "Nevinadpras", photo: "assets/images/team/nevi-nadia.jpg", lead: true },
      { name: "Nama Anggota 2", role: "Anggota Humas", instagram: "username" },
      { name: "Nama Anggota 3", role: "Anggota Humas", instagram: "username" },
      { name: "Nama Anggota 4", role: "Anggota Humas", instagram: "username" },
      { name: "Nama Anggota 5", role: "Anggota Humas", instagram: "username" },
    ],
  },
  logistik: {
    label: "Logistik",
    members: [
      { name: "zaa.frhan_", role: "Ketua Divisi Logistik", instagram: "zaa.frhan_", photo: "assets/images/team/zaa-frhan.jpg", lead: true },
      { name: "Nama Anggota 1", role: "Anggota Logistik", instagram: "username" },
      { name: "Nama Anggota 2", role: "Anggota Logistik", instagram: "username" },
      { name: "Nama Anggota 3", role: "Anggota Logistik", instagram: "username" },
      { name: "Nama Anggota 4", role: "Anggota Logistik", instagram: "username" },
    ],
  },
  pdd: {
    label: "PDD",
    members: [
      { name: "Nama Ketua Divisi", role: "Ketua Divisi PDD", instagram: "username", lead: true },
      { name: "Nama Anggota 1", role: "Anggota PDD", instagram: "username" },
      { name: "Nama Anggota 2", role: "Anggota PDD", instagram: "username" },
      { name: "Nama Anggota 3", role: "Anggota PDD", instagram: "username" },
      { name: "Nama Anggota 4", role: "Anggota PDD", instagram: "username" },
      { name: "Nama Anggota 5", role: "Anggota PDD", instagram: "username" },
    ],
  },
};

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
