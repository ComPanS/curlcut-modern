export type PriceRow = { service: string; prices: [string, string, string] }
export type WorkImage = { src: string; alt: string; position?: string }

export const site = {
  name: 'Curl Cut',
  description: 'Камерная парикмахерская в центре Казани. Стрижки и окрашивания с вниманием к форме, цвету и текстуре.',
  bookingUrl: 'https://b722209.yclients.ru/',
  phone: '+79868444161',
  phoneLabel: '+7 986 844-41-61',
  address: 'Профсоюзная, 34',
  addressNote: 'вход через «Лось бистро», Казань',
  mapUrl: 'https://yandex.ru/maps/org/curl_cut/109980996482/',
}

export const priceTiers = ['Hairstylist', 'Top stylist', 'Art Director']
export const prices: PriceRow[] = [
  { service: 'Женская стрижка', prices: ['3 500', '4 000', '5 500'] },
  { service: 'Стрижка / коррекция чёлки', prices: ['2 500', '2 500', '2 500'] },
  { service: 'Мужская удлинённая стрижка', prices: ['3 000', '3 300', '3 600'] },
  { service: 'Мужская короткая стрижка', prices: ['2 500', '—', '3 000'] },
]

export const works: WorkImage[] = [
  { src: 'images/CURLCUT10402.jpg', alt: 'Стрижка и укладка Curl Cut', position: '50% 50%' },
  { src: 'images/CURLCUT16932.jpg', alt: 'Окрашивание и форма волос Curl Cut', position: '50% 50%' },
  { src: 'images/CURLCUT15702.jpg', alt: 'Форма и текстура волос в работе Curl Cut', position: '50% 24%' },
  { src: 'images/CURLCUT12382.jpg', alt: 'Длинные тёмные волосы с центральным пробором', position: '50% 24%' },
  { src: 'images/CURLCUT19972.jpg', alt: 'Стрижка и окрашивание Curl Cut', position: '50% 50%' },
  { src: 'images/CURLCUT16302.jpg', alt: 'Текстурная стрижка Curl Cut', position: '50% 50%' },
  { src: 'images/CURLCUT15132.jpg', alt: 'Авторская стрижка Curl Cut', position: '50% 25%' },
  { src: 'images/CURLCUT20312.jpg', alt: 'Рыжие длинные волосы с мягкой волной', position: '50% 28%' },
  { src: 'images/KIF_2645.JPG', alt: 'Работа с формой волос Curl Cut', position: '50% 50%' },
  { src: 'images/Curl3.jpg', alt: 'Текстура волос и инструменты Curl Cut', position: '50% 50%' },
  { src: 'images/CURLCUT12512.jpg', alt: 'Стрижка Curl Cut', position: '50% 50%' },
  { src: 'images/CURLCUT13962.jpg', alt: 'Окрашивание Curl Cut', position: '50% 50%' },
]

export const heroWorks: WorkImage[] = [
  { src: 'images/CURLCUT20312.jpg', alt: 'Рыжие длинные волосы с мягкой волной', position: '50% 28%' },
  { src: 'images/CURLCUT12382.jpg', alt: 'Длинные тёмные волосы с центральным пробором', position: '50% 24%' },
  { src: 'images/CURLCUT09412.jpg', alt: 'Короткая текстурная чёлка крупным планом', position: '50% 42%' },
]

export const story = [
  'Curl Cut — авторский парикмахерский проект в центре Казани.',
  'Мы работаем с формой, цветом и текстурой, не ограничиваясь типами волос или шаблонами красоты.',
  'Любим сложные стрижки, естественные и яркие окрашивания, чувствуем баланс между экспериментом и стилем.',
  'В команде Curl Cut — мастера с разным опытом и вкусом, но с общим вниманием к человеку.',
  'Нам важна не универсальная мода, а ваша выразительность — в деталях, линиях, акцентах.',
]
