'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import Card from "./EachSliderCard";
import data from "./CardData";
import { motion } from 'framer-motion'
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { useWindowSize } from '@uidotdev/usehooks';


const SliderComponent = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [buttonleft, setbuttonleft] = useState(false)
  const [buttonright, setbuttonright] = useState(false)
  const [buttonClick, setButtonClick] = useState(false)

  const { width: windowWidth } = useWindowSize()

  const arrow = {
    hover: {
      // backgroundImage: "url('../../../assets/WhyRealtern/icon-arrow-dark.svg')",
      // backgroundImage: arrowed,
      backgroundColor: '#fff',
      transitionDuration: '0ms'

    },

  }



  const handleclick = () => {
    setButtonClick(true)
    setTimeout(() => {
      setButtonClick(false)
    }, 550)
  }
  return (
    <>
      <Swiper
        slidesPerView={windowWidth > 768 ? 1.5 : 1}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        initialSlide={2}
        speed={800}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}

        className="swiper-container"
      >
        {/* <SwiperSlide>
          <Card
            imgUrl={(data[5]).img}
            title={(data[5]).title}
            description={(data[5]).desc}
            subText={(data[5]).sub}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            imgUrl={(data[4]).img}
            title={(data[4]).title}
            description={(data[4]).desc}
            subText={(data[4]).sub}
          />
        </SwiperSlide> */}

        {
          data.map((item, i) => (
            <SwiperSlide is>
              <Card

                imgUrl={item.img}
                title={item.title}
                description={item.desc}
                subText={item.sub}
              />
            </SwiperSlide>
          ))

        }


        <motion.div ref={prevRef} whileHover='hover' onMouseEnter={() => setbuttonleft(true)} onMouseLeave={() => setbuttonleft(false)} className='absolute top-[50%] translate-y-[-50%] z-[2] left-[calc(50%-366.5px)] tablet:hidden '>
          <motion.button onClick={handleclick} style={buttonClick ? { display: 'none', transitionDuration: '.2s' } : { display: 'block' }} className={`transition-[background-color] duration-[.2s] ${buttonleft ? 'arrowdark' : 'arrowbutton'}   border-solid border-[1px] border-[#fff]   bg-transparent   scale-x-[-1] rounded-[50%] w-[60px] h-[60px] bg-no-repeat bg-[50%] leading-[1.15] m-0  `} variants={arrow}  >
            {/* <Image src={arrowed} alt="" width={60} height={60} /> */}
          </motion.button>
        </motion.div>
        <motion.div ref={nextRef} whileHover='hover' onMouseEnter={() => setbuttonright(true)} onMouseLeave={() => setbuttonright(false)} className='absolute top-[50%] translate-y-[-50%] z-[2] left-auto right-[calc(50%-366.5px)] tablet:hidden '>
          <motion.button onClick={handleclick} style={buttonClick ? { display: 'none', transitionDuration: '.2s' } : { display: 'block' }} className={`  border-solid border-[1px] duration-[.2s] border-[#fff]  bg-transparent  ${buttonright ? 'arrowdark' : 'arrowbutton'} transition-colors   rounded-[50%] w-[60px] h-[60px] bg-no-repeat bg-[50%] leading-[1.15] m-0 `} variants={arrow} >
            {/* <Image src={arrowed} alt="" width={60} height={60} /> */}
          </motion.button>
        </motion.div>


        {/* <SwiperSlide>
          <Card
            imgUrl={(data[0]).img}
            title={(data[0]).title}
            description={(data[0]).desc}
            subText={(data[0]).sub}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            imgUrl={(data[1]).img}
            title={(data[1]).title}
            description={(data[1]).desc}
            subText={(data[1]).sub}
          />
        </SwiperSlide> */}




      </Swiper>
    </>
  )
}

export default SliderComponent








