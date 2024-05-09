import { useState } from 'react';
import Head from './header.jsx';


const products = [
  {
    index: '1',
    image: "https://assets.ajio.com/medias/sys_master/root/20211202/qE87/61a8e44daeb2690110eb56ca/boat_black_%26_blue_boat_rockerz_400_rtl_bluetooth_headphone_with_high_definition_sound_upto_8_hrs_playtime.jpg",
    name: 'Boat Headphone',
    rate: 1500,
    issold: true,
    isadded: false,
  },
  {
    index: '2',
    image: "https://5.imimg.com/data5/SELLER/Default/2021/2/JU/ST/HU/99149733/1.jpg",
    name: 'Boat Bluetooth Headphones',
    rate: 2500,
    issold: false,
    isadded: false,
  },
  {
    index: '3',
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11888942/2023/12/7/5a73de0d-4ff4-47e4-ba5f-0d74abad8acc1701940940734-boAt-Airdopes-131-TWS-Earbuds-9481701940940693-15.jpg",
    name: 'Boat Airdopes',
    rate: 3000,
    issold: true,
    isadded: false,
  },
  {
    index: '4',
    image: "https://rukminim2.flixcart.com/image/850/1000/kgqvlow0/smartwatch/5/d/g/storm-android-ios-boat-original-imafwwzpp5zmyrdn.jpeg?q=90&crop=false",
    name: 'Boat SmartWatch',
    rate: 4000,
    issold: true,
    isadded: false,
  },
  {
    index: '5',
    image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/n/y/nyfboat000019_1_48f11a09.jpg?rnd=20200526195200&tr=w-512",
    name: 'Boat Wired Earphones',
    rate: 500,
    issold: true,
    isadded: false,
  },
  {
    index: '6',
    image: "https://media.croma.com/image/upload/v1684557901/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/273217_7_oe9fvt.png",
    name: 'Boat Bluetooth Speaker',
    rate: 3000,
    issold: false,
    isadded: false,
  },
  {
    index: '7',
    image: "https://m.media-amazon.com/images/I/71o48XliAmL.jpg",
    name: 'Boat Stone Speaker',
    rate: 5000,
    issold: false,
    isadded: false,
  },
  {
    index: '8',
    image: "https://m.media-amazon.com/images/I/41nEN7g6-pL.jpg",
    name: 'Boat Fast Charger',
    rate: 1000,
    issold: true,
    isadded: false,
  },
];

const Shopcart = () => {
  const [addcart, selected] = useState([]);

  const addToCart = (index) => {
    const isItemInCart = addcart.includes(index);
    if (!isItemInCart) {

      selected([...addcart, index]);
      return addcart.includes(item);
    }
  };

  const isItemSold = (item) => {

    return addcart.includes(item);
  };



  return (
    <div>
      <Head size={addcart.length} />

      <div style={{ padding: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          products.map((value) => (
            <div>
              <div className='product'>
                {isItemSold(value.index) && (<i style={{ position: 'absolute', top: 10, right: 10, color: 'red' }} class="fa-solid fa-tag">{'sold'}</i>)}
                <img style={{ height: '350px', width: '300px' }} src={value.image}></img>
                <div className='proname'>
                  <h3 style={{ paddingBottom: '0' }}>{value.name}</h3>
                  <h3></h3>
                  <i style={{ padding: '10px', paddingTop: '0' }} class="fa-solid fa-indian-rupee-sign">{value.rate}</i><br></br>
                  <button className='btn' onClick={() => addToCart(value.index)}>{isItemSold(value.index) ? 'Remove' : 'Add to Cart'}</button>
                </div>
              </div>
            </div>
          ))
        };

      </div>
      <div className='footer'>
        <h2 style={{ paddingTop: '30px' }}>{"' Adios Amigo Powering Off '"}</h2>
      </div>
    </div>
  )
};

export default Shopcart
