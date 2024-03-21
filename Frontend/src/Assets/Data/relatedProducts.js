import p1_img from '../Images/product_1.png'
import p4_img from '../Images/product_4.png'
import p27_img from "../Images/product_27.png";
import p14_img from "../Images/product_14.png";

let data_product = [
    {
        id: 1,
        name: "Floral Print Ruffle Sleeve Peplum Top",
        image: p1_img,
        cur_price: 500.00,
        old_price: 800.50,
    },
    {
        id: 14,
        name: "Crewneck Sweatshirt",
        category: "men",
        image: p14_img,
        cur_price: 600.0,
        old_price: 1000.5,
        review: 50,
    },
    {
        id: 27,
        name: "Rainbow Striped Cardigan",
        category: "kid",
        image: p27_img,
        cur_price: 85.0,
        old_price: 120.5,
        review: 260,
    },
    {
        id: 4,
        name: "Sequin Embellished Graphic Sweatshirt",
        image: p4_img,
        cur_price: 1000.00,
        old_price: 1500.00,
    },
];

export default data_product;
