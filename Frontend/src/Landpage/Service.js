import React, { useRef ,useEffect} from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import { motion } from 'framer-motion';
import './../Component/Style.css';

function Service() {
  const scrollContainerRef = useRef(null);
  useEffect(()=>{
    AOS.init({ duration:1000});
  },[]);
  const services = [
    {
      imgSrc: '/Asta.jpeg',
      alt: 'tuth',
      title: 'Your favorite photos  ',
      description: 'some text some text some \n some text some text . ',
    },
    {
      imgSrc: '/Student.jpeg',
      alt: 'alhawsha',
      title: 'Your favorite Writing',
      description: 'some text some text some \n some text some text .',
    },
    {
      imgSrc: '/spilled milk.jpeg',
      alt: 'alhawsha',
      title: 'Your favorite design',
      description: 'some text some text some \n some text some text .',
    },
    {
      imgSrc: '/loading.jpeg',
      alt: 'alhawsha',
      title: 'Your favorite work',
      description: 'some text some text some \n some text some text .',
    },
    {
      imgSrc: '/moon.jpeg',
      alt: 'alhawsha',
      title: 'Your favorite shape',
      description: 'some text some text some \n some text some text .',
    },
    {
      imgSrc: '/Bear.jpeg',
      alt: 'alhawsha',
      title: 'Your favorite creative',
      description: 'some text some text some \n some text some text .',
    },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -310, // Adjust the value according to your card width
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 310, // Adjust the value according to your card width
      behavior: 'smooth',
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-500" data-aos="fade-right">Services</h2>
      <p className="text-2xl text-gray-600 text-center mb-16" data-aos="fade-right">
        Our team can help with a variety of T shirt.
      </p>
      <div className="relative flex justify-center items-center" data-aos="fade-right">
        <button onClick={scrollLeft} className="absolute left-0 text-2xl w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center">
          <MdOutlineArrowBackIos />
        </button>
        <div
          className="flex overflow-x-scroll space-x-4 no-scrollbar px-10 pb-12"
          ref={scrollContainerRef}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl w-80 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex justify-center rounded-t-3xl items-center mb-4 w-80 h-[226px] bg-gray-200">
                <img src={service.imgSrc} alt={service.alt} className=" w-80 rounded-t-3xl h-[226px]" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-gray-600">
                  <p>{service.description}</p>
                </div>
                <a href="#" className="text-blue-500 hover:underline mt-4">
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 text-2xl w-16 h-16 bg-white rounded-full shadow-md z-10 flex items-center justify-center">
          <MdOutlineArrowForwardIos />
        </button>
      </div>
    </div>
  );
}

export default Service;
