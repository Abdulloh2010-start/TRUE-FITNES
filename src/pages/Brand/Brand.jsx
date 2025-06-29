import { assets } from "./assets";

const cardData = [
  {
    icon: assets.img1,
    title: 'КОНСАЛТИНГ',
    description: 'Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.',
  },
  {
    icon: assets.img2,
    title: 'МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ',
    description: 'Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.',
  },
  {
    icon: assets.img3,
    title: 'ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ',
    description: 'Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.',
  },
  {
    icon: assets.img4,
    title: 'ФИРМЕННЫЙ SHOW-ROOM',
    description: 'Пройдите тест-драйв оборудования перед приобретением.',
  },
  {
    icon: assets.img5,
    title: 'ПОСТАВКА ЗАПЧАСТЕЙ',
    description: 'Поставка как гарантийных, так и постгарантийных запчастей.',
  },
  {
    icon: assets.img6,
    title: 'Доставка по всему Узбекистану',
    description: 'Мы доставляем оборудование по всему Узбекистану.',
  },
];

function Card({ icon, title, description }) {
  return (
    <div className="flex flex-col w-full sm:w-[320px] items-center p-[2rem]">
        <div className="mb-[2rem] flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full" />
        </div>
        <h3 className="text-[1.2rem] font-bold mb-[1rem] text-center">{title}</h3>
        <p className="text-[1rem] text-gray-600 text-center">{description}</p>
    </div>
  )
};

