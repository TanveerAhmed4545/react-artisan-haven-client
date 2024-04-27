import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
    return (
        <div className=''>
            
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/h2pFsrD/illustrator-workspace-flatlay.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div data-aos="fade-up" data-aos-duration="2000"  className="max-w-md">
      <h1  className="mb-5 text-5xl font-bold">
      Discover Your Perfect Creative Space</h1>
      <p className="mb-5">Unlock your creativity at Artisan Haven  where every stroke becomes a masterpiece. Dive into a world of painting and drawing bliss, where inspiration knows no bounds.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/7z20LGb/Stock-Snap-XWUXLCSM1-K.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div  className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Explore a World of Artistry</h1>
      <p className="mb-5">Discover a treasure trove of creativity at your fingertips. Whether you are a seasoned painter or just starting out, our platform offers tools, tutorials, and a vibrant community to support your journey. Unleash your imagination and bring your masterpiece to life with us.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/kmZzwVh/pencil-and-grid-paper.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Transform your canvas.</h1>
      <p className="mb-5">Dive into a world of vibrant colors and endless possibilities. Whether you are a seasoned artist or just starting out, find inspiration, tools, and a supportive community to fuel your passion. Unleash your imagination and let your artistry flourish with us.</p>
      
    </div>
  </div>
</div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Banner;