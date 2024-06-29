import Image from "next/image";
import Styles from "@/styles/home.module.css"
import Fonts from "@/styles/font.module.css"

// components
import {Button} from "@/components/atoms/button"
import {way, products, bestSelling} from "@/const/dummy"

export default function Home() {
  return (
    <main className="min-h-screen flex-col mt-2">
        <div className={`${Styles['wrapper-banner']} text-black flex flex-col gap-10 justify-center `}>
          <div className={`${Styles['content-banner']} flex-col flex gap-10`}>
            <div>
                <div className="flex font-medium text-xs">
                  <hr className={`${Styles.hr}}`}></hr>
                  <h6 className={`${Styles['font-cabin-regular']} text-xs`}>MORE THAN JUST JEWELLERY</h6>
                </div>
            </div>
            <h1 className={`${Fonts['font-diamonds-c']} font-bold text-6xl`}>
              Elegance & Eternity.
            </h1>
            <h5 className={`${Styles['font-cabin-regular']} text-xs text-gray-500`}>
                FINELY CRAFTED LAB-GROWN MOISSANITE JEWELLERY
            </h5>
            <Button title="SHOP COLLECTIONS" color={"#ffff"} backgroundColor="#9B622F"/>
          </div>
        </div>


        <div className="parent-wrapper py-20" style={{backgroundColor: "#ffff"}}> 
          {/* how to buy */}
          <div className="flex flex-wrap text-black items-center justify-center gap-20" style={{}}>
              {way.map((data)=> (<div key={data.no} className={`${Styles['font-cabin-regular']} flex items-start gap-4`}>
                  <Image alt={data.sub} width="30" height="30" src={data.assets}/>
                  <div>
                    <h4 className="font-bold text-xs mb-2">{data.title}</h4>
                    <h6 className="text-xs text-gray-500">{data.sub}</h6>
                  </div>
              </div>))}
          </div>
          
          {/* products */}
          <div className={`${Styles['wrapper-products']} my-20`}>
            {products.map((product) => (
                <div className={`${Styles[`item-${product.no}`]} ${Styles['bg-global']}`} key={product.no}>
                    <Image alt={`product-${product.no}`} className={`${Styles['images']}`} src={product.assets} width="350" height="350" />
                    <div className={`${Styles.text}`}>
                      <h6 className="font-bold">{product.title}</h6>
                      <a href="#">SHOP NOW</a>
                    </div>
                </div>
            ))}
          </div>

          {/* mini content */}
          <div className={`${Styles['wrapper-mini']} text-black my-28`}>
            <Image className={`${Styles.image}`} alt="mini" src="/image 29.png" width={400} height={560}/>
            <div className={`${Styles["content"]}`}>
              <h1 className={`${Fonts['font-diamonds-c']} text-5xl font-bold mb-10`}>Luxury Defined By Style, Not Price.</h1>
              <h6 className={`${Fonts['font-cabin-regular']}`}>Moissanites are lab-grown gemstones, crafted by the most skilled hands to create a sparkle that is a class of its own.

                Every piece of moissanite comes with a certification as a testament to its quality. This gemstone is also durable, second only to diamonds in terms of hardness.
                Hence, your fine jewellery pieces from Le Diamonds cannot be easily scratched and keep their fire well. Due to its hardness, we are also able to create dazzling cuts that will shine brightly on you.

                Our attention to quality and detail ensures that all our moissanite jewellery is a work of art that you can be proud to wear.</h6>
            </div>
          </div>

          {/* best selling */}
          <div className={`${Styles['wrapper-best-selling']}`}>
            <div className={`${Styles['best']}`}>
                <h1 className="font-bold text-3xl mb-4">our Best Selling
                Products</h1>
                <Button title="SHOP COLLECTIONS" color="#ffff" backgroundColor="#9B622F"/>
            </div>

            {
              bestSelling.map((product)=> (
                <div key={product.no} className={`${Styles[`seller`]}`}>
                    <Image src={product.img} width={200} height={200} alt="beest-seller"/>
                    <h6 className={`${Fonts["font-cabin-regular"]} font-bold text-xs`}>{product.title}</h6>
                    <p className="text-xs text-gray-500">{product.price}</p>
                </div>
              ))
            }

          </div>

        </div>

            {/* recent blogs */}
          <div className={`${Styles["blogs-wrapper"]} my-10`}>
              <h1>Recent Blogs</h1>
              <div className="card-wrapper">
                <div className="card"></div>
              </div>
          </div>
    </main>
  );
}
