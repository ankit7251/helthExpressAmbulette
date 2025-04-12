import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CgMail } from 'react-icons/cg'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { MdAccessTime } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { IoIosArrowDown } from 'react-icons/io'
import { setIndex } from '../store/slice/indexSlice.js';
import { useDispatch, useSelector } from 'react-redux'
import logo from "../assets/Logo.jpg"


const Header = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation();
    const [showMenu, setShowMenu] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [mobileServicesDropdown, setMobileServicesDropdown] = useState(false);
    const [mobileLocationDropdown, setMobileLocationDropdown] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (pathname !== "/services") localStorage.removeItem("serviceIndex");
    }, [pathname]);

    const navLink = [
        { title: 'Home', path: '/' },
        { title: 'F.A.Q.', path: '/faq' },
        { title: 'Apply as Driver', path: '/driverForm' },

    ];

    const dropdownLinks = [
        'Ambulette Services',
        'Private Medical Transportation',
        'Two Men Assist Over Stairs',
        'Medicaid Ambulette Service',
        'Wheelchair Handicapped Transportation'
    ];

    const locationLinks = [
        {
            name: "Ambulette Service Brooklyn NY",
            link: "ambuletteService"
        },
        {
            name: "South Brooklyn",
            link: "southBrooklyn"
        },
    ];


    const dispatch = useDispatch();
    const handleDropdownClick = (newIndex) => {
        dispatch(setIndex(newIndex));
    };

    return (
        <>
            {/* Top Header */}
            <div className='hidden md:flex md:px-20 items-center justify-center bg-black gap-1'>
                <p className='text-[1.5vh] md:text-[1.1vw] border-r border-white text-white flex items-center justify-center gap-2 py-2 px-8'>
                    <FaPhoneAlt /> 917-514-3080
                </p>
                <p className='text-[1.5vh] md:text-[1.1vw] border-r border-white text-white flex items-center justify-center gap-2 py-2 px-8'>
                    <MdAccessTime /> Open 7 Days a Week
                </p>
                <p className='text-[1.5vh] md:text-[1.1vw] text-white flex items-center justify-center gap-2 py-2 px-8'>
                    <CgMail /> info@healthexpressambulette.com
                </p>
            </div>
            {/* Navbar */}
            <div className='md:flex sticky top-0 z-50 md:px-20 px-4 items-center border-b border-black justify-between py-2 bg-white'>
                {/* Logo */}
                <div className='h-full md:w-[10%] flex items-center justify-between'>
                    <img src={logo}
                        onClick={() => navigate('/')}
                        className='md:w-[60%] object-contain w-[20%]' alt="Logo" />
                    <span className='flex md:hidden text-[3vh] cursor-pointer' onClick={() => setShowMenu(true)}>
                        <HiOutlineBars3 />
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="h-full hidden md:flex items-center justify-center gap-8 relative">
                    {navLink.map((item, i) => (
                        <Link key={i} to={item.path} className="text-[1.3vw] font-medium relative group">
                            {item.title}
                            <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all"></span>
                        </Link>
                    ))}



                    {/* Location Dropdown */}
                    <div className="relative group"
                        onMouseEnter={() => setShowLocationDropdown(true)}
                        onMouseLeave={() => setShowLocationDropdown(false)}>
                        <div className="flex items-center gap-1 text-[1.3vw] font-medium cursor-pointer">
                            Location <IoIosArrowDown className='text-[1vw]' />
                        </div>
                        {showLocationDropdown && (
                            <div className="absolute top-full left-0 bg-white shadow-xl p-4 rounded-xl w-[250px] z-50 space-y-2">
                                {locationLinks.map((item, i) => (
                                    <Link key={i} to={`/${item.link}`} className="block px-4 py-2 text-[1vw] text-gray-700 rounded-lg hover:bg-blue-100 hover:text-[#3E52AD]">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Services Dropdown */}
                    <div className="relative group"
                        onMouseEnter={() => setShowServicesDropdown(true)}
                        onMouseLeave={() => setShowServicesDropdown(false)}>
                        <div className="flex items-center gap-1 text-[1.3vw] font-medium cursor-pointer">
                            Services <IoIosArrowDown className='text-[1vw]' />
                        </div>
                        {showServicesDropdown && (
                            <div className="absolute top-full left-0 bg-white shadow-xl p-4 rounded-xl w-[300px] z-50 space-y-2">
                                {dropdownLinks.map((item, i) => (
                                    <Link key={i} to="/services" onClick={() => handleDropdownClick(i)} className="block px-4 py-2 text-[1vw] text-gray-700 rounded-lg hover:bg-blue-100 hover:text-[#3E52AD]">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/about" className="text-[1.3vw] font-medium relative group">
                        About
                        <span className="block h-[2px] w-0 bg-black group-hover:w-full transition-all"></span>
                    </Link>
                </div>

                {/* Contact Button */}
                <Link to="/contact" className='px-8 py-3 bg-[#3E52AD] text-white rounded-lg hidden md:flex text-[1.3vw]'>
                    Contact Us
                </Link>

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 h-screen w-full bg-[#00000050] z-10 transition-transform duration-500 ${showMenu ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="bg-white w-[90%] h-full shadow-lg p-5 flex flex-col">
                        <div className="flex justify-between items-center">
                            <img
                                onClick={() => navigate('/')}
                                src={logo}
                                className="w-[30%]" alt="Logo" />
                            <RxCross2 className="text-[3vh]" onClick={() => setShowMenu(false)} />
                        </div>

                        <div className="flex flex-col mt-5 gap-4 text-[2.2vh]">
                            {navLink.map((item, i) => (
                                <Link key={i} to={item.path} onClick={() => setShowMenu(false)}>{item.title}</Link>
                            ))}

                            {/* Mobile Location Dropdown */}
                            <div>
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => setMobileLocationDropdown(!mobileLocationDropdown)}>
                                    Location <IoIosArrowDown className={`${mobileLocationDropdown && "rotate-180"} transition-transform`} />
                                </div>
                                {mobileLocationDropdown && (
                                    <div className="ml-4 mt-2 space-y-1">
                                        {locationLinks.map((item, i) => (
                                            <Link key={i} to={`/${item.link}`} onClick={() => setShowMenu(false)} className="block text-gray-600">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Services Dropdown */}
                            <div>
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => setMobileServicesDropdown(!mobileServicesDropdown)}>
                                    Services <IoIosArrowDown className={`${mobileServicesDropdown && "rotate-180"} transition-transform`} />
                                </div>
                                {mobileServicesDropdown && (
                                    <div className="ml-4 mt-2 space-y-1">
                                        {dropdownLinks.map((item, i) => (
                                            <Link key={i} to="/services" onClick={() => {
                                                handleDropdownClick(i);
                                                setShowMenu(false);
                                            }} className="block text-gray-600">
                                                {item}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link to="/about" onClick={() => setShowMenu(false)} className="block text-black">
                                About
                            </Link>

                        </div>

                        {/* Mobile Contact Button */}
                        <Link to="/contact" onClick={() => setShowMenu(false)} className="px-8 py-3 bg-[#3E52AD] text-white rounded-lg mt-5 w-[70%] mx-auto">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
