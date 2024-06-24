import TypewriterComponent from "./TypewriterComponent"
import { BoldFont } from "@/utils/fonts"

const Hero = () => {
    return (
        <header>
            <div className="w-full bg-center bg-cover h-screen" style={{
                backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/bddc/80a6/44997b087a973e883f7b569df1ca790c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pLzfl8CsDLQiFYJ94Ohf8dn7BYk~S6nKAwxJmYEzifZUvcFtFTmoEJBhKkF5YVSSC5KXNFJLFEAOH5wd018oOvdFe1PBIMuKTFVG9EqXW50eacCQTbQkqNWGeDoCh9SZCesujXMASmu9Mofd0kjg2psidYjbgB1d1qayx3TOFu1r8SAs2ZBKDkxw9-STuxdvw8qzBTgx2wb2vSDW86jZ2NGTwH1ergYbd8AiZ4wFDZzhIcP-HMpFOUVVZYGD2PgOlp4YL~XCA1mARcB65nJ3VkZywYQw3Bk11S~PD~lPfF5EXd~dcrXQyXK5cRkaARjc-NdVPbSOrW7pDaTR4kK4Kg__")',
            }}>
                <div className="flex items-center justify-center w-full h-full">
                    <div className={`text-center text-6xl md:text-7xl lg:text-9xl text-white ${BoldFont.className}`}>
                        <TypewriterComponent />
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Hero
