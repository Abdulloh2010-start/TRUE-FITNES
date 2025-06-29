import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { assets } from './assets';

export default function Contact() {
    return (
        <main className="w-full">
            <div className="bg-[#00AEEF] text-white text-center py-[30px] px-[20px]">
                <p className="text-[13px] font-bold text-yellow-300">КОНТАКТЫ</p>
                <h1 className="text-[35px] font-bold mt-[10px] mb-[5px]">ШОУ РУМ TRUE В ТАШКЕНТЕ</h1>
                <p className="text-[20px] font-bold">ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В ТАШКЕНТ СИТИ, BOULEVARD</p>
            </div>
            <div className="w-full bg-white py-[40px] flex justify-center">
                <div className="w-[85%] max-w-[900px]">
                    <Swiper modules={[Pagination, Navigation]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} navigation={true} className="relative">
                        <SwiperSlide>
                            <div className="w-full h-[200px] rounded-[8px] flex items-center justify-center md:h-[400px]">
                                <img src={assets.swiper_slide} alt="swiper_slide" className='w-[600px] h-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[200px] rounded-[8px] flex items-center justify-center md:h-[400px]">
                                <img src={assets.swiper_slide2} alt="swiper_slide2" className='w-[600px] h-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[200px] rounded-[8px] flex items-center justify-center md:h-[400px]">
                                <img src={assets.swiper_slide3} alt="swiper_slide3" className='w-[600px] h-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[200px] rounded-[8px] flex items-center justify-center md:h-[400px]">
                                <img src={assets.swiper_slide4} alt="swiper_slide4" className='w-[600px] h-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[200px] rounded-[8px] flex items-center justify-center md:h-[400px]">
                                <img src={assets.swiper_slide5} alt="swiper_slide5" className='w-[600px] h-full' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full h-[200px] rounded-[8px] flex items-center justify-center md:h-[400px]">
                                <img src={assets.swiper_slide6} alt="swiper_slide6" className='w-[600px] h-full' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="flex flex-wrap justify-between bg-[#e1e1e1] gap-[50px]">
                <div className="w-full md:w-[48%] h-[400px] md:h-[600px]">
                    <iframe title="Map" src="https://maps.google.com/maps?q=Tashkent%20City&t=&z=15&ie=UTF8&iwloc=&output=embed" className="w-full h-full"></iframe>
                </div>
                <div className="w-full px-[30px] md:w-[48%] text-[#2D2D2D] text-[14px] font-medium">
                    <h3 className="text-[25px] w-[300px] md:w-[430px] font-bold text-[#00AEEF] mb-[30px] uppercase mt-[50px]">ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТЕР В УЗБЕКИСТАНЕ - PROWELLNESS</h3>
                    <p>+998 (90)-606-66-66</p>
                    <p><a href="#" className="text-[#00AEEF]">info@prowellness.uz</a></p>
                    <p className='text-[20px] w-[300px] mb-[30px]'>Адрес: Ташкент Сити, Бульвард, Ул. Фурката 2А</p>
                    <p className="text-[#00AEEF] text-[20px] font-bold">ПН-СБ С 9:00-19:00</p>
                    <p className="text-[#00AEEF] text-[20px] mb-[30px] mt-[-10px] font-bold">ВС НЕ РАБОЧИЙ</p>
                </div>
            </div>
        </main>
    )
};