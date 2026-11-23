# Portofolio Sagara Andi Ladzuardi Suwarsa

Website portofolio pribadi sebagai Data Analyst, berisi profil, keahlian, pendidikan, sertifikasi, proyek, dan pengalaman.

🔗 **Live:** https://sagaraandils.github.io/Sagara-Portofolio/

## Tentang

Saya lulusan S1 Sains Data Universitas Koperasi Indonesia (IPK 3.61) yang berfokus pada analisis data operasional, visualisasi dashboard, dan pemodelan statistik. Website ini menjadi tempat merangkum latar belakang, proyek, dan cara menghubungi saya.

## Fitur

- Satu halaman dengan navigasi antar bagian: Beranda, Tentang, Keahlian, Pendidikan, Sertifikasi, Proyek, Pengalaman, Kontak
- Tampilan gelap dengan animasi (Framer Motion dan AOS)
- Responsif untuk desktop dan ponsel
- Unduh CV
- Form kontak (Formspree)
- Buku tamu dan komentar dengan pembaruan realtime (Supabase)

## Teknologi

| Bagian | Teknologi |
|---|---|
| Framework | React 18, Vite |
| Styling | Tailwind CSS |
| Animasi | Framer Motion, AOS |
| Ikon | Lucide React |
| Backend komentar | Supabase |
| Form kontak | Formspree |
| Deploy | GitHub Pages + GitHub Actions |

## Struktur Proyek

```
├── public/                  # Foto, CV, favicon
├── src/
│   ├── components/          # Komponen tiap bagian halaman
│   ├── data/portfolio.js    # Semua isi konten (edit di sini)
│   ├── lib/supabase.js      # Koneksi dan layanan komentar
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/workflows/       # Deploy otomatis ke GitHub Pages
└── tailwind.config.js
```

Untuk mengubah isi konten (data diri, proyek, sertifikasi, pengalaman), cukup edit `src/data/portfolio.js`.

## Menjalankan di Lokal

```bash
git clone https://github.com/SagaraAndiLS/Sagara-Portofolio.git
cd Sagara-Portofolio
npm install
cp .env.example .env    # lalu isi nilainya
npm run dev
```

## Environment Variable

| Variabel | Keterangan |
|---|---|
| `VITE_SUPABASE_URL` | URL project Supabase |
| `VITE_SUPABASE_ANON_KEY` | Anon key Supabase |
| `VITE_FORMSPREE_ID` | ID form dari formspree.io (bagian setelah `/f/`) |

Website tetap bisa dibuka tanpa variabel ini, tetapi form kontak dan komentar tidak akan berfungsi.

## Deploy

Deploy berjalan otomatis lewat GitHub Actions setiap ada push ke branch `main`.

1. Settings → Pages → Source: **GitHub Actions**
2. Settings → Secrets and variables → Actions, tambahkan tiga secret di atas
3. Push ke `main`

## Setup Supabase

Script SQL untuk membuat tabel komentar ada di bagian komentar bawah file `src/lib/supabase.js`.

## Kontak

- Email: asagara830@gmail.com
- LinkedIn: https://www.linkedin.com/in/sagaraandiladzuardi
- GitHub: https://github.com/SagaraAndiLS
