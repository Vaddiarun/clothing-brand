import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const Category=[{name:"Pinaform",
    value:"pinaform",
    imageUrl:"https://sc04.alicdn.com/kf/Uebcf82a2bb484ab28514dfdd0f35798cK.png",
  },
  {name:"Skirts",
    value:"skirts",
    imageUrl:"https://media.very.co.uk/i/very/PK9CM_SQ1_0000000005_GREY_ASf?$pdp_300x400_x2$&fmt=jpg"

  },
  {name:"Frock",
    value:"frock",
    imageUrl:"https://www.wholesaledancedress.com/image/cache/catalog/girls-boys-brithish-style-school-uniforms-childrens-primary-school-uniform-graduation-dress-547522514953-800x800.jpg"
  },
  {name:"Chudidhar",
    value:"chudidhar",
    imageUrl:"https://www.kothariuniforms.com/wp-content/uploads/2016/01/CC4.jpg"
  },
  {name:"Half pant",
    value:"halfpant",
    imageUrl:"https://5.imimg.com/data5/SELLER/Default/2023/9/344593799/GR/OS/VX/153555184/school-uniform-shorts-500x500.jpg"
  },
  {name:"Trousers",
    value:"trousers",
    imageUrl:"https://assets.digitalcontent.marksandspencer.app/image/upload/w_1024,q_auto,f_auto/SD_04_T76_3643_F0_X_EC_0"
  },
  {name:"Shirts",
    value:"shirts",
    imageUrl:"https://www.ackermans.co.za/cdn/shop/files/PR24505BI109627_191008_UNISEX_SHORT_SLEEVE_COLLAR_SHIRT_WHITE_WHITE_14_1_2_SZ4.webp?v=1729349562"
  },
  {name:"Waistcoat",
    value:"waistcoat",
    imageUrl:"https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/m/29/219f6035-f022-4b23-a77e-cf1f14fa5462.jpg"
  },
  {name:"Tshirts",
    value:"tshirts",
    imageUrl:"https://5.imimg.com/data5/WN/VM/AN/SELLER-31043671/house-uniform.jpeg"
  },
  {name:"Trackpants",
    value:"trackpants",
    imageUrl:"https://s.alicdn.com/@sc04/kf/H1432c1cec2ca4b6592b70b9eefe0361bw.jpg"
  },
  {name:"Shoes",
    value:"shoes",
    imageUrl:"https://m.media-amazon.com/images/I/81l3cqUKVTL._AC_UY1000_.jpg"
  },
  {name:"tie",
    value:"tie",
    imageUrl:"https://www.tiemart.com/cdn/shop/articles/unnamed_6aee1fbe-219e-4541-9f98-dea04355eec4_750x.jpg?v=1705614497"
  },
]
  return (
    <div className="p-4">
  {/* <h1 className="text-2xl font-bold mb-6">Select Category</h1> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    {Category.map((product) => (
      <Link to={`/category/${product.value}`} key={product.id}>
        <div
          className="bg-transparent border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-cover object-center" 
            style={{ objectFit: "cover", height: "500px", minHeight: "160px" }} // Ensure full height is maintained
          />
          <div className="p-4">
            <h2 className="bg-transparent text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>
    
    
  );
};

export default Home;
