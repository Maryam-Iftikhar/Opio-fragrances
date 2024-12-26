import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import velvetImage from "../Assets/Best-seller/velvet.jpg";
import divineImage from "../Assets/Best-seller/divine.jpg";
import orleneImage from "../Assets/Best-seller/orlene.jpg";
import sparkleImage from "../Assets/Best-seller/sparkle.jpg";

const Item = () => {
  return (
    <>
      <div className="product-container">
        {/* Image Gallery */}
        <div className="image-gallery">
          <div className="thumbnail-images">
            <img
              src={velvetImage}
              alt="Thumbnail 1"
              className="thumbnail"
            />
            <img
              src={divineImage}
              alt="Thumbnail 2"
              className="thumbnail"
            />
            <img
              src={orleneImage}
              alt="Thumbnail 3"
              className="thumbnail"
            />
          </div>
          <img
            className="featured-image"
            src={sparkleImage}
            alt="Featured Product Image"
          />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <h1 className="product-title">PLUSH</h1>
          <div className="product-price">$49.99</div>
          <hr className="divider" />
          <p className="product-description">
            Introducing 'PLUSH' - a captivating and elegant floral perfume
            designed for the modern woman. This exquisite scent combines the
            sweetness of rose petals, the subtlety of jasmine, and the freshness
            of orange blossom, evoking the essence of a lush garden in full bloom.
          </p>
          <div className="disclaimer-box">
            <strong>Disclaimer:</strong>
            We offer fragrances that compete with designer brands, but we do not
            use their exact fragrances or have any affiliation with the designer
            brands or their manufacturers. All trademarks are the property of
            their respective owners. We use designer/brand names solely for
            comparison purposes, to give customers an idea of each fragrance's
            character and scent accords. Please note that our fragrances are not
            exact copies of the designer brands, but rather our own unique
            interpretations.
          </div>
          <div className="action-buttons">
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Full Description Section */}
      <div className="full-description-section">
        <h2 className="description-title">Description</h2>
        <p className="description-paragraph">
          Introducing 'PLUSH' - a captivating and elegant floral perfume designed
          for the modern woman. This exquisite scent combines the sweetness of
          rose petals, the subtlety of jasmine, and the freshness of orange
          blossom, evoking the essence of a lush garden in full bloom.
        </p>
        <div className="fragrance-notes">
          <strong className="note-heading">TOP NOTES:</strong>
          Pear, Tangerine, Blackcurrant, and Bergamot.
        </div>
        <div className="fragrance-notes">
          <strong className="note-heading">MIDDLE NOTES:</strong>
          Orange Blossom, Jasmine, and Rose.
        </div>
        <div className="fragrance-notes">
          <strong className="note-heading">BASE NOTES:</strong>
          Sandalwood, Amber, and Patchouli.
        </div>
      </div>
    </>
  );
};

export default Item;
