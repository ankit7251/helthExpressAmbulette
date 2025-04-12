import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6'
import { CiHospital1 } from "react-icons/ci"
import { CgCalendarDates } from "react-icons/cg"

const HomeACTPrivate = () => {
  const cardData = [
    {
      logo: <FaUserDoctor />,
      heading: "Doctors Appointments",
      des: "Have an appointment with the doctor and need ambulette transportation to the clinic? Health Express Ambulette Inc.  staff will drive you to and back from your appointments."
    },
    {
      logo: <CiHospital1 />,
      heading: "Transfer Hospitals",
      des: "You may need to move from one hospital to another for better treatment. Ambulance services are expensive, our private ambulette transportation is affordable."
    },
    {
      logo: <CgCalendarDates />,
      heading: "Lab Tests",
      des: "Have ongoing blood tests, MRI, and Catscan appointments? Once the doctor has set a schedule for you, ask the secretary to send it over to us."
    },
  ]
  return (
    <div className='md:px-20 px-4 py-10'>
      <h1
        className='md:text-[2.5vw] text-[2.9vh] font-bold text-center text-[#132870]'
        data-aos="fade-up"
      >


        Health Express Ambulette <br />  Transportation Services
      </h1>

      <p
        className='md:text-[1.3vw] text-[1.8vh] text-center mt-4 text-[#132870]'
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Schedule private ambulette transportation services for all your medical appointments.
      </p>

      {/* Cards */}
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-10'>
        {
          cardData.map((item, i) => (
            <div
              key={i}
              className='bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl'
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className='bg-[#E3E8F7] text-[#132870] p-5 rounded-full text-[2.8rem] mb-4'>
                {item.logo}
              </div>

              <h2 className='md:text-[1.5vw] text-[2.2vh] font-semibold text-[#132870] mb-3'>
                {item.heading}
              </h2>

              <p className='md:text-[1.1vw] text-[1.6vh] text-[#2E4583]'>
                {item.des}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeACTPrivate
