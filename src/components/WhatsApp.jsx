import { IoLogoWhatsapp } from "react-icons/io"; // Update the path accordingly

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Open a direct message to the owner using a link with the owner's WhatsApp number
    window.open("https://wa.me/+447908147313", "_blank");
  };

  return (
    <div
      className="bg-white rounded-lg px-4 py-1"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000", // Ensure it appears above other content
        cursor: "pointer",
        display: "flex"
      }}
      onClick={handleWhatsAppClick}
    >
        <h1 className="text-green-400 font-serif text-[1.5vw] pt-4 pr-3 animate-bounce">ChatNow</h1>
        <IoLogoWhatsapp  style={{ width: "50px", height: "50px" , color: "green"}}/>
        
    </div>
  );
};

export default WhatsAppButton;