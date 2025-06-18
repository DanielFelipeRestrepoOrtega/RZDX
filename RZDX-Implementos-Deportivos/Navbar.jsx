import { FaShoppingCart, FaStore } from 'react-icons/fa';

const Navbar = ({ cartItems, onHomeClick, onCartClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={onHomeClick}>
         <img src="https://res.cloudinary.com/dvoakblan/image/upload/v1750188186/logo_jnafhw.png" alt="Logo" width={50} />
        <span className="company-name">RZDX Implementos Deportivos</span>
      </div>
      
      <ul className="nav-links">
        <li onClick={onHomeClick}>Inicio</li>
        <li><a href='#about'>Sobre Nosotros</a></li>
        <li>Productos</li>
        <li>Categorías</li>
        <li><a href='#contact'>Contacto</a></li>
      </ul>
      
      <div className="cart-icon-container" onClick={onCartClick}>
        <FaShoppingCart className="cart-icon" />
        {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
      </div>
    </nav>
  );
};

export default Navbar;
