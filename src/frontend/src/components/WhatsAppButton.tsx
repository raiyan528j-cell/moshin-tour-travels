import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      data-ocid="whatsapp.floating_button"
    >
      {/* Tooltip */}
      <div
        className={`bg-foreground text-primary-foreground text-sm font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
        role="tooltip"
      >
        Chat with us on WhatsApp
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-foreground" />
      </div>

      <a
        href="https://wa.me/917060535667?text=Hello%20I%20want%20to%20book%20a%20taxi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp to book a taxi"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)]"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        }}
      >
        {/* Ping ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: "#25D366", opacity: 0.35 }}
          aria-hidden="true"
        />
        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          aria-hidden="true"
          fill="white"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.219 6.348L4.5 28.5l7.373-1.707A11.935 11.935 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-1.87 0-3.617-.52-5.109-1.422l-.36-.22-4.376 1.015 1.041-4.267-.237-.38A9.956 9.956 0 016 15c0-5.514 4.486-10 10-10zm-3.45 5.5c-.24 0-.623.09-.951.447-.327.358-1.25 1.222-1.25 2.98 0 1.757 1.281 3.455 1.46 3.695.178.24 2.512 3.83 6.089 5.218 3.578 1.388 3.578.925 4.225.868.647-.057 2.09-.854 2.385-1.68.294-.824.294-1.53.206-1.68-.088-.147-.324-.236-.68-.412-.355-.178-2.09-1.032-2.415-1.149-.323-.118-.559-.177-.795.178-.237.355-.913 1.149-1.12 1.385-.206.236-.412.265-.766.09-.353-.178-1.493-.55-2.844-1.754-1.05-.938-1.761-2.094-1.967-2.449-.206-.355-.022-.547.155-.724.16-.158.354-.412.531-.618.178-.206.237-.355.355-.59.119-.236.06-.442-.03-.62-.088-.178-.784-1.902-1.079-2.604-.284-.68-.574-.588-.795-.598l-.677-.012z" />
        </svg>
      </a>
    </div>
  );
}
