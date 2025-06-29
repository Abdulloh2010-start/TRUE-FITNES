import { assets } from "./assets";

const cardData = [
    {
        icon: assets.img1,
        title: 'Тренажер Лестница TRUE Palisade',
    },
    {
        icon: assets.img2,
        title: 'Функциональный тренинг с Composite Strength',
    },
    {
        icon: assets.img3,
        title: 'Рамы для стрейтчинга TRUE Stretch',
    },
    {
        icon: assets.img4,
        title: 'Латеральный тренажер TRUE Traverse',
    },
    {
        icon: assets.img5,
        title: 'Беговая дорожка TRUE Alpine Runner',
    },
    {
        icon: assets.img6,
        title: 'Эллиптический тренажер TRUE Spectrum',
    },
];

function Card({ icon, title }) {
  return (
    <div className="flex flex-col md:w-[28rem] w-[22rem] h-[30rem] items-center p-[1rem] px-[5rem] rounded-[1rem]">
        <div className="w-[20rem] h-[20rem] mb-[2rem] flex items-center justify-center">
            <img src={icon} alt={title} className="w-full h-full text-start" />
        </div>
        <h3 className="text-[1.3rem] uppercase font-bold pb-[1.5rem] text-white w-full border-b-[0.3rem] border-yellow-400">{title}</h3>
    </div>
  );
}

export default function Product() {
    return(
        <main>
            <div className="bg-[#00AEEF] text-white text-center py-[30px] px-[20px]">
                <p className="text-[13px] font-bold text-yellow-300">О НАШЕМ БРЕНДЕ</p>
                <h1 className="text-[35px] font-bold mt-[10px] mb-[5px]">TRUE - СОВЕРШЕННОЕ</h1>
                <h1 className="text-[35px] font-bold mt-[10px] mb-[20px]">ФИТНЕС - ОБОРУДОВАНИЕ</h1>
            </div>
            <section className="w-full bg-blue-400 h-[800px] md:h-[1000px] pt-[100px] bg-cover bg-center" style={{ backgroundImage: `url(${assets.bg2})` }}>
                <div className="w-[80%] h-[80%] md:h-[90%] bg-white mx-auto py-[20px] px-[20px] md:py-[80px] md:px-[100px]">
                    <p className="text-blue-400 text-[13px] md:text-[25px]">Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.</p>
                    <p className="text-[12px] md:text-[20px] mt-[5px] md:mt-[40px]">Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.</p>
                    <p className="text-[12px] md:text-[20px] mt-[5px] md:mt-[40px]">Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.</p>
                    <p className="font-bold text-[15px] md:text-[20px] text-blue-400 mt-[40px]">Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может помочь вашей компании добиться успеха.</p>
                </div>
            </section>
            <section className="w-full mx-auto bg-blue-400 px-[2rem] md:px-[2rem] md:py-[4rem]">
                <div className="flex flex-wrap gap-[1rem]">
                    {cardData.map((card, index) => (<Card key={index} icon={card.icon} title={card.title}/>))}
                </div>
            </section>
            <section className="bg-cover bg-center h-auto md:h-[850px] px-[2rem] md:px-[6rem] text-white py-[6rem] md:py-[10rem] relative" style={{ backgroundImage: `url(${assets.bg})` }} >
                <div className="absolute w-[90%] h-[90%] mx-auto my-auto inset-0 bg-[#434343] opacity-[0.6]"></div>
                <div className="mx-auto px-[1rem] relative z-[1] text-center">
                    <p className="text-[18px] md:text-[20px] text-yellow-300 font-bold">TRUE FITNES</p>
                    <h2 className="text-[1.8rem] md:text-[3rem] font-bold mb-[1.5rem] mx-auto max-w-[95%] md:max-w-[40rem]">ПОЛУЧИТЕ <span className="text-blue-400">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> НА ТРЕНАЖЕРЫ  <span className="text-blue-400"> TRUE FITNESS</span></h2>
                    <p className="text-[1rem] md:text-[1.2rem] mb-[2.5rem] text-yellow-300 px-[1rem]">МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ</p>
                    <form className="flex flex-col md:flex-row items-center justify-center gap-[1rem] md:gap-[1.5rem] px-[1rem]">
                        <input type="text" placeholder="ИМЯ" className="w-full md:w-[20rem] p-[1.2rem] md:p-[1.5rem] rounded-[0.5rem] bg-white bg-opacity-[0.8] text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-[0.3rem] focus:ring-blue-400" />
                        <div className="flex items-center bg-white h-[70px] rounded-xl px-[10px] w-[300px] text-black pb-[8px]">
                            <div className="flex items-center text-[16px] text-[#2c2c2c] mr-[16px]">
                                <span className="mr-[8px] cursor-pointer w-[30px] h-[30px] relative top-[10px]"><img src={assets.uzb} alt="uzb" /></span>
                                <span className="text-black font-bold">+998</span>
                            </div>
                            <input type="number" placeholder="(99) 999-99-99" className="w-full focus:outline-none placeholder:text-[#a0a0a0] text-[16px] bg-transparent" />
                        </div>
                        <input type="email" placeholder="E-MAIL" className="w-full md:w-[20rem] p-[1.2rem] md:p-[1.5rem] rounded-[0.5rem] bg-white bg-opacity-[0.8] text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-[0.3rem] focus:ring-blue-400" />
                        <button type="submit" className="w-full md:w-auto px-[2rem] md:px-[3rem] py-[1.2rem] md:py-[1.5rem] bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-[0.5rem] transition duration-300 ease-in-out cursor-pointer"> ОТПРАВИТЬ</button>
                    </form>
                    <p className="text-[1rem] md:text-[1.4rem] mt-[2rem] mx-auto max-w-[95%] md:ml-[10rem] md:max-w-[900px] px-[1rem]">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</p>
                </div>
            </section>
        </main>
    )
};