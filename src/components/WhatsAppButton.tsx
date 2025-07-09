

const WhatsAppButton = () => {
  const phoneNumber = "+447909317995";
  const message = "Hola, me interesa conocer más sobre las oportunidades de inversión en Buenos Aires.";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/lovable-uploads/e355cc0f-59a3-456f-8360-e64ba6394c00.png" 
        alt="WhatsApp" 
        className="h-20 w-20 hover:scale-110 transition-transform duration-300" 
      />
      <div className="absolute right-full mr-4 bg-neutral-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Contactar por WhatsApp
      </div>
    </button>
  );
};

export default WhatsAppButton;