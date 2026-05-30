export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: string;
  price: string;
  priceValue: number;
  features: string[];
  image: string;
  description: string;
}

export interface RouteInfo {
  id: string;
  origin: string;
  destination: string;
  price: string;
  priceValue: number;
  schedule: string[];
  travelTime: string;
  highlights: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BranchLocation {
  city: string;
  address: string;
  phone: string;
  mapEmbedUrl?: string;
  gmapsLink: string;
}

export const BUSINESS_PROFILE = {
  name: "Asoka Trans Madiun",
  tagline: "Jasa Rental Mobil & Travel Madiun Professional & Terpercaya",
  phone: "+682234934384",
  phoneDisplay: "0822 3493 4384",
  whatsappNumber: "6282234934384",
  email: "info@asokatrans.com",
  address: "Jl. Pucang Sari No.15, Manisrejo, Kec. Taman, Kota Madiun, Jawa Timur 63138",
  gmapsLink: "https://maps.app.goo.gl/tACheJpyozXkuWBu6",
  websiteUrl: "https://asokatrans.com",
  logo: "/logo.png",
  founded: "2018",
  socials: {
    facebook: "https://facebook.com/asokatransmadiun",
    instagram: "https://instagram.com/asokatransmadiun",
  }
};

export const CITIES_SERVED = [
  "Madiun",
  "Magetan",
  "Ponorogo",
  "Ngawi",
  "Caruban",
  "Solo",
  "Surabaya",
  "Malang",
  "Jogja",
  "Kediri",
  "Semarang"
];

export const FLEET_DATA: Vehicle[] = [
  {
    id: "avanza",
    name: "Toyota Avanza",
    type: "MPV",
    capacity: "6 Penumpang",
    price: "Rp 350.000",
    priceValue: 350000,
    features: ["AC Double Blower", "Audio System", "Driver Berpengalaman", "BBM Ekonomis"],
    image: "/images/avanza.png", // placeholder premium transport image
    description: "Mobil keluarga sejuta umat yang sangat handal untuk keperluan dalam kota maupun luar kota. Irit, nyaman, dan lincah."
  },
  {
    id: "innova-reborn",
    name: "Toyota Innova Reborn",
    type: "Premium MPV",
    capacity: "7 Penumpang",
    price: "Rp 650.000",
    priceValue: 650000,
    features: ["Suspensi Sangat Nyaman", "AC Dingin & Bersih", "Kabin Luas", "Driver & BBM"],
    image: "/images/reborn.png",
    description: "Pilihan utama bagi Anda yang menginginkan kenyamanan ekstra selama perjalanan bisnis, dinas, maupun keluarga."
  },
  {
    id: "innova-zenix",
    name: "Toyota Innova Zenix",
    type: "Luxury MPV Hybrid",
    capacity: "7 Penumpang",
    price: "Rp 900.000",
    priceValue: 900000,
    features: ["Model Terbaru & Mewah", "Panoramic Sunroof (opsional)", "Kabin Hening", "Layanan VIP"],
    image: "/images/zenix.png",
    description: "Generasi terbaru Innova dengan teknologi hybrid, kabin super mewah, dan kenyamanan kelas atas untuk perjalanan premium Anda."
  },
  {
    id: "hiace-commuter",
    name: "Toyota Hiace Commuter",
    type: "Microbus",
    capacity: "14 Penumpang",
    price: "Rp 1.100.000",
    priceValue: 1100000,
    features: ["Kapasitas Besar", "AC Per Kepala", "Reclining Seats", "Sangat Stabil"],
    image: "/images/commuter.png",
    description: "Kendaraan rombongan paling populer di Indonesia. Nyaman bagaikan sedan dengan kapasitas penumpang yang banyak."
  },
  {
    id: "hiace-premio",
    name: "Toyota Hiace Premio",
    type: "Luxury Microbus",
    capacity: "11 Penumpang",
    price: "Rp 1.300.000",
    priceValue: 1300000,
    features: ["Interior Captain Seat", "Desain Eksterior Modern", "Mesin Lebih Senyap", "Kenyamanan Premium"],
    image: "/images/premio.png",
    description: "Versi mewah dari keluarga Hiace. Sangat cocok untuk perjalanan eksekutif, tamu VIP, dan wisata kelas atas."
  },
  {
    id: "elf-long",
    name: "Isuzu Elf Long",
    type: "Microbus",
    capacity: "19 Penumpang",
    price: "Rp 1.100.000",
    priceValue: 1100000,
    features: ["Kapasitas Maksimal", "Bagasi Luas", "AC Dingin Merata", "Ekonomis per Pax"],
    image: "/images/elf.png",
    description: "Solusi terbaik untuk rombongan besar. Muat hingga 19 orang dengan ruang bagasi yang lapang untuk membawa banyak barang bawaan."
  },
  {
    id: "alphard",
    name: "Toyota Alphard",
    type: "Luxury MPV",
    capacity: "6 Penumpang",
    price: "Rp 2.500.000",
    priceValue: 2500000,
    features: ["Captain Leather Seat", "Dual Sunroof", "VIP Protokoler Driver", "Kemewahan Mutlak"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
    description: "Kendaraan kelas eksekutif tertinggi untuk menyambut tamu penting, pejabat, pernikahan (wedding car), atau perjalanan bisnis mewah."
  }
];

export const TRAVEL_ROUTES: RouteInfo[] = [
  {
    id: "madiun-surabaya",
    origin: "Madiun",
    destination: "Surabaya",
    price: "Rp 150.000",
    priceValue: 150000,
    schedule: ["06:00", "09:00", "13:00", "17:00", "23:00"],
    travelTime: "2.5 - 3 Jam (Via Tol Trans Jawa)",
    highlights: ["Door to Door (Jemput & Antar)", "Free Bagasi Standar", "Full AC & Reclining Seat", "Via Tol Penuh"]
  },
  {
    id: "madiun-malang",
    origin: "Madiun",
    destination: "Malang",
    price: "Rp 160.000",
    priceValue: 160000,
    schedule: ["07:00", "13:00", "23:00"],
    travelTime: "3.5 Jam (Via Tol)",
    highlights: ["Door to Door", "Driver Handal", "Armada Bersih & Wangi", "Lewat Jalur Nyaman"]
  },
  {
    id: "madiun-jogja",
    origin: "Madiun",
    destination: "Jogja",
    price: "Rp 150.000",
    priceValue: 150000,
    schedule: ["07:00", "11:00", "16:00"],
    travelTime: "3 Jam (Via Tol / Jalur Selatan)",
    highlights: ["Antar Jemput Rumah", "Armada Terawat", "Perjalanan Nyaman", "Tarif Kompetitif"]
  },
  {
    id: "madiun-solo",
    origin: "Madiun",
    destination: "Solo",
    price: "Rp 120.000",
    priceValue: 120000,
    schedule: ["07:00", "11:00", "16:00"],
    travelTime: "1.5 Jam (Via Tol)",
    highlights: ["Door to Door", "Armada Eksekutif", "Driver Ramah", "Jaminan Keberangkatan"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Budi Santoso",
    location: "Madiun",
    rating: 5,
    date: "14 Mei 2026",
    comment: "Sangat puas menggunakan jasa sewa Hiace dari Asoka Trans untuk acara keluarga ke Jogja. Sopirnya ramah, armada bersih, dan AC sangat dingin sepanjang jalan. Rekomendasi banget!",
    avatar: "BS"
  },
  {
    name: "Rina Wijaya",
    location: "Surabaya",
    rating: 5,
    date: "28 April 2026",
    comment: "Hampir setiap minggu langganan travel Madiun Surabaya di Asoka Trans. Penjemputannya selalu tepat waktu dan perjalanannya cepat karena full lewat jalan tol. Driver-nya juga sopan.",
    avatar: "RW"
  },
  {
    name: "Hendra Pratama",
    location: "Ponorogo",
    rating: 5,
    date: "05 Mei 2026",
    comment: "Layanan drop bandara Juanda dari Ponorogo sangat profesional. Pesawat saya pagi jam 8, dijemput malam jam 2 pagi, sampai Juanda jam 5. Terhindar dari keterlambatan. Mobil Innova Reborn-nya juga nyaman sekali.",
    avatar: "HP"
  },
  {
    name: "Siti Rahmawati",
    location: "Ngawi",
    rating: 5,
    date: "19 April 2026",
    comment: "Sewa Avanza plus driver untuk dinas kantor di Caruban dan Ngawi selama 3 hari. Driver-nya sangat hafal rute lokal dan membantu mencarikan tempat kuliner khas yang enak. Mantap Asoka Trans!",
    avatar: "SR"
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: "Apa saja layanan utama Asoka Trans?",
    answer: "Asoka Trans menyediakan rental mobil plus driver (harian/mingguan), jasa travel door-to-door (rute Madiun-Surabaya, Malang, Jogja, Solo), carter drop off bandara Juanda/Adi Soemarmo, serta sewa armada besar seperti Toyota Hiace dan Isuzu Elf untuk rombongan."
  },
  {
    question: "Apakah Asoka Trans menyediakan rental mobil lepas kunci?",
    answer: "Demi menjaga kenyamanan, keselamatan, serta keamanan armada selama di perjalanan, Asoka Trans saat ini hanya memfokuskan layanan sewa mobil dengan sopir (driver + BBM)."
  },
  {
    question: "Apakah harga rental mobil sudah termasuk BBM dan Tol?",
    answer: "Kami menyediakan opsi paket sewa yang fleksibel. Anda bisa menyewa mobil + sopir saja (BBM & tol ditanggung penyewa), atau paket All-In (sudah termasuk mobil, sopir, BBM, tol, dan parkir) sehingga Anda tinggal duduk manis."
  },
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer: "Pemesanan sangat mudah! Cukup klik tombol WhatsApp yang ada di website ini, hubungi CS kami dengan menginfokan nama, jenis layanan, tanggal perjalanan, alamat jemput, dan armada yang dipilih. CS kami akan segera mengonfirmasi ketersediaan armada."
  },
  {
    question: "Apakah melayani penjemputan dari luar kota Madiun?",
    answer: "Ya, kami melayani penjemputan di wilayah karesidenan Madiun sekitarnya seperti Magetan, Ponorogo, Ngawi, Caruban, Maospati, hingga Solo, Surabaya, dan Jogja untuk tujuan ke Madiun."
  }
];

// Helper to construct WhatsApp link
export function getWhatsAppLink(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_PROFILE.whatsappNumber}?text=${encodedText}`;
}

export function getBookingMessage(serviceType: string, detail: string): string {
  return `Halo Admin Asoka Trans, saya tertarik untuk memesan layanan ${serviceType} untuk detail: ${detail}. Apakah armada masih tersedia? Mohon informasi harganya. Terima kasih.`;
}

// Programmatic SEO static param listing generator
export function getProgrammaticRoutes() {
  const routes: string[] = [];

  // Services x Cities
  CITIES_SERVED.forEach(city => {
    const cityLower = city.toLowerCase();
    
    // Core target routes (handled by static pages or dynamic slugs)
    if (cityLower !== "madiun") {
      routes.push(`rental-mobil-${cityLower}`);
      routes.push(`carter-mobil-${cityLower}`);
    }
  });

  // Destinations x Madiun (Travel)
  const travelDestinations = ["surabaya", "malang", "jogja", "solo", "semarang", "kediri", "ngawi"];
  travelDestinations.forEach(dest => {
    routes.push(`travel-madiun-${dest}`);
  });

  // Drop Bandara combinations
  const dropCities = ["madiun", "ponorogo", "magetan", "ngawi", "caruban"];
  dropCities.forEach(city => {
    routes.push(`drop-juanda-${city}`);
  });

  return routes;
}

// Data generator for a specific programmatic slug
export interface ProgrammaticPageData {
  title: string;
  metaDesc: string;
  heading: string;
  subheading: string;
  keyword: string;
  city: string;
  serviceType: "rental" | "travel" | "drop" | "carter";
  introText: string;
  priceStart: string;
  faqs: FAQItem[];
  canonical: string;
}

export function getProgrammaticPageData(slug: string): ProgrammaticPageData | null {
  const normalizedSlug = slug.toLowerCase();
  
  // 1. Check if matches: rental-mobil-[city]
  if (normalizedSlug.startsWith("rental-mobil-")) {
    const citySlug = normalizedSlug.replace("rental-mobil-", "");
    const city = CITIES_SERVED.find(c => c.toLowerCase() === citySlug) || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
    const keyword = `rental mobil ${cityLowerText(city)}`;
    
    return {
      title: `Rental Mobil ${city} Murah + Driver Mulai Rp350K | Asoka Trans`,
      metaDesc: `Sewa mobil di ${city} harga murah terpercaya. Unit Avanza, Innova Reborn, Hiace, Elf, Alphard bersih & terawat + driver profesional ramah. Hubungi Asoka Trans sekarang!`,
      heading: `Rental Mobil ${city} Terbaik & Terpercaya`,
      subheading: `Jasa sewa mobil profesional di ${city} dengan driver berpengalaman untuk perjalanan bisnis, dinas, wisata, dan acara keluarga.`,
      keyword,
      city,
      serviceType: "rental",
      priceStart: "Rp 350.000",
      introText: `Asoka Trans menyediakan jasa sewa / rental mobil di ${city} dan sekitarnya dengan pilihan unit terlengkap dan harga bersahabat. Kami mengutamakan kenyamanan dan keselamatan perjalanan Anda dengan menyediakan unit prima yang selalu dalam kondisi bersih, harum, serta disetir oleh driver handal yang paham rute jalanan lokal maupun luar kota.`,
      faqs: [
        {
          question: `Mengapa memilih rental mobil ${city} di Asoka Trans?`,
          answer: `Kami menawarkan unit kendaraan terbaru, sopir yang ramah & berpengalaman, ketepatan waktu penjemputan, serta tarif sewa yang sangat transparan tanpa biaya tambahan tersembunyi.`
        },
        {
          question: `Apakah rental mobil ${city} ini melayani sewa lepas kunci?`,
          answer: `Mohon maaf, saat ini kami hanya melayani sewa mobil dengan sopir (driver) demi menjamin keamanan armada dan kelancaran perjalanan Anda.`
        },
        {
          question: `Bagaimana cara memesan rental mobil ${city}?`,
          answer: `Anda cukup menghubungi CS Asoka Trans melalui WhatsApp di nomor ${BUSINESS_PROFILE.phoneDisplay}, pilih jenis armada, tentukan tanggal sewa, dan konfirmasi alamat penjemputan.`
        }
      ],
      canonical: `${BUSINESS_PROFILE.websiteUrl}/${normalizedSlug}`
    };
  }

  // 2. Check if matches: travel-madiun-[destination]
  if (normalizedSlug.startsWith("travel-madiun-")) {
    const destSlug = normalizedSlug.replace("travel-madiun-", "");
    const dest = CITIES_SERVED.find(c => c.toLowerCase() === destSlug) || destSlug.charAt(0).toUpperCase() + destSlug.slice(1);
    const keyword = `travel madiun ${destLowerText(dest)}`;
    
    return {
      title: `Travel Madiun ${dest} Door to Door berangkat Setiap Hari | Asoka Trans`,
      metaDesc: `Jasa travel agen Madiun ke ${dest} PP murah. Jadwal fleksibel pagi siang malam, unit Hiace/Avanza eksekutif, jemput rumah antar sampai tujuan (door to door).`,
      heading: `Travel Madiun ${dest} Eksekutif`,
      subheading: `Perjalanan nyaman, aman, & tepat waktu dari Madiun ke ${dest} via Tol Trans Jawa. Sistem antar-jemput door-to-door langsung di depan rumah.`,
      keyword,
      city: "Madiun",
      serviceType: "travel",
      priceStart: destSlug === "surabaya" ? "Rp 150.000" : destSlug === "malang" ? "Rp 160.000" : destSlug === "solo" ? "Rp 120.000" : "Rp 150.000",
      introText: `Bepergian dari Madiun ke ${dest} kini semakin praktis dan hemat dengan layanan travel door to door dari Asoka Trans. Anda tidak perlu repot datang ke terminal atau stasiun, karena driver kami akan langsung menjemput Anda di depan pintu rumah dan mengantarkan Anda sampai di alamat tujuan di kota ${dest} dengan selamat.`,
      faqs: [
        {
          question: `Berapa tarif tiket travel Madiun ${dest}?`,
          answer: `Tarif tiket travel Madiun ke ${dest} sangat murah mulai dari Rp 120.000 s/d Rp 180.000 per orang sekali jalan (tergantung rute dan jangkauan antar jemput).`
        },
        {
          question: `Berapa kali jadwal keberangkatan travel Madiun ${dest} sehari?`,
          answer: `Kami memiliki jadwal keberangkatan rutin beberapa kali sehari (pagi, siang, sore, dan malam hari). Silakan hubungi admin kami untuk detail jam keberangkatan terdekat.`
        },
        {
          question: `Apakah rute travel Madiun ${dest} lewat jalan tol?`,
          answer: `Ya, untuk rute yang searah dengan akses jalan tol (seperti arah Surabaya, Solo, Semarang), armada kami selalu melewati jalan tol agar perjalanan lebih cepat, lancar, dan nyaman bagi penumpang.`
        }
      ],
      canonical: `${BUSINESS_PROFILE.websiteUrl}/${normalizedSlug}`
    };
  }

  // 3. Check if matches: drop-juanda-[city]
  if (normalizedSlug.startsWith("drop-juanda-")) {
    const citySlug = normalizedSlug.replace("drop-juanda-", "");
    const city = CITIES_SERVED.find(c => c.toLowerCase() === citySlug) || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
    const keyword = `drop juanda ${cityLowerText(city)}`;
    
    return {
      title: `Carter Drop Bandara Juanda ke ${city} Murah Terpercaya | Asoka Trans`,
      metaDesc: `Layanan carter drop off private dari Bandara Juanda Surabaya ke ${city} (atau sebaliknya). Armada Avanza, Innova, Hiace All In murah, bebas telat & nyaman.`,
      heading: `Carter Drop Bandara Juanda ke ${city}`,
      subheading: `Jasa sewa mobil carter drop off khusus Bandara Juanda Surabaya ke ${city} PP dengan layanan tepat waktu, private car, dan harga All-In murah.`,
      keyword,
      city,
      serviceType: "drop",
      priceStart: "Rp 800.000",
      introText: `Perlu layanan transportasi andal untuk mengantar Anda dari Bandara Juanda Surabaya menuju ${city} atau sebaliknya secara langsung? Layanan Carter Drop Juanda ${city} dari Asoka Trans adalah pilihan paling tepat. Ini adalah layanan sewa mobil private (bukan travel umum), sehingga Anda tidak dicampur dengan penumpang lain dan mobil langsung berangkat menuju alamat tujuan Anda tanpa mampir-mampir.`,
      faqs: [
        {
          question: `Apakah harga drop Juanda ke ${city} sudah All-In?`,
          answer: `Ya, tarif carter drop bandara Juanda ke ${city} kami tawarkan dengan sistem All-In, sudah mencakup sewa mobil, driver profesional, BBM, tol penuh, dan parkir bandara. Tidak ada biaya tambahan lagi.`
        },
        {
          question: `Mobil apa saja yang tersedia untuk drop Juanda ${city}?`,
          answer: `Kami menyediakan unit Toyota Avanza, Innova Reborn, Innova Zenix, hingga Toyota Hiace Commuter/Premio untuk rombongan yang lebih besar.`
        },
        {
          question: `Bagaimana jika jadwal penerbangan saya tertunda (delay)?`,
          answer: `Tidak perlu khawatir, silakan infokan kode penerbangan Anda kepada CS kami saat memesan. Driver kami akan memantau kedatangan pesawat Anda dan tetap standby menunggu di bandara.`
        }
      ],
      canonical: `${BUSINESS_PROFILE.websiteUrl}/${normalizedSlug}`
    };
  }

  // 4. Check if matches: carter-mobil-[city]
  if (normalizedSlug.startsWith("carter-mobil-")) {
    const citySlug = normalizedSlug.replace("carter-mobil-", "");
    const city = CITIES_SERVED.find(c => c.toLowerCase() === citySlug) || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
    const keyword = `carter mobil ${cityLowerText(city)}`;
    
    return {
      title: `Carter Mobil ${city} ke Luar Kota All In Murah | Asoka Trans`,
      metaDesc: `Sewa mobil private / carteran dari ${city} ke berbagai destinasi luar kota (Surabaya, Malang, Jogja, Jakarta). Driver ramah, armada prima, aman & nyaman.`,
      heading: `Carter Mobil ${city} Private & Luar Kota`,
      subheading: `Layanan carter mobil pribadi dari ${city} ke kota mana saja secara langsung, fleksibel, aman, dan tarif sangat terjangkau.`,
      keyword,
      city,
      serviceType: "carter",
      priceStart: "Rp 400.000",
      introText: `Carter mobil di ${city} adalah solusi tepat bagi Anda yang menginginkan fleksibilitas penuh dalam bepergian bersama keluarga, rekan kantor, maupun rombongan dinas. Berbeda dengan travel reguler yang terikat jadwal kaku, dengan carter mobil Anda bebas menentukan jam keberangkatan, rute persinggahan, serta jenis unit mobil yang paling sesuai dengan kebutuhan Anda.`,
      faqs: [
        {
          question: `Bisa untuk perjalanan ke mana saja dari ${city}?`,
          answer: `Layanan carter mobil kami melayani rute ke seluruh wilayah Jawa Timur, Jawa Tengah, Yogyakarta, hingga Jawa Barat, Jakarta, dan Bali.`
        },
        {
          question: `Apakah bisa memilih jenis mobil untuk carteran?`,
          answer: `Tentu saja, Anda bisa memilih mulai dari Avanza, Innova Reborn, Innova Zenix, Hiace Commuter/Premio, hingga Isuzu Elf Long sesuai jumlah rombongan.`
        },
        {
          question: `Bagaimana dengan akomodasi driver untuk carter luar kota beberapa hari?`,
          answer: `Untuk sewa luar kota lebih dari 1 hari, biaya penginapan dan makan driver biasanya ditanggung oleh penyewa, atau dapat disepakati paket All-In bersih bersama admin kami.`
        }
      ],
      canonical: `${BUSINESS_PROFILE.websiteUrl}/${normalizedSlug}`
    };
  }

  return null;
}

function cityLowerText(city: string): string {
  return city.toLowerCase();
}

function destLowerText(dest: string): string {
  return dest.toLowerCase();
}
