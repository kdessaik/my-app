import './Navbar.css'
const Navbar = () => {

  return ( 
    <div className="navbar">
      <h1 id="Myname1"><img src={require('../images/df.jpg')}/>Dessai</h1>
      <div id='Nav-elements'>
      <a href=''><h4>Home</h4></a>
      <a href=''><h4>About</h4></a>
      <a href=''><h4>Portfolio</h4></a>
      <a href=''><h4>Pages</h4></a>
      <a href=''> <button className='btn btn-primary' id='donate'> Donate </button></a>
      
      </div>
      <div id='email'>
        <img src={require('../images/message1.jpg')}/>
      <a id='email1' href='Kdessaikibeho@gmail.com'>Kdessaikibeho@gmail.com</a>
      </div>
    </div>
    
    
   );
}

 
export default Navbar;
