import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#00AEEF] text-white px-[60px] py-[50px]">
            <div className="flex justify-between items-start flex-wrap gap-[40px]">
                <div className="flex flex-col gap-[10px] min-w-[180px]">
                    <h3 className="text-[14px] font-bold mb-[8px]">КАТАЛОГ ТОВАРОВ</h3>
                    <Link to="#" className="text-[13px]">КАРДИО ТРЕНАЖЕРЫ</Link>
                    <Link to="#" className="text-[13px]">COMPOSITE STRENGTH</Link>
                    <Link to="#" className="text-[13px]">TRUE STRETCH</Link>
                    <Link to="#" className="text-[13px]">САЙКЛИНГ</Link>
                    <Link to="#" className="text-[13px]">ГРУППОВЫЕ ТРЕНИРОВКИ</Link>
                    <Link to="#" className="text-[13px]">СИЛОВЫЕ ТРЕНАЖЕРЫ</Link>
                    <Link to="#" className="text-[13px]">КОНСОЛИ</Link>
                    <p className="text-[13px] pt-[8px]">© <span className="font-bold">TRUE FITNESS</span></p>
                </div>
                <div className="flex flex-col gap-[10px] min-w-[160px]">
                    <h3 className="text-[14px] font-bold mb-[8px]">ИНФОРМАЦИЯ</h3>
                    <Link to="/" className="text-[13px]">О БРЕНДЕ</Link>
                    <Link to="/likes" className="text-[13px]">ПРЕИМУЩЕСТВА</Link>
                    <Link to="/club" className="text-[13px]">ОТКРЫТЬ КЛУБ</Link>
                    <Link to="/product" className="text-[13px]">ПРОДУКЦИИ</Link>
                    <Link to="/contact" className="text-[13px]">КОНТАКТЫ</Link>
                </div>
                <div className="flex flex-col gap-[10px] min-w-[160px]">
                    <h3 className="text-[14px] font-bold mb-[8px]">КОНТАКТЫ</h3>
                    <Link to="#" className="text-[13px]">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
                    <Link to="/contact" className="text-[13px]">КОНТАКТЫ</Link>
                </div>
                <div className="flex flex-col gap-[10px] min-w-[180px]">
                    <h3 className="text-[14px] font-bold w-[220px] mb-[8px]">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h3>
                </div>
            </div>
        </footer>
    )
};