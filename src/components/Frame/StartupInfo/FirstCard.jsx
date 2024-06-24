import { SemiBoldFont } from "@/utils/fonts";

const FirstCard = () => {
  return (
    <div
      className="relative h-60 overflow-hidden rounded-xl bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/4c0b/7405/677cd61ad4e521356fca3e08913da6ff?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H4rUGlavZ0IQr0njA82gFgp~neFM7F7lAVcOnloeVl7QGsixHguM7H01HTVAHoSGmxXfi5Pg4Lq7pUfd4s8vITvbfsKcQ30xM~1GpcbDIMe1k6SOnlJ6gF7D2Ro-~QXKQxlu2gxidYDctgyAeK~FWqlKrhaTVNHXWmocTJh0YpwDgZMktDuAgH1q8CkkOqpe2Sb7P~GNTN0-wmopC2dTbE8wbgssnwbgbtOe8eT1a3zSNUForev~wgK-jqjU5BJkC824hB~6v4s~Z~4hAVQATtj1KjafZGSs~smhOuXeO2rJNmJw7IKWXgQSsbSRYSVGpoVZ~zL0noAdOi6Lyjv7SQ__')",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="p-7 text-[32px] font-semibold leading-[3rem] text-white">
          Experience is the bridge. Build yours to your{" "}
          <span
            className={`mx-2 bg-[#DDFC9D] px-1 text-[#2C2C2C] ${SemiBoldFont.className} rounded-[5px]`}
          >
            dream{" "}
          </span>
          company
        </h2>
      </div>
    </div>
  );
};

export default FirstCard;
