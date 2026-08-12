import Image from "next/image";

const locations = [
  { city: "Noida", type: "upcoming", color: "blue", x: 39.30, y: 35.47, address: "Noida, Uttar Pradesh", contact: "Upcoming Office", email: "info@equirusraghnall.com" },
  { city: "Jaipur", type: "current", color: "green", x: 31.38, y: 41.38, address: "Jaipur, Rajasthan", contact: "Regional Office", email: "info@equirusraghnall.com" },
  { city: "Guwahati", type: "current", color: "green", x: 79.29, y: 45.35, address: "Guwahati, Assam", contact: "Regional Office", email: "info@equirusraghnall.com" },
  { city: "Nagpur", type: "current", color: "green", x: 37.80, y: 62.77, address: "Nagpur, Maharashtra", contact: "Regional Office", email: "info@equirusraghnall.com" },
  { city: "Pune", type: "current", color: "green", x: 35.3, y: 66.16, address: "Pune, Maharashtra", contact: "Regional Office", email: "info@equirusraghnall.com" },
  { city: "Hyderabad", type: "current", color: "green", x: 43.57, y: 68.29, address: "Hyderabad, Telangana", contact: "Regional Office", email: "info@equirusraghnall.com" },
  { city: "Vapi", type: "upcoming", color: "green", x: 27.05, y: 59.25, address: "226, Ashapura Complex, GIDC, Vapi, Valsad, Gujarat - 396195", contact: "Govind Singh", email: "info@equirusraghnall.com" },
  { city: "Mumbai - Registered Office", type: "registered", color: "registered-green", x: 28.01, y: 66.50, address: "Unit No. 16, Ground Floor, Technopolis Knowledge Park, Mahakali Caves Road, Andheri East, Mumbai", contact: "Ayesha Shankar", email: "hr@equirusraghnall.com" },
  { city: "Mumbai", type: "current", color: "green", x: 28.50, y: 70.42, address: "Unit No. 2402, 24th Floor, D-33 Turbhe MIDC Road, TTC Industrial Area, Mumbai, Maharashtra", contact: "Dinesh Shelar", email: "dineshshelar@equirusraghnall.com" },
  { city: "Ahmedabad", type: "current", color: "blue", x: 22.21, y: 57.35, address: "Upper Ground Floor, Office 8–9, Bhadani Era, VIP Road, Surat, Gujarat - 395007", contact: "Ashutosh Kedia", email: "ashutoshkedia@equirusraghnall.com" },
  { city: "GIFT City", type: "current", color: "green", x: 24.30, y: 52.69, address: "Block no. 15, GIFT SEZ, GIFT City, Gandhinagar, Gujarat - 382355", contact: "Rushikesh Gade", email: "rushikeshgade@equirusraghnall.com" },
  { city: "Surat", type: "current", color: "green", x: 26.65, y: 54.8, address: "3rd Floor, House No. 9, Magnet Corporate Park, S.G. Highway, Ahmedabad, Gujarat", contact: "Susheel Kumar Sahani", email: "susheelsahani@equirusraghnall.com" },
  { city: "Bangalore", type: "upcoming", color: "blue", x: 35.17, y: 80.57, address: "Tower A, Carlton Towers, HAL Old Airport Road, Indiranagar, Bengaluru, Karnataka - 560008", contact: "Prasad Vattimilli", email: "prasadvattimilli@equirusraghnall.com" },
  { city: "Kerala", type: "current", color: "green", x: 36.3, y: 90.63, address: "3rd Floor, Highway Heights, NH Bypass, Puthiya Road, Ernakulam, Kerala - 682032", contact: "Mahesh Kumar", email: "maheshkumar@equirusraghnall.com" },
  { city: "Delhi", type: "current", color: "green", x: 39.30, y: 32.32, address: "Office 455, 4th Floor, Agarwal Metro Heights, Netaji Subhash Place, New Delhi - 110034", contact: "Dinesh Shelar", email: "dineshshelar@equirusraghnall.com" },
  { city: "Gurugram", type: "upcoming", color: "blue", x: 38.50, y: 39.28, address: "Gurugram, Haryana", contact: "Upcoming Office", email: "info@equirusraghnall.com" },
];

const pinAssets = {
  green: "/assets/contact/location-pin-current.svg",
  blue: "/assets/contact/location-pin-upcoming.svg",
  "registered-green": "/assets/contact/location-pin-registered.svg",
};

const legend = [
  ["current", "Current locations"],
  ["upcoming", "Upcoming locations"],
  ["registered", "Registered Corporate Office"],
];

export default function OfficePresenceMap() {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-[1120px] md:mt-12">
      <div className="flex justify-center md:min-h-[720px]">
        <div className="relative aspect-square w-full max-w-[822px]">
          <Image src="/assets/contact/india-presence-map.svg" alt="" fill sizes="(max-width: 768px) 100vw, 822px" className="object-contain" aria-hidden />
          {locations.map((location) => (
            <div
              className="group absolute z-10 -translate-x-1/2 -translate-y-full hover:z-50 focus-within:z-50"
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              key={location.city}
            >
              <button type="button" className="grid size-8 place-items-center rounded-full outline-none transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:ring-2 focus-visible:ring-[#0A4E08] focus-visible:ring-offset-2 md:size-10" aria-label={`View ${location.city} office details`}>
                <Image src={pinAssets[location.color]} alt="" width={24} height={24} className="size-5 md:size-6" aria-hidden />
              </button>
              <div className="pointer-events-none invisible absolute bottom-[calc(100%+8px)] left-1/2 z-[60] w-[min(320px,80vw)] -translate-x-1/2 translate-y-1 rounded-lg bg-white p-4 text-left opacity-0 shadow-[0_4px_24px_rgba(0,0,0,0.16)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <p className="font-semibold leading-6 text-[#080808]">{location.city}</p>
                <p className="mt-1 text-xs leading-5 text-[#3d3d3d]">{location.address}</p>
                <p className="mt-3 text-xs font-medium text-[#080808]">{location.contact}</p>
                <p className="mt-1 break-all text-xs font-medium text-[#0A4E08]">{location.email}</p>
                <span className="absolute left-1/2 top-full size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-left md:absolute md:right-0 md:top-6 md:mt-0 md:block md:space-y-3">
        {legend.map(([type, label]) => (
          <div className="flex items-center gap-3 text-base font-medium text-[#080808]" key={type}>
            <Image src={pinAssets[type === "current" ? "green" : type === "upcoming" ? "blue" : "registered-green"]} alt="" width={18} height={18} className="size-[18px]" aria-hidden />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
