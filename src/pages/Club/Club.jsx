import { assets } from "./assets";

export default function Club() {
    return(
        <main className="w-full">
            <div className="bg-[#00AEEF] text-white text-center py-[30px] px-[20px]">
                <p className="text-[13px] font-bold text-yellow-300">КЛУБ TRUE</p>
                <h1 className="text-[35px] font-bold mt-[10px] mb-[5px]">ОТКРЫТЬ КЛУБ ВМЕСТЕ С TRUE</h1>
            </div>
            <img src={assets.bg} alt="bg" className="w-full"/>
            <div className="bg-[#e3e3e3] font-sans flex flex-col justify-center items-center min-h-screen p-[24px]">
                <h2 className="text-center text-[28px] font-bold mt-[40px] mb-[40px] text-[#2c2c2c]">ОТПРАВИТЬ ЗАЯВКУ</h2>
                <form className="space-y-[32px]">
                    <div>
                        <label className="block text-[14px] font-semibold mb-[8px]">ВАШЕ ИМЯ</label>
                        <input type="text" placeholder="ИМЯ" className="w-full border-b-[2px] border-solid border-[#000000] pb-[8px] focus:outline-none focus:border-[#007bff] placeholder:text-[#585858] text-[16px]"/>
                    </div>
                    <div>
                        <label className="block text-[14px] text-[#000000] font-semibold mb-[8px]">E-MAIL:</label>
                        <input type="email" placeholder="E-MAIL:" className="w-full border-b-[2px] border-solid border-[#000000] pb-[8px] focus:outline-none focus:border-[#007bff] placeholder:text-[#a0a0a0] text-[16px]"/>
                    </div>
                    <div>
                        <label className="block text-[14px] text-[#000000] font-semibold mb-[8px]">НОМЕР ТЕЛЕФОНА</label>
                        <div className="flex items-center border-b-[2px] border-solid border-[#000000] pb-[8px]">
                            <div className="flex items-center text-[16px] text-[#2c2c2c] mr-[16px]">
                                <span className="mr-[8px] cursor-pointer w-[30px] h-[30px] relative top-[10px]"><img src={assets.uzb} alt="uzb" /></span>
                                <span>+998</span>
                            </div>
                            <input type="number" placeholder="(99) 999-99-99" className="w-full focus:outline-none placeholder:text-[#a0a0a0] text-[16px]"/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-[14px] text-[#000000] font-semibold mb-[8px]">ГОРОД</label>
                        <input type="text" placeholder="ГОРОД" className="w-full border-b-[2px] border-solid border-[#000000] pb-[8px] focus:outline-none focus:border-[#007bff] placeholder:text-[#a0a0a0] text-[16px]"/>
                    </div>
                    <div>
                        <p className="text-[14px] text-[#000000] font-semibold mb-[16px]">ХОТИТЕ ОТКРЫТЬ:</p>
                        <div className="space-y-[12px] text-[16px] text-[#2c2c2c]">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Фитнес студия
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Фитнес клуб
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Домашний спортзал
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Тренажерный зал в отеле, санатории
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Корпоративный спортзал
                            </label>
                        </div>
                    </div>
                    <div>
                        <p className="text-[14px] text-[#000000] font-semibold mb-[16px]">ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</p>
                        <div className="space-y-[12px] text-[16px] text-[#2c2c2c]">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Фитнес студия
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Фитнес клуб
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Домашний спортзал
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Тренажерный зал в отеле, санатории
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-full appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Корпоративный спортзал
                            </label>
                        </div>
                    </div>
                    <div>
                        <p className="text-[14px] text-[#000000] font-semibold mb-[16px]">КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</p>
                        <div className="space-y-[12px] text-[16px] text-[#2c2c2c]">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-[4px] appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Консультация
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-[4px] appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Подбор Оборудования
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-[4px] appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Расстановка Оборудования На Плане
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="mr-[12px] h-[18px] w-[18px] border-[2px] border-solid border-black rounded-[4px] appearance-none checked:bg-[#007bff] checked:border-transparent checked:ring-[4px] checked:ring-offset-[2px] checked:ring-[#007bff]"/>Лизинг
                            </label>
                        </div>
                    </div>
                    <div>
                        <p className="text-[14px] text-[#000000] font-semibold mb-[16px]">ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</p>
                        <label className="bg-[#007bff] text-white text-[16px] font-semibold py-[12px] px-[24px] rounded-[6px] cursor-pointer inline-block hover:bg-[#0056b3] transition duration-[300ms] ease-in-out">ADD FILES</label>
                    </div>
                    <div>
                        <label className="block text-[14px] text-[#000000] font-semibold mb-[8px]">КОММЕНТАРИЙ</label>
                        <textarea className="w-full border-b-[2px] border-solid border-[#000000] pt-[8px] pb-[8px] focus:outline-none focus:border-[#007bff] placeholder:text-[#a0a0a0] text-[16px] resize-none"></textarea>
                    </div>
                    <div className="text-center mt-[48px]">
                        <button className="bg-[#007bff] cursor-pointer text-white text-[18px] font-bold py-[16px] px-[48px] border-[2px] border-solid border-[#007bff] transition duration-[300ms] ease-in-out hover:bg-[#0056b3] hover:border-[#0056b3]">ОТПРАВИТЬ</button>
                    </div>
                </form>
            </div>
        </main>
    )
};