// 'use client'
// import Marquee from "react-fast-marquee";
// import Card from "./EachSliderCard";
// import data from "./CardData";
// // import arrowed from '../../../assets/WhyRealtern/'
// // import arrowdark from '.././../../assets/WhyRealtern/icon-arrow-dark.svg'
// // import arrowlight from '.././../../assets/WhyRealtern/icon-arrow-light.svg'
// import { motion } from 'framer-motion'
// import { useRef, useState, useEffect, useLayoutEffect } from "react";
// import { useWindowSize } from "@uidotdev/usehooks";
// import Image from "next/image";
// import rim from './../../../assets/WhyRealtern/icon-arrow-dark.svg'
// // import { blob } from "stream/consumers";

// const SliderComponent = () => {

//   const [transformSlide, setTransfromSlide] = useState(0)
//   const [buttonleft, setbuttonleft] = useState(false)
//   const [buttonright, setbuttonright] = useState(false)
//   // const cards = [
//   //     {
//   //         branch: 'Sales',
//   //         role: 'Growth Account Exective',
//   //         speciality: '',
//   //         location: 'Milan'
//   //     },
//   //     {
//   //         branch: 'Engineering',
//   //         role: 'Backend Engineer',
//   //         speciality: 'Advertising',
//   //         location: 'New York'
//   //     },
//   //     {
//   //         branch: 'Content',
//   //         role: 'Lead US Latin',
//   //         speciality: 'Artist Partnership',
//   //         location: 'Miami'
//   //     },
//   //     {
//   //         branch: 'Data, Research & Insights',
//   //         role: 'Junior Quantitative Developer',
//   //         speciality: 'Forecasting',
//   //         location: 'Stockholm'
//   //     },
//   //     {
//   //         branch: 'Engineering',
//   //         role: 'Senior Backend Engineer',
//   //         speciality: '',
//   //         location: 'New York'
//   //     },


//   // ]
//   const [cardWidth, setCardWidth] = useState(0)
//   const cardsref = useRef(null)
//   const [buttonClick, setButtonClick] = useState(false)
//   const [current, setCurrent] = useState(1)


//   const { width: windowWidth } = useWindowSize()


//   useLayoutEffect(() => {
//     // console.log(cardsref.current.getBoundingClientRect().width);
//     const handleCard = () => {
//       if (windowWidth >= 1300 && windowWidth < 1800) {
//         console.log(windowWidth);

//         setCardWidth(windowWidth / 2.2444)

//       }
//       else if (windowWidth >= 1800) {
//         setCardWidth(cardsref.current.getBoundingClientRect().width / 2.5454)

//       }
//       // console.log(windowWidth);
//       else {
//         setCardWidth(cardsref.current.getBoundingClientRect().width / 1.5173)
//       }
//     }
//     handleCard()
//     window.addEventListener('resize', handleCard)
//     return () => window.removeEventListener('resize', handleCard)
//   }, [windowWidth])

//   useEffect(() => {

//     const handle = () => {

//       const cardsrefdim = cardsref.current.getBoundingClientRect().width
//       // console.log(cardsrefdim);
//       // const cardswidthvalue = cardsrefdim.width / 2

//       // if (windowWidth >= 1300 && windowWidth < 1800) {

//       //   setTransfromSlide(-cardWidth * 1.875)

//       // }
//       // else if (windowWidth >= 1800) {
//       //   setTransfromSlide(-cardWidth * 1.289999)

//       // }
//       // else {
//       const rem = windowWidth -

//         setTransfromSlide(-cardWidth * 2 + cardsrefdim / 7.5)
//       // }

//     }
//     handle()
//     window.addEventListener('resize', handle)

//     return () => window, removeEventListener('resize', handle)
//   }, [cardWidth])

//   // console.log(current);


//   // useLayoutEffect(() => {
//   //   const transitionend = () => {
//   //     // if (current === 6) {
//   //     //   setCurrent(0)
//   //     // }
//   //     if (current === 2) {
//   //       cardsref.current.style.transitionDuration = '0ms'
//   //       // if (windowWidth >= 1300 && windowWidth < 1800) {
//   //       //   setTransfromSlide(-cardWidth * 3 + 105)

