import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      category: "Gadgets",
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
      rating: 5,
      likes: 0
    },
    {
      category: "Gadgets",
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
      rating:5,
      likes: 0
    },
    {
      category: "Gadgets",
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
      rating: 5,
      likes: 0
    },
    {
      category: "Gadgets",
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
      rating: 5,
      likes: 0
    },
    {
      category: "Gadgets",
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
      rating: 5,
      likes: 0
    },
    {
      category: "Music",
      name: 'Перкуссия Sela SE 245 4026929926531',
      price: 19_790,
      description: `тип: калимба
      основной материал: дерево
      цвет: коричневый`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/hb7/50548321550366/se-245-sela-kalimba-mahagoni-17-zungen-104750233-1.jpg",
      url: "https://kaspi.kz/shop/p/sela-se-245-4026929926531-104750233/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Music",
      name: 'Цифровое пианино Lexington DP720 White',
      price: 169_900,
      description: `тип: цифровое пианино
      обучение: Нет
      количество клавиш: 88
      корпус: классический`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h66/49609459171358/lexington-dp720-white-103356142-4.jpg",
      url: "https://kaspi.kz/shop/p/lexington-dp720-white-103356142/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Music",
      name: 'Губная гармошка InterPresent 8860 серебристый',
      price: 1_806,
      description: `тип: губная гармошка
      для детей: Да
      материал корпуса: пластик
      цвет: серебристый`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/h03/48481936244766/interpresent-8860-serebristyj-103547947-1.jpg",
      url: "https://kaspi.kz/shop/p/interpresent-8860-serebristyi-103547947/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Music",
      name: 'Электрогитара Fender American Professional II Telecaster Dark Night 011-3940-761 синий',
      price: 1_322_400,
      description: `тип: электрогитара
      количество струн: 6
      форма корпуса: telecaster
      для левшей: Нет`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/hf8/69455736471582/fender-american-professional-ii-telecaster-dark-night-011-3940-761-sinii-109088291-1.jpg",
      url: "https://kaspi.kz/shop/p/fender-american-professional-ii-telecaster-dark-night-011-3940-761-sinii-109088291/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Music",
      name: 'Скрипка R.Empire 3/4 Brown',
      price: 39_982,
      description: `тип: скрипка
      размер: 3/4
      гриф: кедр
      цвет: коричневый`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h35/hb7/32018679627806/r-empire-3-4-brown-100010202-1.jpg",
      url: "https://kaspi.kz/shop/p/r-empire-3-4-brown-100010202/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Clothes",
      name: 'Костюм Бока 1576 черный 52',
      price: 15_000,
      description: `модель: карнавальный костюм
      тематика: мультфильмы и сказки, ,киногерои
      состав: полиэстер
      комплектация: Туника, капюшон`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/h7b/66967632576542/boka-1576-chernyi-108078769-1.jpg",
      url: "https://kaspi.kz/shop/p/boka-1576-chernyi-52-108078775/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Clothes",
      name: 'Костюм Funny Republic sumoman1 бежевый 1.5-2 м',
      price: 32_827,
      description: `модель: костюм
      тематика: национальные костюмы, ,профессия, ,новогодние костюмы
      состав: полиэстер
      комплектация: Костюм`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/hca/50542684373022/funny-republic-sumoman1-bezhevyi-1-5-2-m-104747440-2.jpg",
      url: "https://kaspi.kz/shop/p/funny-republic-sumoman1-bezhevyi-1-5-2-m-104747440/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Clothes",
      name: 'Костюм Carnaval мишка Тедди 812692 коричневый универсальный',
      price: 250_000 ,
      description: `модель: карнавальный костюм
      тематика: животные и зверушки
      состав: полиэстер
      комплектация: Зарядное устройство-1 шт , Нагнетатель воздуха-1 шт, Жилет оператора- 1шт, аккумуляторная батарея , Костюм с обувью`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5e/69137115185182/carnaval-mishka-teddi-812692-korichnevyi-108947437-1.jpg",
      url: "https://kaspi.kz/shop/p/carnaval-mishka-teddi-812692-korichnevyi-universal-nyi-108947442/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Clothes",
      name: 'Костюм LALINA FASHION BRAND 220029 48',
      price: 13_500,
      description: `комплектация: футболка, ,шорты
      рукава: 3/4
      состав: эластан, ,хлопок
      узор: однотонный`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h27/51898262224926/lalina-fashion-brand-220029-105156454-1.jpg",
      url: "https://kaspi.kz/shop/p/lalina-fashion-brand-220029-48-104988018/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Clothes",
      name: 'Костюм Funny Republic Kingkong10052026 черный 56',
      price: 490_350,
      description: `модель: карнавальный костюм
      тематика: животные и зверушки
      состав: шерсть
      комплектация: Костюм- 1 шт`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/haa/67455129747486/funny-republic-kingkong10052026-chernyi-56-108282052-3.jpg",
      url: "https://kaspi.kz/shop/p/funny-republic-kingkong10052026-chernyi-56-108282052/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Sport",
      name: 'Скейтборд CityRover SK1 черный 22',
      price: 95_040,
      description: `тип: скейтборд
      для детей: Да`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h05/31972902535198/cityrover-sk1-cernyj-22-100192797-1.jpg",
      url: "https://kaspi.kz/shop/p/cityrover-sk1-chernyi-22-100192797/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Sport",
      name: 'Винтовка Hatsan 231295 4.5 мм',
      price: 132_000 ,
      description: `принцип работы: пружинно-поршневой
      мощность выстрела: 205 м/с
      вес: 2750 г
      сертификат: не требуется`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/hc5/52080328245278/bystros-emnyj-adapter-hatsan-231295-105607710-1.jpg",
      url: "https://kaspi.kz/shop/p/vintovka-hatsan-231295-4-5-mm-105607710/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Sport",
      name: 'Аксессуар Donic Schildkrot 758221',
      price: 47_900,
      description: `тип: ракетка
      количество предметов: 2`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/he2/61798754156574/donic-schildkrot-758221-106114303-1.jpg",
      url: "https://kaspi.kz/shop/p/donic-schildkrot-758221-106114303/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Sport",
      name: 'Метательный нож GRAND WAY YF030 черный',
      price: 5_693,
      description: `количество в наборе: 3
      длина: 23 см
      материал: нержавеющая сталь
      комплектация: чехол`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h79/h13/46152963784734/grand-way-yf030-102437758-1.jpg",
      url: "https://kaspi.kz/shop/p/grand-way-yf030-chernyi-102437758/?c=750000000#!/item",
      rating: 5,
      likes: 0
    },
    {
      category: "Sport",
      name: 'Мангал Grillver Печенег',
      price: 42_000,
      description: `тип: складной
      материал корпуса: сталь
      ширина: 31.5 см
      длина: 46 см
      высота: 29 см`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/h9c/50406002130974/grillver-peceneg-35000001-9.jpg",
      url: "https://kaspi.kz/shop/p/grillver-pecheneg-35000001/?c=750000000#!/item",
      rating: 5,
      likes: 0
    }
  ];
  categories = [
    {name: "Gadgets"},
    {name: "Clothes"},
    {name: "Music"},
    {name: "Sport"},
  ]

  selectedCategory!: string;
  filteredProducts!: any[];

  ngOnInit() {
    this.filterProducts();
  }
  
  categorySelected(category: string) {
    this.selectedCategory = category;
    this.filterProducts();
  }

  filterProducts() {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
    } else {
      this.filteredProducts = this.products;
    }
  }

  

}
