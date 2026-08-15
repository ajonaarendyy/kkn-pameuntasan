document.documentElement.classList.add("js");

/*
 * PENGATURAN TAUTAN — cukup ubah bagian ini sebelum website dipublikasikan.
 * Nomor WhatsApp memakai format internasional tanpa tanda +, contoh: 6281234567890.
 */
const SITE_CONFIG = {
  whatsappNumber: "",
  instagramUrl: "",
  tiktokUrl: "",
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