//   //       // }
//   //       // else if (windowWidth >= 1800) {
//   //       //   setTransfromSlide(-cardWidth * 2.319)
//   //       // } else {

//   //       setTransfromSlide(-windowWidth - 100 - cardWidth)
//   //       // }
//   //     }
//   //     console.log(-cardWidth);

//   //     if (current === data.length - 1) {
//   //       cardsref.current.style.transitionDuration = '0ms'
//   //       // cardsref.current.style.transitionDelay = '100ms'
//   //       if (windowWidth >= 1300 && windowWidth < 1800) {

//   //         setTransfromSlide(-cardWidth * 1.79 - cardWidth * 4 - 160)
//   //       }
//   //       else if (windowWidth >= 1800) {

//   //         setTransfromSlide(-cardWidth * 5.410)
//   //       }
//   //       else {

//   //         setTransfromSlide(-cardWidth * 1.79 - cardWidth * 4 - 80)
//   //       }

//   //     }
//   //   }
//   //   const slider = document.getElementById('slider')
//   //   // const transitionend = () => {
//   //   //   current
//   //   //   if (current === data.length - 1) {
//   //   //     cardsref.current.style.transitionDuration = '550ms'
//   //   //     // cardsref.current.style.translateX = '800px'
//   //   //     // cardsref.current.style.transitionDelay = '50ms'
//   //   //     console.log('shiva');
//   //   //     console.log(transformSlide);

//   //   //     setTransfromSlide(prev => prev + cardWidth + 20)
//   //   //   }
//   //   // }
//   //   // cardsref.current.style.transitionDuration = '500ms'
//   //   // // slider.addEventListener('transitionstart', transitionstart)
//   //   slider.addEventListener('transitionend', transitionend)
//   //   return () => {
//   //     // // slider.removeEventListener('transitionstart', transitionstart)
//   //     slider.removeEventListener('transitionend', transitionend)

//   //   }
//   // }, [current])

//   const onLeftClick = () => {
//     setButtonClick(true)
//     setTimeout(() => {
//       setButtonClick(false)
//     }, 600);
//     if (current <= 1) {
//       setCurrent(data.length)

//     } else {
//       setCurrent(prev => --prev)
//     }
//     if (windowWidth >= 1300 && windowWidth < 1800) {

//       setTransfromSlide(prev => prev + cardWidth + 20)
//     }
//     else if (windowWidth >= 1800) {
//       // setTransfromSlide(prev => prev - cardWidth - 20)
//     } else {
//       setTransfromSlide(prev => prev + cardWidth + 20)
//     }

//   }

//   // function throttle(func, delay) {
//   //   let lastCall = 0;
//   //   return function (...args) {
//   //     const now = new Date().getTime();
//   //     if (now - lastCall < delay) {
//   //       return;
//   //     }
//   //     lastCall = now;
//   //     func(...args);
//   //   };
//   // }
//   // const throttledHandleResize = throttle(onLeftClick, 500)
//   const onRightClick = () => {
//     setButtonClick(true)
//     setTimeout(() => {
//       setButtonClick(false)
//     }, 600);
//     if (current >= data.length) {
//       setCurrent(1)
//       // setTransfromSlide(-cardWidth * (2.78))
//     } else {
//       setCurrent(prev => ++prev)
//     }

//     if (windowWidth >= 1300 && windowWidth < 1800) {

//       setTransfromSlide(prev => prev - cardWidth - 20)
//     }
//     else if (windowWidth >= 1800) {
//       setTransfromSlide(prev => prev - cardWidth - 20)
//     } else {

//       setTransfromSlide(prev => prev - cardWidth - 20)
//     }


//   }
//   const arrow = {
//     hover: {
//       // backgroundImage: "url('../../../assets/WhyRealtern/icon-arrow-dark.svg')",
//       // backgroundImage: arrowed,
//       backgroundColor: '#fff',
//       transitionDuration: '0ms'

//     },

