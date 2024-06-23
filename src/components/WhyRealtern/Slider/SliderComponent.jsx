"use client";
import Marquee from "react-fast-marquee";
import Card from "./EachSliderCard";
import data from "./CardData";

const SliderComponent = () => {
    return (
        <div className="relative flex h-max w-full items-start justify-center overflow-hidden sm:items-center">
            <Marquee autoFill pauseOnClick speed={85}>
                {data.map((item, i) => (
                    <div key={i} className="mx-3 md:mx-4">
                        <Card
                            imgUrl={item.img}
                            title={item.title}
                            description={item.desc}
                            subText={item.sub}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default SliderComponent;
