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
  { label: 'Sertifikasi', value: 3, suffix: '+', prefix: '' },
  { label: 'Jam Bootcamp', value: 250, suffix: '+', prefix: '' },
  { label: 'Proyek Selesai', value: 4, suffix: '', prefix: '' },
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
    ],
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
    description: `Fresh graduate S1 Sains Data dengan IPK 3.61 yang dibekali keahlian dalam analisis data operasional, pemodelan statistik, dan machine learning. Menyelesaikan tugas akhir berjudul \"Klasifikasi Prediktif Efisiensi Waktu Operasi Menggunakan Algoritma Random Forest dan Decision Tree\". Memiliki pengalaman magang di Departemen SI&OP serta aktif memimpin organisasi kemahasiswaan dan mempublikasikan riset ilmiah di jurnal nasional.`,
  },
  {
    degree: 'SMA (IPA)',
    institution: 'SMAN 1 Jatinangor',
    location: 'Kab. Sumedang, Jawa Barat, Indonesia',
    period: '2019 – 2022',
    status: 'Lulus',
    icon: '🏫',
    description: 'Pendidikan Menengah Atas dengan peminatan Ilmu Pengetahuan Alam (IPA).',
  },
  {
    degree: 'SMP',
    institution: 'SMPN 3 Jatinangor',
    location: 'Kab. Sumedang, Jawa Barat, Indonesia',
    period: '2016 – 2019',
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
    title: 'English Language Test (ELT) - 517',
    issuer: 'Pusat Bahasa Fakultas Ilmu Budaya UNPAD',
    period: 'Agustus 2026 (berlaku s.d. Agustus 2028)',
    topics: ['Listening Comprehension', 'Structure & Written Expression', 'Reading Comprehension'],
    badge: '🌐',
    color: 'amber',
  },
]

export const ORGANIZATIONS = [
  {
    role: 'Ketua Umum Himpunan Mahasiswa Sains Data',
    org: 'Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat',
    period: '2023 – 2025',
    icon: '👥',
    events: [
      'Memimpin dan mengoordinasikan berbagai program kerja serta kepanitiaan untuk mendukung kegiatan akademik dan non-akademik mahasiswa.',
    ],
  },
  {
    role: 'Anggota Divisi Perlengkapan, Komisi Pemilu Raya (KPR)',
    org: 'Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat',
    period: '2023 – 2024',
    icon: '🗳️',
  },
  {
    role: 'Anggota Divisi Kepelatihan, Ikopin Badminton Club',
    org: 'Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat',
    period: '2023 – 2024',
    icon: '🏸',
  },
  {
    role: 'Staff Magang Kementerian Dalam Negeri',
    org: 'BEM Jatinangor, Universitas Koperasi Indonesia',
    location: 'Kab. Sumedang, Jawa Barat',
    period: '2022',
    icon: '🏛️',
  },
]