//   }
//   let transition = buttonClick ? ('550ms') : ('0ms')
//   return (
//     <>
//       <div className=" mx-auto px-[20px] lg:px-[60px] w-screen relative overflow-hidden z-[1] ">
//         <motion.div ref={cardsref} id='slider' style={{ x: transformSlide, transitionDuration: transition }} className="relative flex h-full w-full delay-75  z-[1] transition-transform   ">
//           {/* <Marquee autoFill pauseOnClick speed={85}> */}
//           <div style={{ width: cardWidth, marginRight: '20px' }} className="flex h-auto flex-shrink-0 relative transition-transform ">
//             <Card
//               imgUrl={data[data.length - 2].img}
//               title={data[data.length - 2].title}
//               description={data[data.length - 2].desc}
//               subText={data[data.length - 2].sub}
//             />
//           </div>
//           <div style={{ width: cardWidth, marginRight: '20px' }} className="flex h-auto flex-shrink-0 relative transition-transform ">
//             <Card
//               imgUrl={data[data.length - 1].img}
//               title={data[data.length - 1].title}
//               description={data[data.length - 1].desc}
//               subText={data[data.length - 1].sub}
//             />
//           </div>
//           {
//             data.map((item, i) => (
//               <div style={{ width: cardWidth, marginRight: '20px' }} key={i} className="flex h-auto flex-shrink-0 relative transition-transform ">
//                 <Card
//                   imgUrl={item.img}
//                   title={item.title}
//                   description={item.desc}
//                   subText={item.sub}
//                 />
//               </div>
//             ))
//           }
//           <div style={{ width: cardWidth, marginRight: '20px' }} className="flex h-auto flex-shrink-0 relative transition-transform ">
//             <Card
//               imgUrl={data[0].img}
//               title={data[0].title}
//               description={data[0].desc}
//               subText={data[0].sub}
//             />
//           </div>
//           <div style={{ width: cardWidth, marginRight: '20px' }} className="flex h-auto flex-shrink-0 relative transition-transform ">
//             <Card
//               imgUrl={data[1].img}
//               title={data[1].title}
//               description={data[1].desc}
//               subText={data[1].sub}
//             />
//           </div>
//           {/* </Marquee> */}
//         </motion.div >
//         <motion.div whileHover='hover' onMouseEnter={() => setbuttonleft(true)} onMouseLeave={() => setbuttonleft(false)} className='absolute top-[50%] translate-y-[-50%] z-[2] left-[calc(50%-366.5px)] tablet:hidden '>
//           <motion.button style={buttonClick ? { display: 'none', transitionDuration: '.2s' } : { display: 'block' }} className={`transition-[background-color] duration-[.2s] ${buttonleft ? 'arrowdark' : 'arrowbutton'}   border-solid border-[1px] border-[#fff]   bg-transparent   scale-x-[-1] rounded-[50%] w-[60px] h-[60px] bg-no-repeat bg-[50%] leading-[1.15] m-0  `} variants={arrow} onClick={() => onLeftClick()}>
//             {/* <Image src={arrowed} alt="" width={60} height={60} /> */}
//           </motion.button>
//         </motion.div>
//         <motion.div whileHover='hover' onMouseEnter={() => setbuttonright(true)} onMouseLeave={() => setbuttonright(false)} className='absolute top-[50%] translate-y-[-50%] z-[2] left-auto right-[calc(50%-366.5px)] tablet:hidden '>
//           <motion.button style={buttonClick ? { display: 'none', transitionDuration: '.2s' } : { display: 'block' }} className={`  border-solid border-[1px] duration-[.2s] border-[#fff]  bg-transparent  ${buttonright ? 'arrowdark' : 'arrowbutton'} transition-colors   rounded-[50%] w-[60px] h-[60px] bg-no-repeat bg-[50%] leading-[1.15] m-0 `} variants={arrow} onClick={() => onRightClick()}>
//             {/* <Image src={arrowed} alt="" width={60} height={60} /> */}
//           </motion.button>
//         </motion.div>
//       </div >
//       {/* <div>
//         <Image src={arrowdark} alt="" width={30} hidden30 />
//       </div> */}

//     </>
//   );
// };

// export default SliderComponent;
