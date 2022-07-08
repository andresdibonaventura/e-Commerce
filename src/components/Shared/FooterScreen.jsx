import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Andres Di Bonaventura</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="https://www.instagram.com/andresdibonaventura/" className="redes__links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="https://www.linkedin.com/in/andr%C3%A9s-di-bonaventura-35b54a1b0/" className="redes__links">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        
      </ul>
    </footer>
  );
};

export default FooterScreen;
