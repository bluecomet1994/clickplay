import { Row, Col } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { Button } from "@mui/material";

const domain = "http://clickplay.pro/";

const ShareBar = () => {

  const handleWhatsAppClick = () => {
    const message = "Play fun click games! " + domain;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="sharebar-container">
      <div className="social-row">
      <Button
        className="default-button"
        size="sm"
        href={
          "https://www.facebook.com/sharer/sharer.php?u=" +
          domain +
          "&quote=" +
          encodeURIComponent("Play fun click games! " + domain)
        }
        target="_blank"
      >
        <p className="social-text">Facebook</p>
        <FaFacebookF className="social-icon" />
      </Button>

      <Button
        className="default-button social-outline"
        size="sm"
        href={
          "https://twitter.com/intent/tweet?text=" +
          encodeURIComponent("Play fun click games! " + domain)
        }
        target="_blank"
      >
        <p className="social-text">Twitter</p>
        <BsTwitter className="social-icon" />
      </Button>
      </div>

      {/* <Col className="p-1" xs="2" style={{ maxWidth: "120px" }}>
        <Button
          style={{ width: "100%" }}
          className="mt-2 share-stats-btn messenger-share"
          size="sm"
          href={
            "https://www.facebook.com/dialog/share?app_id=12345&display=popup&href=" +
            encodeURIComponent(
              "Try this Math Wordle challenge! " +
              domain
            )
          }
          target="_blank"
        >
          <i className="fab fa-facebook-messenger me-1"></i>
          <span className="share-text">Share</span>
        </Button>
      </Col> */}

      {/* <Col className="p-1" xs="2" style={{ maxWidth: "120px", marginRight: "20px" }}>
        <Button
          style={{ width: "90%", backgroundColor: "#24CC63", borderColor: "#24CC63" }}
          className="mt-2 share-stats-btn whatsapp-share"
          size="sm"
          href={"whatsapp://send?text=" + encodeURIComponent(
            "Try this Math Wordle challenge! " +
            domain
          )}
          target="_blank"
        >
          <i className="fab fa-whatsapp me-1"></i>
          <span className="share-text">Whatsapp</span>
        </Button>
      </Col> */}


<div className="social-row reverse-social">

      <Button
        className="default-button"
        size="sm"
        href={
          "https://www.reddit.com/submit?url=" +
          domain +
          "&title=" +
          encodeURIComponent("Play fun click games! " + domain)
        }
        target="_blank"
      >
        <p className="social-text">Reddit</p>
        <FaRedditAlien className="social-icon" />
      </Button>

      <Button
        className="default-button social-outline"
        size="sm"
        onClick={handleWhatsAppClick}
        target="_blank"
      >
        <p className="social-text">WhatsApp</p>
        <RiWhatsappFill className="social-icon" />
      </Button>
</div>
    </div>
  );
};

export default ShareBar;