export const PROFESSIONAL_EXPERIENCE = [
  {
    role: 'Intern - Departemen SI&OP',
    company: 'PT UTC Aerospace Systems Bandung Operations (Safran Electronics & Defense)',
    type: 'Magang',
    period: '5 Februari 2026 – 27 Februari 2026',
    location: 'Kota Bandung, Jawa Barat',
    icon: '💼',
    points: [
      'Mengolah dan membersihkan data produksi (266.752 baris, 37 kolom) dengan Microsoft Excel, lalu menghitung variansi antara Actual dan Standard Hours per Work Center, Part Number, dan Cell menggunakan PivotTable dan Calculated Field.',
      'Menerapkan Pareto Analysis (batas kumulatif 85%) untuk menunjukkan bahwa variansi terkonsentrasi pada sebagian kecil Work Center, dengan variansi tertinggi 318,35 jam (sekitar 8,9% dari total) sebagai prioritas evaluasi bottleneck.',
      'Menganalisis pengaruh routing dan order terhadap variansi serta menyusun visualisasi dan laporan.',
    ],
  },
  {
    role: 'Asisten Laboratorium',
    company: 'Universitas Koperasi Indonesia',
    type: 'Asisten',
    location: 'Kab. Sumedang, Jawa Barat',
    period: 'September 2024 – Agustus 2025',
    icon: '💻',
    points: [
      'Membantu dosen dalam praktikum Komputer dan Software I serta membimbing sekitar 9 mahasiswa dalam menggunakan Microsoft Word, Excel, Access, dan Mendeley, mulai dari menyusun laporan di Word, menghitung data di Excel, hingga membuat daftar pustaka di Mendeley.',
      'Memeriksa dan menilai tugas praktikum serta membantu mengelola fasilitas laboratorium komputer selama periode akademik.',
    ],
  },
  {
    role: 'Korps Protokoler Mahasiswa (KPM)',
    company: 'Universitas Koperasi Indonesia',
    type: 'Protokoler',
    location: 'Kab. Sumedang, Jawa Barat',
    period: 'September 2022 – Oktober 2024',
    icon: '👔',
    points: [
      'Bertugas sebagai pembawa bendera program studi pada acara wisuda dan menjadi bagian dari tim protokoler upacara resmi kampus.',
      'Mengatur dan mendampingi mahasiswa, tamu undangan, serta keluarga wisudawan pada berbagai acara kampus seperti wisuda dan seminar, termasuk pengaturan tempat duduk.',
      'Berkoordinasi dengan panitia untuk memastikan rangkaian acara berjalan tertib dan sesuai jadwal.',
    ],
  },
]

export const PROJECTS = [
  {
    title: 'Analisis Efektivitas Edukasi Digital dalam Meningkatkan Kesadaran Jejak Digital (Uji McNemar)',
    description: `Riset tindakan pada siswa SMPN 3 Pamulihan untuk mengukur peningkatan kesadaran jejak digital sebelum dan sesudah intervensi edukasi menggunakan metode statistik non-parametrik Uji McNemar`,
    tech: ['Python', 'Pandas', 'SciPy', 'Uji McNemar', 'Google Colab'],
    icon: '👥',
    status: 'Selesai',
    link: 'https://journal2.ikopin.ac.id/index.php/dataenthusiast/article/view/14',
  },
  {
    title: 'Analisis Regresi Linear Berganda Hubungan Pekerjaan & Kualitas Tidur Terhadap Kesehatan',
    description: `Studi pemodelan statistik kuantitatif untuk mengidentifikasi variabel hubungan antara beban kerja, durasi, serta kualitas tidur terhadap tingkat kesehatan tubuh.`,
    tech: ['Python', 'Statsmodels', 'Scikit-Learn', 'Matplotlib', 'Microsoft Excel'],
    icon: '⚙️',
    status: 'Selesai',
    link: 'https://journal2.ikopin.ac.id/index.php/dataenthusiast/article/view/8',
  },
  {
    title: 'Manufacturing Performance Dashboard (Power BI)',
    description: `Dashboard interaktif untuk memantau performa manufaktur berdasarkan jenis produk, negara, lokasi gudang, dan waktu. Menampilkan biaya produksi, volume produksi, tren bulanan, serta efisiensi biaya per unit, lengkap dengan filter tahun, jenis produk, dan negara.`,
    tech: ['Power BI', 'DAX', 'Power Query', 'Data Visualization'],
    icon: '📊',
    status: 'Selesai',
    link: 'https://github.com/SagaraAndiLS/manufacturing-performance-dashboard',
  },
  {
    title: 'Strategic Manufacturing Dashboard untuk Analisis Kinerja Produksi dan Kualitas Produk',
    description: `Tugas praktikum Kecerdasan Bisnis yang mengolah data produksi dan data kecacatan produk menjadi dashboard strategis. Mencakup proses ETL dan cleaning, data modeling, serta KPI seperti total produksi, total biaya, dan rata-rata defect rate untuk melihat hubungan volume produksi dengan kualitas.`,
    tech: ['Power BI', 'DAX', 'Power Query', 'ETL', 'Data Modeling'],
    icon: '🏭',
    status: 'Selesai',
    link: 'https://github.com/SagaraAndiLS/manufacturing-dashboard-powerbi',
  },
]
