import productChair from "@/assets/product-chair.jpg";
import productTable from "@/assets/product-table.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productLamp from "@/assets/product-lamp.jpg";
import productShelf from "@/assets/product-shelf.jpg";
import productAccentChair from "@/assets/product-accent-chair.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  dimensions: string;
  material: string;
}

export const products: Product[] = [
  // Seating
  {
    id: 1,
    name: "Modern Armchair",
    price: 599,
    image: productChair,
    category: "Seating",
    description: "Kursi modern dengan desain kontemporer yang menampilkan garis bersih dan bantalan nyaman. Sempurna untuk ruang tamu modern, menggabungkan gaya dengan fungsionalitas untuk kenyamanan maksimal.",
    dimensions: '32" W x 34" D x 30" H',
    material: "Kain pelapis dengan kaki logam"
  },
  {
    id: 3,
    name: "Contemporary Sofa",
    price: 1899,
    image: productSofa,
    category: "Seating",
    description: "Sofa tiga dudukan yang luas dengan bantal empuk dan desain abadi. Dibangun untuk kenyamanan dan daya tahan, cocok untuk berkumpul bersama keluarga.",
    dimensions: '84" W x 36" D x 32" H',
    material: "Pelapis kain premium, rangka kayu solid"
  },
  {
    id: 6,
    name: "Velvet Accent Chair",
    price: 699,
    image: productAccentChair,
    category: "Seating",
    description: "Kursi aksen beludru mewah dengan warna hijau sage. Menambahkan sentuhan warna dan kenyamanan ke ruang mana pun dengan gaya elegan.",
    dimensions: '30" W x 32" D x 28" H',
    material: "Pelapis beludru, kaki kayu"
  },
  {
    id: 7,
    name: "Scandinavian Armchair",
    price: 549,
    image: productChair,
    category: "Seating",
    description: "Kursi bergaya Skandinavia dengan desain minimalis. Memberikan kenyamanan optimal dengan estetika yang bersih dan modern.",
    dimensions: '31" W x 33" D x 29" H',
    material: "Kain linen, kaki kayu oak"
  },
  {
    id: 11,
    name: "Leather Sofa",
    price: 2299,
    image: productSofa,
    category: "Seating",
    description: "Sofa kulit premium yang mewah dan tahan lama. Kulit asli berkualitas tinggi yang akan semakin indah seiring waktu.",
    dimensions: '90" W x 38" D x 33" H',
    material: "Kulit asli 100%, rangka kayu keras"
  },
  {
    id: 12,
    name: "Lounge Chair",
    price: 849,
    image: productAccentChair,
    category: "Seating",
    description: "Kursi santai ergonomis dengan sandaran tinggi. Ideal untuk membaca atau bersantai dengan desain yang mendukung postur tubuh.",
    dimensions: '32" W x 35" D x 40" H',
    material: "Pelapis kain premium, busa memory foam"
  },
  {
    id: 13,
    name: "Reading Chair",
    price: 479,
    image: productChair,
    category: "Seating",
    description: "Kursi baca kompak yang sempurna untuk sudut favorit Anda. Nyaman untuk duduk berjam-jam dengan buku favorit Anda.",
    dimensions: '28" W x 30" D x 32" H',
    material: "Kain katun, rangka kayu"
  },
  {
    id: 14,
    name: "L-Shaped Sofa",
    price: 2599,
    image: productSofa,
    category: "Seating",
    description: "Sofa L besar yang sempurna untuk ruang keluarga. Dapat menampung banyak orang dengan kenyamanan maksimal.",
    dimensions: '110" W x 80" D x 34" H',
    material: "Pelapis microfiber, rangka kayu engineered"
  },

  // Tables
  {
    id: 2,
    name: "Dining Table",
    price: 1299,
    image: productTable,
    category: "Tables",
    description: "Meja makan kayu indah yang dapat menampung 6-8 orang dengan nyaman. Dibuat dari kayu keras berkelanjutan dengan finishing alami.",
    dimensions: '72" W x 40" D x 30" H',
    material: "Kayu oak solid"
  },
  {
    id: 8,
    name: "Coffee Table",
    price: 499,
    image: productTable,
    category: "Tables",
    description: "Meja kopi modern dengan desain minimalis. Sempurna untuk ruang tamu Anda dengan ruang penyimpanan tambahan.",
    dimensions: '48" W x 24" D x 18" H',
    material: "Kayu walnut dengan finishing matte"
  },
  {
    id: 15,
    name: "Console Table",
    price: 649,
    image: productTable,
    category: "Tables",
    description: "Meja konsol ramping untuk lorong atau ruang tamu. Ideal untuk menampilkan dekorasi atau menyimpan barang-barang kecil.",
    dimensions: '48" W x 14" D x 32" H',
    material: "Kayu solid dengan aksen logam"
  },
  {
    id: 16,
    name: "Side Table",
    price: 249,
    image: productTable,
    category: "Tables",
    description: "Meja samping serbaguna untuk di samping sofa atau tempat tidur. Desain kompak yang fungsional.",
    dimensions: '20" W x 20" D x 24" H',
    material: "Kayu dengan top marmer"
  },
  {
    id: 17,
    name: "Oak Dining Table",
    price: 1599,
    image: productTable,
    category: "Tables",
    description: "Meja makan oak premium dengan detail craftsmanship yang indah. Investasi jangka panjang untuk rumah Anda.",
    dimensions: '84" W x 42" D x 30" H',
    material: "Kayu oak premium, finishing oil"
  },
  {
    id: 18,
    name: "Marble Coffee Table",
    price: 899,
    image: productTable,
    category: "Tables",
    description: "Meja kopi dengan top marmer mewah. Memberikan sentuhan elegan pada ruang tamu Anda.",
    dimensions: '42" W x 24" D x 16" H',
    material: "Marmer putih, rangka besi"
  },
  {
    id: 19,
    name: "Nesting Tables Set",
    price: 399,
    image: productTable,
    category: "Tables",
    description: "Set tiga meja bertingkat yang hemat ruang. Dapat digunakan terpisah atau disimpan bersamaan.",
    dimensions: 'Set: 24", 20", 16" berbagai dimensi',
    material: "Kayu dan logam"
  },

  // Lighting
  {
    id: 4,
    name: "Table Lamp",
    price: 189,
    image: productLamp,
    category: "Lighting",
    description: "Lampu meja elegan dengan finishing kuningan. Memberikan pencahayaan ambient yang hangat untuk ruangan mana pun.",
    dimensions: '12" W x 24" H',
    material: "Kuningan dan baja"
  },
  {
    id: 20,
    name: "Floor Lamp",
    price: 299,
    image: productLamp,
    category: "Lighting",
    description: "Lampu lantai modern dengan desain ramping. Memberikan pencahayaan yang cukup untuk membaca atau bekerja.",
    dimensions: '12" W x 65" H',
    material: "Logam dengan shade kain"
  },
  {
    id: 21,
    name: "Desk Lamp",
    price: 149,
    image: productLamp,
    category: "Lighting",
    description: "Lampu meja yang dapat disesuaikan untuk ruang kerja. LED hemat energi dengan kontrol kecerahan.",
    dimensions: '8" W x 18" H (dapat disesuaikan)',
    material: "Aluminium dengan LED"
  },
  {
    id: 22,
    name: "Arc Floor Lamp",
    price: 449,
    image: productLamp,
    category: "Lighting",
    description: "Lampu lantai arc yang dramatis dan modern. Sempurna untuk sudut baca atau di atas meja kopi.",
    dimensions: '80" reach x 75" H',
    material: "Baja dengan base marmer"
  },
  {
    id: 23,
    name: "Bedside Lamp",
    price: 129,
    image: productLamp,
    category: "Lighting",
    description: "Lampu samping tempat tidur kompak dengan cahaya lembut. Ideal untuk membaca sebelum tidur.",
    dimensions: '10" W x 20" H',
    material: "Keramik dengan shade kain"
  },
  {
    id: 24,
    name: "Modern Table Lamp",
    price: 219,
    image: productLamp,
    category: "Lighting",
    description: "Lampu meja kontemporer dengan desain geometris. Menjadi statement piece yang fungsional.",
    dimensions: '14" W x 26" H',
    material: "Logam dan kaca"
  },

  // Storage
  {
    id: 5,
    name: "Wooden Bookshelf",
    price: 799,
    image: productShelf,
    category: "Storage",
    description: "Rak buku serbaguna dengan beberapa kompartemen. Sempurna untuk menampilkan buku dan barang dekoratif.",
    dimensions: '48" W x 16" D x 72" H',
    material: "Kayu oak dengan finishing alami"
  },
  {
    id: 25,
    name: "Display Cabinet",
    price: 1099,
    image: productShelf,
    category: "Storage",
    description: "Kabinet display dengan pintu kaca. Ideal untuk menampilkan koleksi barang berharga Anda.",
    dimensions: '40" W x 18" D x 75" H',
    material: "Kayu solid dengan panel kaca"
  },
  {
    id: 26,
    name: "Floating Shelves Set",
    price: 199,
    image: productShelf,
    category: "Storage",
    description: "Set rak melayang untuk dinding. Hemat ruang dan modern, tersedia dalam tiga ukuran.",
    dimensions: 'Set: 36", 30", 24" x 10" D',
    material: "Kayu dan hardware mounting tersembunyi"
  },
  {
    id: 27,
    name: "Tall Bookcase",
    price: 899,
    image: productShelf,
    category: "Storage",
    description: "Rak buku tinggi dengan kapasitas besar. Enam rak yang dapat disesuaikan untuk penyimpanan maksimal.",
    dimensions: '36" W x 14" D x 84" H',
    material: "Kayu engineered dengan veneer"
  },
  {
    id: 28,
    name: "Storage Unit",
    price: 649,
    image: productShelf,
    category: "Storage",
    description: "Unit penyimpanan modular serbaguna. Kombinasi rak terbuka dan lemari tertutup.",
    dimensions: '60" W x 16" D x 48" H',
    material: "Kayu dengan finishing white wash"
  },
  {
    id: 29,
    name: "Media Console",
    price: 749,
    image: productShelf,
    category: "Storage",
    description: "Konsol media dengan manajemen kabel terintegrasi. Dapat menampung TV hingga 65 inci.",
    dimensions: '72" W x 20" D x 24" H',
    material: "Kayu dengan sliding doors"
  },

  // Bedroom
  {
    id: 30,
    name: "Upholstered Bed Frame",
    price: 1299,
    image: productSofa,
    category: "Bedroom",
    description: "Rangka tempat tidur berlapis dengan headboard tinggi. Nyaman dan stylish untuk kamar tidur utama Anda.",
    dimensions: 'Queen: 64" W x 85" L x 54" H',
    material: "Pelapis linen, rangka kayu"
  },
  {
    id: 31,
    name: "Nightstand",
    price: 299,
    image: productTable,
    category: "Bedroom",
    description: "Meja samping tempat tidur dengan dua laci. Penyimpanan kompak untuk barang-barang penting.",
    dimensions: '22" W x 18" D x 24" H',
    material: "Kayu solid dengan handle logam"
  },
  {
    id: 32,
    name: "Dresser",
    price: 899,
    image: productShelf,
    category: "Bedroom",
    description: "Dresser enam laci dengan konstruksi solid. Penyimpanan pakaian yang luas dan tahan lama.",
    dimensions: '54" W x 20" D x 36" H',
    material: "Kayu oak dengan laci dovetail"
  },
  {
    id: 33,
    name: "Wardrobe",
    price: 1599,
    image: productShelf,
    category: "Bedroom",
    description: "Lemari pakaian besar dengan gantungan dan rak. Solusi penyimpanan lengkap untuk kamar tidur.",
    dimensions: '48" W x 24" D x 78" H',
    material: "Kayu dengan pintu sliding"
  },
  {
    id: 34,
    name: "Bedroom Bench",
    price: 399,
    image: productAccentChair,
    category: "Bedroom",
    description: "Bangku berlapis untuk kaki tempat tidur. Fungsional dan dekoratif dengan penyimpanan tersembunyi.",
    dimensions: '48" W x 18" D x 20" H',
    material: "Pelapis velvet, rangka kayu"
  },
  {
    id: 35,
    name: "Vanity Table",
    price: 699,
    image: productTable,
    category: "Bedroom",
    description: "Meja rias dengan cermin dan laci penyimpanan. Sempurna untuk rutinitas kecantikan pagi Anda.",
    dimensions: '42" W x 18" D x 30" H',
    material: "Kayu dengan cermin terintegrasi"
  },

  // Decor
  {
    id: 36,
    name: "Decorative Mirror",
    price: 249,
    image: productShelf,
    category: "Decor",
    description: "Cermin dekoratif dengan bingkai ornamen. Menambah kedalaman dan cahaya ke ruangan Anda.",
    dimensions: '36" W x 48" H',
    material: "Cermin dengan bingkai kayu carved"
  },
  {
    id: 37,
    name: "Wall Art Set",
    price: 179,
    image: productShelf,
    category: "Decor",
    description: "Set tiga karya seni dinding abstrak. Menambahkan sentuhan artistik ke ruang Anda.",
    dimensions: 'Berbagai: 16x20", 12x16", 12x16"',
    material: "Print pada canvas dengan frame"
  },
  {
    id: 38,
    name: "Ceramic Vase",
    price: 89,
    image: productLamp,
    category: "Decor",
    description: "Vas keramik buatan tangan dengan glasir unik. Sempurna untuk bunga segar atau sebagai dekorasi mandiri.",
    dimensions: '8" W x 14" H',
    material: "Keramik glasir"
  },
  {
    id: 39,
    name: "Table Clock",
    price: 129,
    image: productLamp,
    category: "Decor",
    description: "Jam meja vintage dengan mekanisme kuarsa. Kombinasi fungsi dan estetika.",
    dimensions: '6" W x 8" H',
    material: "Logam dengan angka Roman"
  },
  {
    id: 40,
    name: "Decorative Bowl",
    price: 69,
    image: productTable,
    category: "Decor",
    description: "Mangkuk dekoratif untuk meja kopi atau konsol. Desain modern yang serbaguna.",
    dimensions: '14" diameter x 5" H',
    material: "Keramik dengan glasir metalik"
  },

  // Office
  {
    id: 41,
    name: "Office Desk",
    price: 899,
    image: productTable,
    category: "Office",
    description: "Meja kantor ergonomis dengan permukaan luas. Ideal untuk bekerja dari rumah dengan penyimpanan terintegrasi.",
    dimensions: '60" W x 30" D x 30" H',
    material: "Kayu dengan rangka baja"
  },
  {
    id: 42,
    name: "Ergonomic Chair",
    price: 599,
    image: productChair,
    category: "Office",
    description: "Kursi kantor ergonomis dengan dukungan lumbar. Dapat disesuaikan untuk kenyamanan maksimal sepanjang hari.",
    dimensions: '26" W x 26" D x 38-42" H (dapat disesuaikan)',
    material: "Mesh breathable, base aluminium"
  },
  {
    id: 43,
    name: "Filing Cabinet",
    price: 449,
    image: productShelf,
    category: "Office",
    description: "Kabinet arsip dengan tiga laci. Organisasi dokumen yang aman dan rapi.",
    dimensions: '15" W x 20" D x 28" H',
    material: "Baja dengan sistem locking"
  },
  {
    id: 44,
    name: "Desk Organizer",
    price: 79,
    image: productShelf,
    category: "Office",
    description: "Organizer meja dengan kompartemen untuk alat tulis. Menjaga meja Anda tetap rapi dan produktif.",
    dimensions: '12" W x 8" D x 5" H',
    material: "Kayu dengan kompartemen felt-lined"
  },
];

export const categories = ["All", "Seating", "Tables", "Lighting", "Storage", "Bedroom", "Decor", "Office"];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};
