import { assets } from "./assets"; 

const cardData = [
    {
        icon: assets.img1,
        title: 'ЛУЧШИЕ ХАРАКТЕРИСТИКИ В КЛАССЕ',
        description: 'Наши тренажеры имеют самые совершенные характеристики в классе. В дополнение к этому, они адаптированы до расширенного функционала.',
    },
    {
        icon: assets.img2,
        title: 'ВЫСОКАЯ НАДЕЖНОСТЬ ОБОРУДОВАНИЯ',
        description: 'Высокая надежность оборудования – это визитная карточка TRUE. Наш завод TRUE находится в США, и мы уверены в качестве на каждом тренажере.',
    },
    {
        icon: assets.img3,
        title: 'НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ',
        description: 'Тренажеры способны выдержать суровую эксплуатационную нагрузку, поэтому они не требуют ремонта, а значит, что обеспечивают минимальную стоимость владения.',
    },
    {
        icon: assets.img4,
        title: 'КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС',
        description: 'Оборудование должно работать бесперебойно, поэтому мы уделяем особое внимание его сервисному обслуживанию. Запчасти и запасные тренажеры всегда в наличии.',
    },
    {
        icon: assets.img5,
        title: 'ЦЕНЫ НИЖЕ, ЧЕМ У АНАЛОГОВ',
        description: 'Стоимость тренажеров вас приятно удивит, несмотря на то, что это полностью премиальное качество. Наши цены ниже чем у аналогов.',
    },
    {
        icon: assets.img6,
        title: 'СОВЕРШЕННАЯ ПРОИЗВОДИТЕЛЬНОСТЬ',
        description: 'Тренажеры TRUE обеспечивают непревзойденный уровень тренировок, для достижения максимального результата.',
    },
    {
        icon: assets.img7,
        title: 'АБСОЛЮТНЫЕ ЛИДЕРЫ ПО КОЛИЧЕСТВУ ИННОВАЦИЙ',
        description: 'Используем самые совершенные характеристики в классе, а также доводим оборудование до расширенного функционала.',
    },
    {
        icon: assets.img8,
        title: 'МАКСИМАЛЬНОЕ УДОБСТВО И ФУНКЦИОНАЛЬНОСТЬ',
        description: 'Используем для наших тренажеров самые совершенные функции и характеристики в классе.',
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

export default function Likes() {
    return(
        <main className="w-full bg-gray-50 font-sans">
            <div className="bg-gradient-to-r from-[#00AEEF] to-[#007AC8] text-white text-center py-[60px] px-[20px] sm:py-[80px]">
                <div className="max-w-[1200px] mx-auto">
                    <p className="text-[13px] sm:text-[14px] mb-[15px] font-bold text-yellow-300">НАШИ ПРЕИМУЩЕСТВА</p>
                    <h1 className="text-[35px] sm:text-[45px] font-bold mb-[20px]">ПРЕИМУЩЕСТВА TRUE FITNESS</h1>
                    <p className="text-[18px] sm:text-[20px] font-bold max-w-3xl mx-auto mb-[30px]">БЛАГОДАРЯ КОТОРЫМ МЫ ЯВЛЯЕМСЯ МИРОВЫМ ЛИДЕРОМ В ПРОИЗВОДСТВЕ ФИТНЕС-ОБОРУДОВАНИЯ</p>
                </div>
            </div>
            <section className="mx-auto px-[2rem] py-[4rem]">
                <div className="flex flex-wrap gap-[2rem]">
                    {cardData.map((card, index) => (<Card key={index} icon={card.icon} title={card.title} description={card.description}/>))}
                </div>
            </section>
            <section className="w-[90%] h-[250px] md:w-[80%] mb-[30px] mt-[30px] border-b border-t border-blue-500 mx-auto md:h-[18rem] relative">
                <p className="w-[180px] md:w-[250px] h-[60px] md:h-[70px] bg-blue-500 text-white text-[18px] md:text-[20px] text-center font-bold py-[15px] md:py-[18px] mx-auto md:mx-0 md:absolute md:top-[-40px] md:left-[450px]">TOP 5</p>
                <h1 className="uppercase text-[1.2rem] md:text-[2rem] font-semibold text-center mt-[30px] md:mt-[90px] w-full px-[10px]">Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес оборудования</h1>
            </section>
            <section className="bg-cover bg-center h-auto md:h-[850px] px-[2rem] md:px-[6rem] text-white py-[6rem] md:py-[10rem] relative" style={{ backgroundImage: `url(${assets.bg})` }} >
                <div className="absolute w-[90%] h-[90%] mx-auto my-auto inset-0 bg-[#434343] opacity-[0.6]"></div>
                <div className="mx-auto px-[1rem] relative z-[1] text-center">
                    <p className="text-[18px] md:text-[20px] text-yellow-300 font-bold">TRUE FITNES</p>
                    <h2 className="text-[1.8rem] md:text-[3rem] font-bold mb-[1.5rem] mx-auto max-w-[95%] md:max-w-[40rem]">ПОЛУЧИТЕ <span className="text-blue-400">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> НА ТРЕНАЖЕРЫ <span className="text-blue-400"> TRUE FITNESS</span></h2>
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