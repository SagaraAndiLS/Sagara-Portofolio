// ─── Data Portfolio Sagara Andi Ladzuardi Suwarsa ──────────────────────────

export const PERSONAL = {
  name: 'Sagara Andi Ladzuardi Suwarsa',
  title: 'Data Analyst',
  tagline: 'Mengubah data menjadi keputusan bisnis yang bermakna',
  location: 'Sumedang, Jawa Barat, Indonesia',
  email: 'asagara830@gmail.com',
  phone: '+6289604182218',
  linkedin: 'https://www.linkedin.com/in/sagaraandiladzuardi',
  github: 'https://github.com/SagaraAndiLS',
  bio: `Lulusan program studi sarjana S1 sains data di Universitas Koperasi Indonesia (IKOPIN) 
        dengan IPK 3.61. Mampu problem solving yang baik dan bekerja secara 
        mandiri maupun dalam tim, berminat berkontribusi dalam proyek-proyek yang menantang.`,
}
export const GMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL.email}&su=${encodeURIComponent('Halo Sagara, saya tertarik berdiskusi')}`

export const STATS = [
  { label: 'IPK', value: 3.61, suffix: '', prefix: '', decimals: 2 },
  { label: 'Sertifikasi', value: 10, suffix: '+', prefix: '' },
  { label: 'Jam Bootcamp', value: 150, suffix: '+', prefix: '' },
  { label: 'Proyek Selesai', value: 5, suffix: '+', prefix: '' },
]

export const SKILLS = [
  {
   category: 'Data & Database',
    icon: '🗄️',
    color: 'teal',
    items: [
      { name: 'Microsoft Excel (Expert)', level: 97 },
      { name: 'Power BI', level: 85 },
      { name: 'Python', level: 88 },
      { name: 'Data Processing & Cleansing', level: 90 },
    ],
  },
  {
    category: 'Analisis & Pemodelan',
    icon: '📊',
    color: 'amber',
    items: [
      { name: 'Analisis Variansi (Favorable/Unfavorable)', level: 92 },
      { name: 'Identifikasi Bottleneck Produksi', level: 90 },
      { name: 'Uji McNemar (Nonparametrik)', level: 85 },
      { name: 'Regresi Linear Berganda', level: 88 },
    ],
  },
  {
    category: 'Visualisasi & Tools',
    icon: '⚙️',
    color: 'teal',
    items: [
      { name: 'SAP Analytics Cloud', level: 82 },
      { name: 'Mendeley Desktop', level: 90 },
      { name: 'Microsoft Office Suite', level: 95 },
      { name: 'Google Colaboratory', level: 85 },
    ],
  },
  {
    category: 'Soft Skills',
    icon: '🧠',
    color: 'amber',
    items: [
      { name: 'Kepemimpinan & Organisasi', level: 90 },
      { name: 'Komunikasi & Adaptabilitas', level: 92 },
      { name: 'Manajemen Keprotokolan', level: 88 },
      { name: 'Problem Solving', level: 88 },
    ]
  },
]

export const EDUCATION = [
  {
    degree: 'S1 Sains Data',
    institution: 'Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat, Indonesia',
    period: '2022 – 2026',
    gpa: '3.61',
    status: 'Lulus',
    icon: '🎓',
    description: `Fresh graduate S1 Sains Data dengan IPK 3.61 yang dibekali keahlian dalam analisis data operasional, pemodelan statistik, dan machine learning. Menyelesaikan tugas akhir berjudul "Klasifikasi Prediktif Efisiensi Waktu Operasi Menggunakan Algoritma Random Forest dan Decision Tree". Memiliki pengalaman magang di Departemen SI&OP serta aktif memimpin organisasi kemahasiswaan dan mempublikasikan riset ilmiah di jurnal nasional.`,
  },
  {
    degree: 'SMA (IPA)',
    institution: 'SMAN 1 Jatinangor',
    location: 'Kab. Sumedang, Jawa Barat, Indonesia',
    period: '2019 – 2022',
    gpa: '-',
    status: 'Lulus',
    icon: '🏫',
    description: 'Pendidikan Menengah Atas dengan peminatan Ilmu Pengetahuan Alam (IPA).',
  },
  {
    degree: 'SMP',
    institution: 'SMPN 3 Jatinangor',
    location: 'Kab. Sumedang, Jawa Barat, Indonesia',
    period: '2016 – 2019',
    gpa: '-',
    status: 'Lulus',
    icon: '🏫',
    description: 'Pendidikan Menengah Pertama.',
    
  },
  
]

export const CERTIFICATIONS = [
  {
    title: 'Teknologi Informasi Dan Komunikasi - Microsoft Excel',
    issuer: 'Karirnex',
    period: 'April 2024 – Mei 2024',
    topics: ['Microsoft Excel', 'Data Processing', 'Spreadsheet Analysis', 'Advanced Excel'],
    badge: '📊',
    color: 'teal',
    highlight: true,
  },
  {
    title: 'Teknologi Informasi Dan Komunikasi - ASEAN Data Science Explorers: Enablement Session',
    issuer: 'ASEAN Foundation & SAP Southeast Asia',
    period: 'Mei 2023',
    topics: ['SAP Analytics Cloud Training', 'Business Analytics', 'Data Visualization'],
    badge: '☁️',
    color: 'amber',
    highlight: true,
  },
  {
    title: 'TOEFL ITP (520)',
    issuer: 'Pusat Bahasa UNPAD',
    period: 'Juli 2026 – Juli 2026',
    topics: ['TOEFL ITP', 'Grammar', 'Reading', 'Listening', 'Speaking', 'Writing'],
    badge: '🌐',
    color: 'amber',
  },
]

export const ORGANIZATIONS = [
  {
   role: 'Himpunan Mahasiswa Sains Data',
    org: 'Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat',
    period: '2022 – 2024',
    icon: '👥',
    events: [
      'Aktif dalam struktur organisasi kemahasiswaan program studi Sains Data.',
      'Memimpin dan mengoordinasikan berbagai program kerja serta kepanitiaan untuk mendukung kegiatan akademik dan non-akademik mahasiswa.',
    ],
  },
  {
    role: 'Korps Protokoler Mahasiswa',
    org: 'Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat',
    period: 'September 2022 – Oktober 2024',
    icon: '👔',
    events: [
      'Berpartisipasi dalam kegiatan keprotokolan kampus.',
      'Membantu manajemen tata tempat, tamu undangan, dan acara untuk mendukung kelancaran berbagai seremonial resmi tingkat universitas.',
    ],
  },
  {
    role: 'Asisten Laboratorium Komputer',
    org: 'Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat',
    period: 'September 2024 – Agustus 2025',
    icon: '💻',
    events: [
      'Membantu Dosen dalam penyelenggaraan kegiatan praktikum mata kuliah Komputer dan Software I bagi mahasiswa.',
      'Membimbing, mengarahkan, dan membantu mahasiswa dalam memahami materi Microsoft Office beserta Mendeley.',
      'Melakukan evaluasi, pengecekan tugas praktikum, dan membantu mengelola fasilitas laboratorium komputer selama periode akademik.',
    ]
  }
]
export const PROFESSIONAL_EXPERIENCE = [
{
  role: 'Intern - Departemen SI&OP',
    company: 'PT UTC Aerospace System Bandung Operations (Safran Electronics & Defense)',
    type: 'Magang',
    period: 'Februari 2026 – Februari 2026',
    location: 'Kota Bandung, Jawa Barat',
    icon: '💼',
    points: [
      'Memproses dan mengelola data operasional produksi menggunakan Microsoft Excel.',
      'Melakukan perhitungan dan menganalisis variansi untuk menentukan status favorable dan unfavorable pada proses produksi.',
      'Mengidentifikasi potensi terjadinya hambatan produksi (bottleneck) untuk mendukung evaluasi efisiensi waktu operasional perusahaan.',
   ],
  },
]

export const PROJECTS = [
  {
    title: 'Dashboard Kependudukan RT 04 Sawangan Depok',
    description: `Visualisasi demografi kependudukan tingkat RT 
    mencakup distribusi tingkat pendidikan, struktur demografi (usia & gender), 
    komposisi profesi, dan sebaran agama untuk optimalisasi pemetaan serta pelayanan publik lokal.`,
    tech: ['Looker Studio', 'Data Visualization', 'Data Analytics'],
    icon: '👥',
    status: 'Selesai',
    link: 'gdrive',
  },
  {
    title: 'HR Analytics Dashboard',
    description: `Dashboard analitik SDM interaktif untuk memetakan metrik attrition karyawan (16.3%), 
    analisis turnover berdasarkan pengalaman kerja, kelompok usia, tingkat gaji (Salary Slab), 
    serta kepuasan tiap peran jabatan (Job Role & Satisfaction).`,
    tech: ['Power BI', 'HR Analytics', 'Business Intelligence', 'Data analysis'],
    icon: '📊',
    status: 'Selesai',
    link: 'gdrive',
  },
  {
    title: 'Dashboard Global Superstore (MSIB RevoU)',
    description: `Analisis performa bisnis ritel global yang mengidentifikasi kendala profitabilitas kategori Furniture, 
    evaluasi pola kerugian (minus profit) pada sub-kategori Tables & Bookcases, 
    efisiensi biaya pengiriman per wilayah, serta rasio metode pengiriman.`,
    tech: ['Power BI','Kaggle', 'Business Analytics', 'Data Visualization', 'SQL','Google Colab'],
    icon: '🛒',
    status: 'Selesai',
    link: 'gdrive',
  },
  {
    title: 'Dashboard Proyek Business Intelligence',
    description: `Pengembangan dashboard Business Intelligence multi-dimensi yang mengintegrasikan metrik kinerja operasional, 
    analisis segmentasi pelanggan (Customer Value & Segment), serta pemantauan biaya logistik untuk mendukung pengambilan keputusan strategis.`,
    tech: ['Power BI','Dax', 'BigQuery', 'SQL', 'Data Analytics','Data Visualization'],
    icon: '⚙️',
    status: 'Selesai',
    link: 'gdrive',
  },
]
