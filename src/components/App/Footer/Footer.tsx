import './Footer.scss';

function Footer() {
  return (
    <div className="footer-container">
      <a href="https://portfolio-jeremy-breton.netlify.app/" target="blank">
        <p>Crée par Jérémy Breton</p>
      </a>
      <a href="https://github.com/JeremyBreton" target="blank">
        <img src="/github.png" alt="" srcset="" />
      </a>
      <a href="https://www.linkedin.com/in/jeremy-breton-dev/" target="blank">
        <img src="/linkedin.png" alt="" srcset="" />
      </a>
    </div>
  );
}

export default Footer;
