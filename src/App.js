 const Header = () =>{
  return(
  <div className="header">
    <div className="logo-container">
        <img src="restraunt/public/ restaurant-logo-10.webp" alt="restraunt logo"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
         <li>About us</li>
          <li>Contact us</li>
           <li>Cart</li>
      </ul>
    </div>

  </div>
  );
 }
 
 const RestaurantCard=(props)=>{
  const {Resdata}=props;
  return(
    <div className="res-card" style={{backgroundColor:"yellow"}}>
  <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/0ca95ccd-0cf2-4ed2-9b92-6837c1d63f55_646830.JPG" alt="res-img" />
      <h3>
      {Resdata.name} 
     </h3>
     <h4>{Resdata.cuisines}</h4>
      <h6>4.6</h6>
    </div>
  );
 }
 const resobj={
  name: "Paradise Biryani",
  rating: 4.3,
  deliveryTime: 35,
  location: "Vijayawada",
  isOpen: true,

  cuisines: ["Biryani", "North Indian", "Chinese"],

  offers: [
    {
      title: "20% OFF",
      minOrder: 299
    },
    {
      title: "FREE DELIVERY",
      minOrder: 199
    }
  ],

  menu: [
    {
      name: "Chicken Biryani",
      price: 249,
      rating: 4.5,
      isVeg: false
    },
    {
      name: "Mutton Biryani",
      price: 329,
      rating: 4.4,
      isVeg: false
    },
    {
      name: "Paneer Biryani",
      price: 229,
      rating: 4.2,
      isVeg: true
    },
    {
      name: "Veg Fried Rice",
      price: 159,
      rating: 4.1,
      isVeg: true
    }
  ]

 };
 const Body=() =>{
  return(
    <div className="body">
       <div className="search">search</div>
       <div className="res-container ">
        {/*restaurantCard*/}
        <RestaurantCard 
       Resdata={resobj}/>
           
       </div>
    </div>
  );
 }
 const App = () =>{
  return(
  <div className="App-layyout">
    <Header />
    <Body />

  </div>
  );
 }
 
 
 
 
 
 
 
 
 
 
 
export default App;