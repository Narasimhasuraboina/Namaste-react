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
 
 const RestaurantCard=()=>{
  return(
    <div className="res-card" style={{backgroundColor:"yellow"}}>
  <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/0ca95ccd-0cf2-4ed2-9b92-6837c1d63f55_646830.JPG" alt="res-img" />
      <h3>
      Avinash restaurant
      </h3>
      <h4>Biryani, North Indian, asian</h4>
      <h6>4.6</h6>
    </div>
  );
 }
 const Body=() =>{
  return(
    <div className="body">
       <div className="search">search</div>
       <div className="res-container ">
        {/*restaurantCard*/}
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        
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