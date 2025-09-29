import laskarPelangi from "../assets/laskarPelangi.jpg";
import bumiManusia from "../assets/bumiManusia.jpg";
import atomicHabits from "../assets/atomicHabits.jpg";
import sapiens from "../assets/sapiens.jpg";
import psychologyOfMoney from "../assets/psychologyOfMoney.jpg";
import filosofiTeras from "../assets/filosofiTeras.jpg";
import dilan1990 from "../assets/dilan1990.jpg";
import cleanCode from "../assets/cleanCode.jpg";
import negeri5Menara from "../assets/negeri5Menara.jpg";
import thinkingFastSlow from "../assets/thinkingFastSlow.jpeg";
import leanStartup from "../assets/leanStartup.jpg";
import cantikItuLuka from "../assets/cantikItuLuka.jpg";

export const booksData = [
  {
    id: 1,
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    description:
      "Novel yang mengisahkan perjuangan anak-anak Belitung untuk mendapatkan pendidikan di tengah keterbatasan ekonomi.",
    price: 85000,
    rating: 4.8,
    category: "Fiksi",
    img: laskarPelangi,
    stock: 25,
    isbn: "978-602-291-000-1",
  },
  {
    id: 2,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    description:
      "Novel epik yang mengisahkan perjalanan hidup Minke, seorang pribumi di masa kolonial Belanda.",
    price: 95000,
    rating: 4.9,
    category: "Fiksi Sejarah",
    img: bumiManusia,
    stock: 18,
    isbn: "978-602-291-000-2",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk dengan cara yang sistematis.",
    price: 120000,
    rating: 4.7,
    category: "Pengembangan Diri",
    img: atomicHabits,
    stock: 32,
    isbn: "978-602-291-000-3",
  },
  {
    id: 4,
    title: "Sapiens: Sejarah Singkat Umat Manusia",
    author: "Yuval Noah Harari",
    description:
      "Eksplorasi menakjubkan tentang bagaimana spesies manusia berkembang dan mendominasi planet ini.",
    price: 135000,
    rating: 4.6,
    category: "Sejarah",
    img: sapiens,
    stock: 15,
    isbn: "978-602-291-000-4",
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description:
      "Panduan tentang perilaku manusia terhadap uang dan bagaimana mengambil keputusan finansial yang bijak.",
    price: 98000,
    rating: 4.5,
    category: "Keuangan",
    img: psychologyOfMoney,
    stock: 28,
    isbn: "978-602-291-000-5",
  },
  {
    id: 6,
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    description:
      "Pengantar praktis filosofi Stoikisme untuk kehidupan sehari-hari yang lebih tenang dan bahagia.",
    price: 75000,
    rating: 4.4,
    category: "Filosofi",
    img: filosofiTeras,
    stock: 22,
    isbn: "978-602-291-000-6",
  },
  {
    id: 7,
    title: "Dilan 1990",
    author: "Pidi Baiq",
    description:
      "Kisah cinta yang manis dan mengharukan antara Dilan dan Milea di tahun 1990-an.",
    price: 68000,
    rating: 4.3,
    category: "Romance",
    img: dilan1990,
    stock: 35,
    isbn: "978-602-291-000-7",
  },
  {
    id: 8,
    title: "Clean Code",
    author: "Robert C. Martin",
    description:
      "Panduan untuk menulis kode yang bersih, mudah dibaca, dan mudah di-maintain untuk para programmer.",
    price: 145000,
    rating: 4.8,
    category: "Teknologi",
    img: cleanCode,
    stock: 12,
    isbn: "978-602-291-000-8",
  },
  {
    id: 9,
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    description:
      "Kisah inspiratif tentang perjuangan enam sahabat di pondok pesantren untuk meraih impian mereka.",
    price: 82000,
    rating: 4.6,
    category: "Inspiratif",
    img: negeri5Menara,
    stock: 20,
    isbn: "978-602-291-000-9",
  },
  {
    id: 10,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description:
      "Eksplorasi mendalam tentang cara kerja pikiran manusia dalam mengambil keputusan.",
    price: 128000,
    rating: 4.5,
    category: "Psikologi",
    img: thinkingFastSlow,
    stock: 16,
    isbn: "978-602-291-000-10",
  },
  {
    id: 11,
    title: "The Lean Startup",
    author: "Eric Ries",
    description:
      "Metodologi untuk membangun startup yang sukses dengan pendekatan yang efisien dan tervalidasi.",
    price: 115000,
    rating: 4.4,
    category: "Bisnis",
    img: leanStartup,
    stock: 24,
    isbn: "978-602-291-000-11",
  },
  {
    id: 12,
    title: "Cantik Itu Luka",
    author: "Eka Kurniawan",
    description:
      "Novel magis realis yang mengisahkan kisah keluarga Dewi Ayu dengan latar belakang sejarah Indonesia.",
    price: 92000,
    rating: 4.7,
    category: "Sastra",
    img: cantikItuLuka,
    stock: 19,
    isbn: "978-602-291-000-12",
  },
];

export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};

export const getUniqueCategories = (books) => {
  const categories = books.map(book => book.category);
  return [...new Set(categories)];
};

export const filterBooksByCategory = (books, category) => {
  if (category === '' || category === 'Semua Kategori') {
    return books;
  }
  return books.filter(book => book.category === category);
};

export const searchBooks = (books, searchTerm) => {
  if (!searchTerm) return books;
  
  const term = searchTerm.toLowerCase();
  return books.filter(book => 
    book.title.toLowerCase().includes(term) ||
    book.author.toLowerCase().includes(term) ||
    book.category.toLowerCase().includes(term) ||
    book.description.toLowerCase().includes(term)
  );
};

export const sortBooks = (books, sortBy) => {
  const sortedBooks = [...books];
  
  switch (sortBy) {
    case 'title-asc':
      return sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
    case 'title-desc':
      return sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
    case 'price-asc':
      return sortedBooks.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sortedBooks.sort((a, b) => b.price - a.price);
    case 'rating-desc':
      return sortedBooks.sort((a, b) => b.rating - a.rating);
    default:
      return sortedBooks;
  }
};