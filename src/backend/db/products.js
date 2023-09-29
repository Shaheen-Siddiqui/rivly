import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "1",
    productImg:
      "https://shop.gkwretail.com/cdn/shop/products/DressingTableWhiteandGoldVanitySetwithLightedMirror_Stool_1024x1024.jpg?v=1630488000",
    title: "Nivea Pearl And Beauty Dressing Table",
    price: "256", //(discounted price)
    prePrice: "789", //(it was original price)
    discount: "59% off",
    rating: "3",
    category: "Dressing Table",
    
  },
  {
    _id: "2",
    productImg:
      "https://shop.gkwretail.com/cdn/shop/products/Design-Sofa-Set_-American-Style-Modern-Fabric-Upholstered-Sofa-Set_1.png?v=1630733506",
    title: "Villen classic 100ML Luxury fragrance",
    price: "370",
    prePrice: "899",
    discount: "39% off",
    rating: "4",
    category: "Sofa",
    
  },
  {
    _id: "3",
    productImg:
      "https://static.wixstatic.com/media/0102ae_19e73ed46c2f47828ccc6d17e5a1f1b5.jpg/v1/fill/w_598,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0102ae_19e73ed46c2f47828ccc6d17e5a1f1b5.jpg",
    title: "FOGG Scent Jasmine 50ml Eau de Luxury set",
    price: "199",
    prePrice: "499",
    discount: "59% off",
    rating: "3",
    category: "Luxury set",
    
  },
  {
    _id: "4",
    productImg:
      "https://sc04.alicdn.com/kf/Ha374d5369fa349278aa19ff350e3dc1ai.jpg",
    title: "DOVE Original Dressing Table Spray",
    price: "680",
    prePrice: "999",
    discount: "45% off",
    rating: "4",
    category: "Dressing Table",
    
  },
  {
    _id: "5",
    productImg:
      "https://i0.wp.com/woodwoon.com/wp-content/uploads/2023/02/BK0018-bed-modern-bed-design-in-pakistan-Woodwoon.webp?fit=1536%2C1024&ssl=1",
    title: "Engage Luxury set Body GAS FREE Spray ",
    price: "1200",
    prePrice: "1649",
    discount: "39% off",
    rating: "5",
    category: "Bed",
    
  },
  {
    _id: "6",
    productImg:
      "https://cdn.trendir.com/wp-content/uploads/old/interiors/2016/01/26/rustic-bedroom-with-fireplace-target-point-sardegna.jpg",
    title: "DENVER Black Code Body Body Spray",
    price: "1170",
    prePrice: "1209",
    discount: "56% off",
    rating: "3",
    category: "Bed",
    
  },
  {
    _id: "7",
    productImg:
      "https://sc04.alicdn.com/kf/H9806a200efd34ada8617181e6081ff47r.jpg",
    title: "JAGUAR Black Eau de Toilette Luxury set",
    price: "350",
    prePrice: "799",
    discount: "59% off",
    rating: "1",
    category: "Luxury set",
    
  },
  {
    _id: "8",
    productImg:
      "https://stylesatlife.com/wp-content/uploads/2019/03/luxury-bed-designs.jpg.webp",
    title: "Wild Stone LEgend, Red, US, HYDRA Body Spray",
    price: "770",
    prePrice: "1099",
    discount: "49% off",
    rating: "2",
    category: "Bed",
    
  },
  {
    _id: "9",
    productImg:
      "https://hatil.in/sites/default/files/styles/hatil_product_list_crop/public/Mystic-113_1.jpg?itok=Qx30Lv3Q",
    title: "Engage Blush Dressing Table Spray",
    price: "270",
    prePrice: "699",
    discount: "49% off",
    rating: "5",
    category: "Dressing Table",
    
  },
  {
    _id: "10",
    productImg:
      "https://4.imimg.com/data4/OB/WK/ANDROID-40686904/product-1000x1000.jpeg",
    title: "THE MAN COMPANY Non-Gas Body fragrance",
    price: "570",
    prePrice: "999",
    discount: "49% off",
    rating: "2",
    category: "Sofa",
    
  },
  {
    _id: "11",
    productImg:
      "https://shop.gkwretail.com/cdn/shop/products/Designer-Sofa-Set-Chinese-Recliner-Sectional-Designs-Kisasa-Puffy-Modern-Sofa-Set-_Grey_3.jpg?v=1616069441",
    title: "Secret temptation Te Amo combo fragrance",
    price: "450",
    prePrice: "899",
    discount: "49% off",
    rating: "1",
    category: "Sofa",
    
  },
  {
    _id: "12",
    productImg: "https://i.ytimg.com/vi/Qf1vC6ZxPYo/maxresdefault.jpg",
    title: "AXE Dark Temptation Long Lasting fragrance",
    price: "360",
    prePrice: "509",
    discount: "49% off",
    rating: "1",
    category: "Sofa",
    
  },
  {
    _id: "13",
    productImg:
      "https://www.betterhomeindia.com/wp-content/uploads/2019/03/Cosmo-bedset-betterhomeindia.jpg",
    title: "Wild Stone Ultra Sensual Eau de Luxury set",
    price: "580",
    prePrice: "789",
    discount: "34% off",
    rating: "4",
    category: "Luxury set",
    
  },
  {
    _id: "14",
    productImg:
      "https://assets.isu.pub/document-structure/230214104705-a21b91ac2f37576a76c561a6024d1d19/v1/f6ec884b6af11767c1f367ae9cb82357.jpeg",
    title: "FOGG 1 Royal and 1 Napoleon Dressing Table",
    price: "670",
    prePrice: "999",
    discount: "49% off",
    rating: "2",
    category: "Bed",
    
  },
  {
    _id: "15",
    productImg:
      "https://media.istockphoto.com/id/490358310/photo/dressing-table-art-deco-style.jpg?s=612x612&w=0&k=20&c=_qK3r-iWBJfToNQ5I0Bxj6WLFy3FpbVrjpqcVlmIgjE=",
    title: "HE Respect Perfumed Dressing Table Spray",
    price: "470",
    prePrice: "799",
    discount: "49% off",
    rating: "3",
    category: "Dressing Table",
    
  },
  {
    _id: "16",
    productImg:
      "https://www.curvesandcarvings.com/pub/media/catalog/product/cache/5928e112830e542696586a0d661d5090/b/e/bed-0256-1.jpg",
    title: "Gucci Guilty BLOOM PINK Eau de Luxury set",
    price: "560",
    prePrice: "909",
    discount: "49% off",
    rating: "3",
    category: "Luxury set",
    
  },
  {
    _id: "17",
    productImg:
      "https://media.designcafe.com/wp-content/uploads/2019/12/20235858/leather-sofa-design-for-modern-living-room.jpg",
    title: "Gucci Guilty BLOOM PINK Eau de sofa",
    price: "560",
    prePrice: "909",
    discount: "49% off",
    rating: "3",
    category: "Sofa",
    
  },
  {
    _id: "18",
    productImg:
      "https://royalzig.com/wp-content/uploads/2020/01/Classical-Egyption-Bed-Back-and-Gold-6.jpg",
    title: "Gucci Guilty BLOOM PINK Eau de Luxury set",
    price: "560",
    prePrice: "909",
    discount: "49% off",
    rating: "3",
    category: "Luxury set",
  },
];