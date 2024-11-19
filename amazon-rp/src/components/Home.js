import headphones from "../images/headphones.jpg";
import monitor from "../images/monitor.jpg";
import tv from "../images/tv.jpg";
import powerbank from "../images/powerbank.jpg";
import laptop from "../images/laptop.jpg";
import earphones from "../images/earphones.jpg";
import "../components/Home.css";

import Product from "./Product";

function Home() {
  return (
    <>
      <div className="main-holder">
        <div className="home-pager-1">
          <Product
            image={headphones}
            id="34713095130"
            title="Wireless Bluetooth Headphones"
            price="$49.99"
            rating="⭐⭐⭐⭐"
          />
          <Product
            image={monitor}
            id="34713095131"
            title="Smartwatch with Heart Rate Monitor"
            price="$149.99"
            rating="⭐⭐⭐⭐☆"
          />
          <Product
            image={tv}
            id="34713095132"
            title="4K Ultra HD Smart TV - 55 inch"
            price="$399.99"
            rating="⭐⭐⭐⭐⭐"
          />
        </div>

        <div className="home-pager-2">
          <Product
            image={powerbank}
            id="34713095133"
            title="Portable Power Bank 10000mAh"
            price="$29.99"
            rating="⭐⭐"
          />
          <Product
            image={laptop}
            id="34713095134"
            title="Gaming Laptop - 16GB RAM, 512GB SSD"
            price="$899.99"
            rating="⭐⭐⭐⭐⭐"
          />
        </div>

        <div className="home-pager-3">
          <Product
            image={earphones}
            id="34713095135"
            title="Noise Cancelling Over-Ear Headphones"
            price="$89.99"
            rating="⭐⭐⭐⭐☆"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