export default function Brand() {
  return (
    <main className="font-sans w-full">
        <section className="relative w-full h-[550px] flex items-end justify-center bg-cover bg-center" style={{ backgroundImage: `url(${assets.bg3})` }}>
            <div className="hidden md:block z-[1000] w-[80px] h-[80px] rounded-full cursor-pointer bg-white py-[17px] pl-[25px] relative top-[-300px] left-[360px] hover:bg-blue-500 transition">
                <img src={assets.arrow} alt="arrow" className="w-[40px] h-[50px]" />
            </div>
            <div className="z-10 text-center pb-[80px] text-white">
                <h1 className="text-[1.8rem] md:text-[50px] w-[90%] md:w-[700px] mx-auto mt-[-30px] font-bold uppercase">True Fitness премиум тренажёры из США</h1>
            </div>
        </section>
        <section className="bg-[#00a0e3] py-[30px] text-white text-center">
            <h2 className="uppercase font-bold text-[1.5rem] md:text-[30px] w-[90%] md:w-[700px] border-y-4 border-green-300 py-[30px] mx-auto">TRUE – ведущий мировой производитель премиального фитнес оборудования</h2>
        </section>
        <section className="w-full bg-white flex flex-col md:flex-row items-center justify-between px-[20px] md:px-[70px] py-[30px] gap-[30px]">
            <div>
                <p className="text-[2rem] md:text-[50px] leading-[1.2] font-bold border-b-[5px] border-yellow-300 w-fit">TRUE <span className="text-blue-400">FITNESS</span></p>
                <p className="text-[1.5rem] md:text-[40px] font-semibold leading-[1.3] w-full md:w-[450px] mt-[30px]">Современное и надежное оборудование для фитнес-клубов</p>
                <p className="uppercase text-blue-400 text-[1.5rem] md:text-[40px] leading-[1.3] mt-[30px] font-bold w-fit">КАРдио тренажеры</p>
            </div>
            <img src={assets.run} alt="run" className="max-w-full h-auto bg-cover bg-center z-10" style={{backgroundImage: `url(${assets.logo})`}}/>
        </section>
        <section className="w-full px-[90px] h-[1800px] md:h-[800px] bg-gray-100 flex flex-wrap py-[70px] sm:flex-col items-center gap-[50px]">
            <div className="flex flex-col gap-[25px]">
                <div className="bg-cover bg-center px-[50px] pt-[50px] w-[300px] md:w-[600px] h-[350px]" style={{backgroundImage: `url(${assets.bg})`}}>
                    <p className="text-white text-[15px] md:text-[35px] leading-4 md:leading-10 md:border-b-3 border-yellow-300 pb-[20px] w-[250px] md:w-[200px] font-[600]">Лучшие характеристики</p>
                    <p className="text-white text-[14px] md:text-[17px] font-bold mt-[5px] md:mt-[30px] w-[200p] md:w-[450px]">Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>    
                </div> 
                <div className="w-[300px] md:w-[600px] h-[250px] bg-blue-400 px-[30px] py-[20px]">
                    <p className="text-[18px] md:text-[30px] leading-5 text-white font-bold md:leading-10 md:border-b-3 border-yellow-300 w-[200px] md:w-[400px] pb-[20px]">ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ</p>
                    <p className="text-white text-[12px] md:text-[18px] mt-[10px]">Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>    
                </div>          
            </div>
            <div className="flex flex-col gap-[25px]">
                <div className="w-[300px] md:w-[600px] h-[250px] bg-blue-400 px-[30px] py-[20px]">
                    <p className="text-[18px] md:text-[30px] leading-5 text-white font-bold md:leading-10 md:border-b-3 border-yellow-300 w-[200px] md:w-[400px] pb-[20px]">Низкая СТОИМОСТЬ ВЛАДЕНИЕ</p>
                    <p className="text-white text-[12px] md:text-[18px] mt-[10px]">Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание, так по стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов.</p>    
                </div>  
                <div className="bg-cover bg-center px-[50px] pt-[50px] w-[300px] md:w-[600px] h-[350px]" style={{backgroundImage: `url(${assets.bg2})`}}>
                    <p className="text-white text-[15px] md:text-[35px] leading-4 md:leading-10 md:border-b-3 border-yellow-300 pb-[20px] w-[250px] md:w-[400px] font-[600]">КАЧЕСТВЕННЫЕ И ОПЕРАТИВНЫЙ СЕРВИС</p>
                    <p className="text-white text-[14px] md:text-[17px] font-bold mt-[5px] md:mt-[30px] w-[200p] md:w-[450px]">Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание наличию всех необходимых запчастей и высокой срочности технического реагирования.</p>    
                </div>         
            </div>
        </section>
        <section className="bg-gray-200 px-[20px] md:pl-[7rem] flex flex-col lg:flex-row items-center w-full gap-[30px]">
            <div>
            <p className="text-blue-500 font-bold text-[2rem] md:text-[40px] w-full md:w-[470px] mb-[20px]">Мы предлагаем полный комплекс услуг</p>
            <div className="flex flex-wrap justify-center md:justify-start w-full md:w-[747px]">
                {cardData.map((card, index) => (
                <Card key={index} icon={card.icon} title={card.title} description={card.description} />
                ))}
            </div>
            </div>
            <img src={assets.bg4} alt="bg4" className="max-w-full h-auto" />
        </section>
        <section className="bg-cover bg-center px-[1rem] md:px-[6rem] py-[4rem] md:py-[10rem] relative" style={{ backgroundImage: `url(${assets.bg2})` }}>
            <div className="w-full md:w-[60%] mx-auto px-[1rem] md:px-[3rem] py-[3rem] bg-white relative z-[1]">
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold mb-[1.5rem] text-black text-center">Получите эксклюзивное предложение на тренажеры TRUE FITNESS</h2>
            <p className="text-[1rem] md:text-[1.2rem] mb-[2.5rem] text-center">Мы будем рады проконсультировать Вас...</p>
            <form className="flex flex-col items-center gap-[1rem] md:gap-[1.5rem]">
                <input type="text" placeholder="ИМЯ" className="w-full p-[1rem] bg-gray-300 bg-opacity-[0.8] text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-[0.3rem] focus:ring-blue-400" />
                <input type="email" placeholder="E-MAIL" className="w-full p-[1rem] bg-gray-300 bg-opacity-[0.8] text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-[0.3rem] focus:ring-blue-400" />
                <div className="flex items-center bg-gray-300 w-full h-[4rem] px-[20px]">
                <div className="flex items-center text-[16px] text-[#2c2c2c] mr-[16px]">
                    <span className="mr-[8px] w-[30px] h-[30px] relative top-[10px] cursor-pointer"><img src={assets.uzb} alt="uzb" /></span>
                    <span>+998</span>
                </div>
                <input type="number" id="phone" placeholder="(99) 999-99-99" className="w-full focus:outline-none placeholder:text-[#a0a0a0] text-[16px] bg-transparent" />
                </div>
                <button className="w-full px-[2rem] py-[1.2rem] bg-blue-600 hover:bg-blue-700 text-white font-bold transition duration-300 ease-in-out cursor-pointer">ОТПРАВИТЬ</button>
            </form>
            <p className="text-[1rem] mt-[2rem] text-center">Нажимая на кнопку, вы даете согласие на обработку персональных данных...</p>
            </div>
        </section>
    </main>
  )
};