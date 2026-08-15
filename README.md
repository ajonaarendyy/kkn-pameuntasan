# Portal KKN Desa Pameuntasan

Website statis ini disiapkan untuk GitHub Pages dan menjadi tujuan QR pada peta
program unggulan KKN Universitas Langlangbuana 2026.

## Tiga tautan yang perlu diisi

Buka `assets/site.js`, lalu isi bagian `SITE_CONFIG` paling atas:

- `whatsappNumber`: nomor WA Admin KKN dengan format `628...` tanpa tanda `+`.
- `instagramUrl`: tautan lengkap Instagram kelompok.
- `tiktokUrl`: tautan lengkap TikTok kelompok.

Jika belum diisi, tombol tetap tampil tetapi tidak mengarah ke nomor atau akun
yang salah. Tombol akan otomatis aktif setelah nilainya diisi.

## Publikasi melalui GitHub tanpa VS Code

1. Masuk ke akun GitHub `ajona2`.
2. Buat repository publik bernama `kkn-pameuntasan`.
3. Ekstrak ZIP website, lalu unggah seluruh isi foldernya. Pastikan `index.html`
   berada di bagian paling atas repository.
4. Buka **Settings → Pages**.
5. Pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu Save.
6. Setelah proses selesai, alamatnya menjadi:
   `https://ajona2.github.io/kkn-pameuntasan/`

## Isi paket

- `index.html`: halaman utama.
- `assets/site.css`: seluruh desain responsif.
- `assets/site.js`: interaksi dan pengaturan tautan.
- `assets/images/`: logo, pratinjau peta, dan foto fasilitas yang telah
  dioptimalkan untuk web.
- `assets/docs/peta-pameuntasan-a0-web.pdf`: PDF A0 resolusi 180 dpi yang telah
  dioptimalkan tanpa menurunkan dimensi gambar.

Arsip PDF cetak asli berukuran besar tetap disimpan terpisah sebagai master.
