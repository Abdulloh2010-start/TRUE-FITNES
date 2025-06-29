import { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from './assets';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full relative z-50 bg-white">
            <div className="flex items-center justify-between md:justify-end px-[30px] md:px-[80px] md:gap-[80px] py-[30px] md:py-[40px]">
                <div className="flex items-end">
                    <img src={assets.logo} alt="Logo" className="w-[120px] h-auto md:w-full" />
                </div>
                <div className="hidden md:flex items-center flex-wrap w-[20%] gap-[30px]">
                    <div className="flex items-center gap-[8px] cursor-pointer">
                        <img src={assets.ru} alt="flag" className="w-[20px] h-[20px]" />
                        <img src={assets.vert} alt="vert" className="w-[12px] h-[12px]" />
                    </div>
                    <p className="text-[14px] font-medium text-[#2D2D2D]">+998 (90)-606-66-66</p>
                    <button className="bg-[#00AEEF] text-white text-[13px] font-semibold px-[18px] py-[10px] cursor-pointer rounded-[4px] hover:bg-[#0096cf] transition">ОСТАВИТЬ ЗАЯВКУ</button>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[28px] text-[#00AEEF] focus:outline-none z-50">{menuOpen ? '×' : '☰'}</button>
            </div>
            <nav className="hidden md:block border-t border-black">
                <ul className="flex justify-center gap-[80px] py-[14px] text-[13px] font-semibold text-[#2D2D2D]">
                    <li><Link to="/" className="hover:text-[#00AEEF] transition-colors">О БРЕНДЕ</Link></li>
                    <li><Link to="/product" className="hover:text-[#00AEEF] transition-colors">ПРОДУКЦИИ</Link></li>
                    <li><Link to="/likes" className="hover:text-[#00AEEF] transition-colors">ПРЕИМУЩЕСТВА</Link></li>
                    <li><Link to="/club" className="hover:text-[#00AEEF] transition-colors">ОТКРЫТЬ КЛУБ</Link></li>
                    <li><Link to="/contact" className="hover:text-[#00AEEF] transition-colors">КОНТАКТЫ</Link></li>
                </ul>
            </nav>
            <div className={`fixed inset-0 h-full w-[250px] bg-white shadow-lg p-[20px] flex flex-col gap-[20px] text-[14px] text-[#2D2D2D] font-semibold transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <nav className="mt-[60px] flex flex-col gap-[20px]">
                    <Link to="/"  className="hover:text-[#00AEEF] transition">О БРЕНДЕ</Link>
                    <Link to="/product"  className="hover:text-[#00AEEF] transition">ПРОДУКЦИИ</Link>
                    <Link to="/likes"  className="hover:text-[#00AEEF] transition">ПРЕИМУЩЕСТВА</Link>
                    <Link to="/club"  className="hover:text-[#00AEEF] transition">ОТКРЫТЬ КЛУБ</Link>
                    <Link to="/contact"  className="hover:text-[#00AEEF] transition">КОНТАКТЫ</Link>
                </nav>
                <div className="mt-auto flex flex-col gap-[15px]">
                    <div className="flex items-center gap-[8px] cursor-pointer">
                        <img src={assets.ru} alt="flag" className="w-[20px] h-[20px]" />
                        <img src={assets.vert} alt="vert" className="w-[12px] h-[12px]" />
                    </div>
                    <p>+998 (90)-606-66-66</p>
                    <button className="bg-[#00AEEF] text-white text-[13px] font-semibold px-[18px] py-[10px] rounded-[4px] hover:bg-[#0096cf] transition">ОСТАВИТТ ЗАЯВКУ</button>
                </div>
            </div>
        </header>
    )
};