export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Xiaomi 12 Pro NFC 12 ГБ/256 ГБ',
    price: 444_000,
    description: `технология NFC: Да
    цвет: серый
    тип экрана: AMOLED
    диагональ: 6.73 дюйм
    размер оперативной памяти: 12 ГБ
    процессор: Snapdragon 8 Gen 1
    объем встроенной памяти: 256 ГБ
    емкость аккумулятора: 4600 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h37/h95/52369623580702/xiaomi-12-pro-12-gb-256-gb-seryj-104688742-1.jpg",
    url: "https://kaspi.kz/shop/p/xiaomi-12-pro-nfc-12-gb-256-gb-seryi-104688742/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 2,
    name: 'Xiaomi Redmi 10C 4 ГБ/128 ГБ',
    price: 72_919,
    description: `технология NFC: Нет
    цвет: серый
    тип экрана: IPS, сенсорный, мультитач
    диагональ: 6.71 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 680
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 5000 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item",
    rating:5
  },
  {
    id: 3,
    name: 'Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
    price: 139_780,
    description: `технология NFC: Да
    цвет: серый
    тип экрана: AMOLED, сенсорный, мультитач
    диагональ: 6.67 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: MediaTek Helio G96
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 5000 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 4,
    name: 'Apple iPhone 14 Pro Max 1Tb Dual Sim',
    price: 1_170_000,
    description: `технология NFC: Да\n
    цвет: черный\n
    тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы\n
    диагональ: 6.7 дюйм\n
    размер оперативной памяти: 6 ГБ\n
    процессор: 6-ядерный Apple A16 Bionic\n
    объем встроенной памяти: 1024 ГБ\n
    емкость аккумулятора: 3095 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h3e/63792875536414/apple-iphone-14-pro-max-1tb-chernyi-107116389-1.jpg",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-1tb-dual-sim-chernyi-107116389/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 5,
    name: 'Apple iPhone 12 Pro 128Gb',
    price: 587_725,
    description: `технология NFC: Да\n
    цвет: серебристый\n
    тип экрана: сенсорный, мультитач OLED Super Retina XDR\n
    диагональ: 6.1 дюйм\n
    размер оперативной памяти: 6 ГБ\n
    процессор: 6-ядерный Apple A14 Bionic\n
    объем встроенной памяти: 128 ГБ\n
    емкость аккумулятора: 2775 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h18/33079380836382/apple-iphone-12-pro-128gb-serebristyj-100657162-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-iphone-12-pro-128gb-serebristyi-100657162/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 6,
    name: 'Apple iPhone 11 128Gb',
    price: 340_990,
    description: `технология NFC: Да
    цвет: сиреневый
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 8-ядерный A13 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3110 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/h6f/32286690377758/apple-iphone-11-128gb-sirenevyj-1005107-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-sirenevyi-1005107/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 7,
    name: 'Samsung Galaxy Z Fold4 12 ГБ/512 ГБ',
    price: 1_099_880,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Dynamic AMOLED 2X
    диагональ: 7.6 дюйм
    размер оперативной памяти: 12 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 1
    объем встроенной памяти: 512 ГБ
    емкость аккумулятора: 4400 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h60/61658891714590/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-smart-chasy-samsung-galaxy-watch-4-classic-106036420-1.jpg",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-512-gb-chernyi-podarok-106036420/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 8,
    name: 'Samsung Galaxy A13 4 ГБ/128 ГБ',
    price: 87_411,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: PLS TFT LCD сенсорный, мультитач
    диагональ: 6.6 дюйм
    размер оперативной памяти: 4 ГБ
    процессор: 8-ядерный Exynos 850
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 5000 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item",
    rating: 4
  },
  {
    id: 9,
    name: 'Samsung Galaxy Z Flip4 8 ГБ/128 ГБ',
    price: 549_890,
    description: `технология NFC: Да
    цвет: серый
    тип экрана: AMOLED, сенсорный
    диагональ: 6.7 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный Qualcomm Snapdragon 8 Gen 1
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3700 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/hde/62178742403102/samsung-galaxy-z-flip4-8-gb-128-gb-seryj-smart-casy-samsung-galaxy-watch-4-106305928-1.jpg",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-z-flip4-8-gb-128-gb-seryi-106305928/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 10,
    name: 'Poco X4 Pro 8 ГБ/256 ГБ',
    price: 171_747,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: AMOLED, сенсорный, мультитач
    диагональ: 6.67 дюйм
    размер оперативной памяти: 8 ГБ
    процессор: 8-ядерный Snapdragon 695
    объем встроенной памяти: 256 ГБ
    емкость аккумулятора: 5000 мАч`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h47/49566152032286/poco-x4-pro-8-256gb-cernyj-104227418-1.jpg",
    url: "https://kaspi.kz/shop/p/poco-x4-pro-8-gb-256-gb-chernyi-104227418/?c=750000000#!/item",
    rating: 4
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/