import footerImage1 from "./../../assets/images/footer-image1.png";
import footerImage2 from "./../../assets/images/footer-image2.png";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer-title">
        Discover Pokémon Cards Like Never Before!
      </h2>
      <div className="footer-image">
        <img src={footerImage2} alt="Pokémon Card" />
        <img src={footerImage1} alt="Pokémon Card" />
      </div>
    </div>
  );
};

export default Footer;
