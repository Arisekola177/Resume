import { FaHandPointRight } from "react-icons/fa"

const Summary = () => {
  return (
    <div className="w-full mt-5">
        <div className="lg:w-10/12 mx-auto w-full px-8 lg:px-0 grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-4 flex-1 ">
             <h1 className="lg:text-3xl xs:text-xl font-semibold ">Summary</h1>
             <p className="border-[2px] border-b border-neutral-500"></p>
             <p className="lg:text-sm xs:text-xs md:leading-6 lg:leading-8"> Dynamic and results-oriented Frontend Engineer with a strong foundation in web development and a passion for crafting user-centric experiences. 
             Leveraging over 3 years of hands-on experience in frontend engineering, I seamlessly blend my expertise in coding with my analytical acumen gained from my background in accounting. This unique combination enables me to not only develop elegant and efficient frontend solutions but also to analyze data and derive actionable insights to inform strategic decision-making. My collaborative nature and commitment to excellence empower me to thrive in team environments, where I actively contribute to brainstorming sessions, mentor junior developers, 
             and drive innovative solutions that elevate user experiences and business outcomes.</p>
        </div>
        <div className="flex flex-col gap-4 flex-1 xs:mt-6 md:mt-0"> 
        <h1 className="lg:text-3xl xs:text-xl font-semibold ">Work Experience</h1>
        <p className="border-[2px] border-b border-neutral-500"></p>
           <div>
            <div className="flex gap-2">
            <FaHandPointRight className="text-3xl " />
            <div className="flex flex-col gap-3">
              <p className="lg:text-2xl xs:text-xl font-semibold">Freelancer</p>
              <p className="text-sm font-semibold"> Online Platform. 2022 - 2024.</p>
              <p className="lg:text-sm xs:text-xs lg:leading-8">My role is to design and develop the client's website from scratch. Shifting previous static webpage to 
                modern react format and helping to maintain day to day online activities on various platforms</p>
            </div>
            </div>
            <div className="flex gap-2 mt-2">
            <FaHandPointRight className="text-3xl" />
            <div className="flex flex-col gap-3">
              <p className="lg:text-2xl xs:text-xl font-semibold">Account Officer</p>
              <p className="text-sm font-semibold">Bellina Schools. 2016 - 2017</p>
              <p className="lg:text-sm xs:text-xs lg:leading-8">As an Account Officer, my duties included handling financial transactions, 
              maintaining accurate records, assisting in budgeting and forecasting, generating financial reports, implementing internal controls, managing vendor relationships, conducting banking activities, supporting audits, performing financial analysis, providing customer service,
               ensuring regulatory compliance, and driving process improvements.</p>
            </div>
            </div>
             <div className="flex gap-2 mt-2">
            <FaHandPointRight className="text-3xl" />
            <div className="flex flex-col gap-3">
              <p className="lg:text-2xl xs:text-xl font-semibold">Direct Sales Agent (DSA)</p>
              <p className="text-sm font-semibold">Appzone Limited. 2013 - 2015</p>
              <p className="lg:text-sm xs:text-xs lg:leading-8">My duties involve prospecting potential customers, presenting products or services, 
              negotiating sales agreements, building relationships,
               processing orders, providing customer support, and reporting sales activities as a Direct Sales Agent.</p>
            </div>
            </div>
           </div>
       </div>
        </div>
    </div>
  )
}

export default Summary