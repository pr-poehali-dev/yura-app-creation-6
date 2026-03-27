export type Place = {
  id: number;
  name: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  tags: string[];
  image: string;
  description: string;
  lat: number;
  lng: number;
  photos: string[];
  userReviews: { name: string; rating: number; text: string; date: string }[];
};

export const PLACES: Place[] = [
  {
    id: 1,
    name: "Лесное озеро Тихое",
    category: "Озёра",
    location: "Подмосковье, 80 км",
    rating: 4.8,
    reviews: 124,
    tags: ["Рыбалка", "Купание", "Кемпинг"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/87e5d0c8-4bcd-4590-aabf-8f29680debd4.jpg",
    description: "Уединённое лесное озеро с кристально чистой водой. Идеально для рыбалки и медитативного отдыха.",
    lat: 56.1,
    lng: 37.8,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/87e5d0c8-4bcd-4590-aabf-8f29680debd4.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/5b0409dd-00ed-4e59-bfad-199d30a8e559.jpg",
    ],
    userReviews: [
      { name: "Анна К.", rating: 5, text: "Невероятно красивое место! Были с семьёй, дети в восторге. Чистая вода, сосновый воздух.", date: "12 июня 2025" },
      { name: "Михаил В.", rating: 5, text: "Лучшее место для рыбалки в области. Поймал щуку на 3 кг! Обязательно вернусь.", date: "5 мая 2025" },
      { name: "Светлана Р.", rating: 4, text: "Красота природы поражает. Немного тяжело добираться, но оно того стоит.", date: "20 апреля 2025" },
    ],
  },
  {
    id: 2,
    name: "Горная поляна Ветерок",
    category: "Горы",
    location: "Карелия, 650 км",
    rating: 4.9,
    reviews: 87,
    tags: ["Треккинг", "Фотосъёмка", "Пикник"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/10b33ffa-45f3-4688-863d-bccc0d90cf08.jpg",
    description: "Живописная горная поляна с панорамным видом на долину. Место для настоящих ценителей природы.",
    lat: 62.5,
    lng: 33.2,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/10b33ffa-45f3-4688-863d-bccc0d90cf08.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/87e5d0c8-4bcd-4590-aabf-8f29680debd4.jpg",
    ],
    userReviews: [
      { name: "Игорь Л.", rating: 5, text: "Закат с этой поляны — одно из самых красивых зрелищ в моей жизни. Фото получились фантастические!", date: "8 июля 2025" },
      { name: "Наталья М.", rating: 5, text: "Маршрут несложный, но виды просто захватывают дух. Брали детей 10 лет — всё прошли без проблем.", date: "15 июня 2025" },
    ],
  },
  {
    id: 3,
    name: "Домик в лесу «Берёзка»",
    category: "Домики",
    location: "Ленобласть, 120 км",
    rating: 4.7,
    reviews: 203,
    tags: ["Уют", "Природа", "Семья"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/d2ba14f6-220f-4740-a3ac-41709578a584.jpg",
    description: "Уютный деревянный домик среди вековых берёз. Баня, мангал, тишина — полное отключение от города.",
    lat: 60.1,
    lng: 30.5,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/d2ba14f6-220f-4740-a3ac-41709578a584.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/10b33ffa-45f3-4688-863d-bccc0d90cf08.jpg",
    ],
    userReviews: [
      { name: "Дмитрий Н.", rating: 5, text: "Баня отличная, дрова есть, хозяева приветливые. Провели 3 дня — жалко было уезжать.", date: "2 августа 2025" },
      { name: "Ольга П.", rating: 4, text: "Атмосфера сказочная. Единственный минус — слабый интернет, но это и плюс для отдыха!", date: "28 июля 2025" },
      { name: "Сергей Т.", rating: 5, text: "Идеальное место для детей. Грибы собирали прямо у домика!", date: "10 июля 2025" },
    ],
  },
  {
    id: 4,
    name: "Река Изумрудная",
    category: "Реки",
    location: "Тверская обл., 200 км",
    rating: 4.6,
    reviews: 56,
    tags: ["SUP", "Байдарки", "Природа"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/5b0409dd-00ed-4e59-bfad-199d30a8e559.jpg",
    description: "Быстрая горная речка с бирюзовой водой. Популярна среди байдарочников и любителей SUP-бординга.",
    lat: 57.8,
    lng: 34.1,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/5b0409dd-00ed-4e59-bfad-199d30a8e559.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/d2ba14f6-220f-4740-a3ac-41709578a584.jpg",
    ],
    userReviews: [
      { name: "Александр Ф.", rating: 5, text: "Сплавлялись 2 дня на байдарках. Вода чистейшая, рыба, природа нетронутая. Рай!", date: "18 августа 2025" },
      { name: "Мария Г.", rating: 4, text: "SUP-сёрфинг по такой воде — ни с чем не сравнить. Обязательно ещё раз!", date: "5 августа 2025" },
    ],
  },
];

export const MAP_MARKERS = [
  { id: 1, x: 48, y: 52, name: "Лесное озеро Тихое" },
  { id: 2, x: 25, y: 22, name: "Горная поляна Ветерок" },
  { id: 3, x: 35, y: 30, name: "Домик «Берёзка»" },
  { id: 4, x: 55, y: 38, name: "Река Изумрудная" },
];

export const CATEGORIES = ["Все", "Озёра", "Горы", "Домики", "Реки"];
