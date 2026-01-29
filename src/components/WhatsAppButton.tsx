// import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsAppChat } from "@/utils/whatsapp";

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => openWhatsAppChat()}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl whatsapp-pulse"
      aria-label="Chat with us on WhatsApp"
    >
      {/* <MessageCircle className="h-7 w-7" fill="white" /> */}
      <FaWhatsapp className="h-7 w-7" />
    </button>
  );
};

export default WhatsAppButton;


