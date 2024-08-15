import React from 'react'
import '../globals.css'
import ProgressBar from '@/components/progressBar'

const Industries = [
  {
      "id":1,
      "name":"Freight, Utility and Logistics Fleets",
      "description":"Fleets used for transporting goods, services, or passengers for commercial purposes. E.g. Delivery vans, trucks, taxis, auto rikshaws and service vehicles.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/a_90/v1721725168/vedika-website/photo-gallery/IMG_20200823_181619_nilcpt.jpg",
  },
  {
      "id":2,
      "name":"Commercial Vehicle Fleets",
      "description":"Fleets used for transporting goods, services, or passengers for commercial purposes. E.g. Delivery vans, trucks, taxis, and service vehicles",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725041/vedika-website/photo-gallery/20190216_163439_b5oqny.jpg"
  },
  {
      "id":3,
      "name":"Passenger Transport Fleets",
      "description":"Fleets designed to transport passengers, either privately or publicly. E.g. Buses, shuttles, taxis, ridesharing vehicles, and school buses.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725042/vedika-website/photo-gallery/IMG_0039_a4owwc.jpg",
  },
  {
      "id":4,
      "name":"Government Fleets",
      "description":"Vehicles owned and operated by government entities for public services. E.g. Police cars, fire trucks, ambulances, postal delivery vehicles, and public works vehicles.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725047/vedika-website/photo-gallery/IMG_0264_itig5j.jpg",
  },
  {
      "id":5,
      "name":"Construction and Heavy Equipment Fleets",
      "description":"Fleets consisting of heavy machinery and vehicles used in construction, mining, and infrastructure projects. E.g. Bulldozers, excavators, cranes, and dump trucks.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725057/vedika-website/photo-gallery/IMG_0620_f8e04v.jpg",
  },
  {
      "id":6,
      "name":"Emergency Service Fleets",
      "description":"Vehicles used by first responders and emergency services. E.g. Ambulances, fire trucks, police vehicles, and rescue vehicles.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725047/vedika-website/photo-gallery/IMG_0208_atkkzv.jpg",
  },
  {
      "id":7,
      "name":"Agricultural Fleets",
      "description":"Fleets consisting of vehicles and machinery used in farming and agriculture. E.g. Tractors, harvesters, and plows.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725046/vedika-website/photo-gallery/IMG_0186_uigzut.jpg",
  },
  {
      "id":8,
      "name":"Private or Corporate Fleets",
      "description":"Fleets owned by private companies or corporations for employee transportation, deliveries, or services. E.g. Executive cars, employee shuttles, and company-owned service vehicles.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725041/vedika-website/photo-gallery/IMG_0029_veiimi.jpg",
  },
  {
      "id":9,
      "name":"Rental and Leasing Fleets",
      "description":"Fleets operated by rental or leasing companies. E.g. Rental cars, trucks, and equipment offered to customers for short or long-term use.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725043/vedika-website/photo-gallery/IMG_0073_sjjtkw.jpg",
  },
  {
      "id":10,
      "name":"Oil, Gas and Energy Fleets",
      "description":"Vehicles used in the exploration, production, and distribution of oil, gas, and other energy sources. E.g. Tankers, drilling rigs, and pipeline maintenance trucks.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725046/vedika-website/photo-gallery/IMG_0192_svp6lh.jpg",
  },
  {
      "id":11,
      "name":"Waste Management Fleets",
      "description":"Fleets dedicated to waste collection, recycling, and disposal. E.g. Garbage trucks, recycling vehicles, and street sweepers.",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725055/vedika-website/photo-gallery/IMG_0383_gt6jic.jpg",
  },
  {
      "id":12,
      "name":"Marine & Aviation Fleets",
      "description":"Aircrafts, Ships, Boats are also types of fleets. It includes Cargo ships, ferries, and patrol boats, as well as Airliners, private jets, and cargo planes",
      "url": "https://res.cloudinary.com/db3h7h0pa/image/upload/v1721725055/vedika-website/photo-gallery/IMG_0383_gt6jic.jpg",
  },
]

function FleetXpert() {
  return (
    <div className='flex flex-col px-6 md:px-28 lg:px-40'>
      <ProgressBar progressColor={'#03B9C4'} />
      <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1723756408/fleetXpert/cover-fleetXpert-1_frtj9j.png" />
      
      <div className=''>
        {/* Main project content */}
          {/* Introduction */}
          <div className='project-section'>
          <div className='project-section-heading'>Introduction</div>
              
              {/* information */}
              <div className=' flex flex-row flex-wrap'>
                <div className='w-full md:w-1/3 md:pr-4'>
                  <div className='project-section-small-heading'>Role<br /><span className='text-fleetXpert'>UI UX Designer</span> </div>
                  <br/>
                  <div className='project-section-small-heading'>Date<br /><span className='text-fleetXpert'>July 2024 - August 2024</span> </div>
                </div>
                <div className='w-full md:w-2/3 md:pl-4'>
                  <p>Designing a Fleet Management System is a crucial undertaking for businesses that rely on vehicles for their operations. This system optimizes the management of an entire fleet by integrating real-time tracking, vehicle diagnostics, driver performance monitoring, and route optimization, enhancing efficiency and reducing operational costs. By leveraging cutting-edge technologies like GPS, telematics, and various sensors, a well-designed fleet management system ensures safer driving, lowers fuel consumption, ensures regulatory compliance, and improves overall productivity. The focus of the design is to create a user-friendly, scalable solution that meets the diverse needs of fleet managers, drivers, and other key stakeholders.</p>
                </div>
            
            {/* understand Fleet first */}
              <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                <div className='project-section-subheading'>Let’s understand first <span className='text-fleetXpert'>Fleet</span> </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                <p>A fleet is<span className='text-fleetXpert font-semibold'> a group of vehicles, ships, aircraft, or other types of transportation equipment</span> that are owned or managed by an organization or company for a specific purpose. Fleets are typically used for commercial, industrial, governmental, or military operations to transport goods, provide services, or move people efficiently.
                </p>
              </div>

              {/* Context and relevance */}
              <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                <div className='project-section-subheading'><span className='text-fleetXpert'>Context</span> and relevance </div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                <p>With the onset of Industry 5.0 and the ever-increasing demands of manufactured products, their load on the supply chains is immense. Each manufacturer, at any point in time, is managing hundreds of trucks or heavy vehicles for transporting materials, finished goods, and in some cases even services.</p>
                <p className='mt-5'>To ease this load and manage these fleets of vehicles in a better manner, Fleet Management Systems exist to ensure proper functioning and maintain their relevance in the future to satisfy the users, an upgraded FMS is essential.</p>
              </div>

              {/* Goal */}
              <div className='w-full md:w-1/3 md:pr-4 mt-10 md:mt-20'>
                <div className='project-section-subheading'><span className='text-fleetXpert'>Goal</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 md:mt-20'>
                <p>The end goal is to help companies manage their fleets of vehicles more efficiently, enabling them to make the right business decisions and have better communications with their drivers.</p>
              </div>

            </div>
          </div>


          {/* Industry Research */}
          <div className='project-section'>
          <div className='project-section-heading'>Industry Research </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>What are the<span className='text-fleetXpert'> Markets?</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>In the Indian market, we can consider following industries where the Fleet management system can be implemented.</p>
                <div className='grid grid-cols-2 gap-3 md:gap-5'>
                  {Industries.map(item => (
                      <div key={item.id} className=''>
                        <p className='text-fleetXpert font-semibold'>{item.name}</p>
                        <p className='text-base'>{item.description}</p>
                      </div>
                  ))
                  }
                </div>
                <p className='mt-5'>Each type of fleet has specific operational needs and requirements, which influences the design and functionality of the fleet management system. Here we won't be considering the Marine and the Aviation Fleets.</p>
              </div>
            </div>

            {/* numbers */}
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Diving into the <span className='text-fleetXpert'>numbers.</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Considering the Indian Fleet Management Market: </p>
                <p><span className='text-fleetXpert font-semibold'>14%</span> forecasted growth rate till 2025</p>
                <p><span className='text-fleetXpert font-semibold'>15.5%</span> of all vehicles will be a part of fleets by 2025</p>
                <p>AIS 140 Government mandate favoring the development of FMS</p>
                <p>The installed base of <span className='text-fleetXpert font-semibold'>FMS in India: 7 Million units</span></p>
              </div>
            </div>

            {/* Types of goods */}
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>What are the <span className='text-fleetXpert'>type of goods</span> they carry?</div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-row flex-wrap '>
                <p className='mb-5 fleetXpert-keywords'>Perishable goods</p>
                <p className='mb-5 fleetXpert-keywords'>General freight </p>
                <p className='mb-5 fleetXpert-keywords'>Refrigerated goods (Cold Chain)</p>
                <p className='mb-5 fleetXpert-keywords'>Hazardous materials (HAZMAT)</p>
                <p className='mb-5 fleetXpert-keywords'>Construction materials </p>
                <p className='mb-5 fleetXpert-keywords'>Livestock</p>
                <p className='mb-5 fleetXpert-keywords'>Automotive and machinery</p>
                <p className='mb-5 fleetXpert-keywords'>Luxury and high-value goods</p>
                <p className='mb-5 fleetXpert-keywords'>Medical and healthcare Supplies</p>
                <p className='mb-5 fleetXpert-keywords'>Agricultural products</p>
                <p className='mb-5 fleetXpert-keywords'>E-commerce deliveries</p>
                <p className='mb-5 fleetXpert-keywords'>Heavy duty and industrial goods Products</p>
                <p className='mb-5 fleetXpert-keywords'>Waste & recycling material</p>
              </div>
            </div>

            {/* understang stakeholders */}
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Understanding <span className='text-fleetXpert'>Stakeholders</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Designing a fleet management system involves a variety of stakeholders, each bringing unique perspectives and requirements. Here is a list of key stakeholders:</p>
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Fleet Managers</span> - Oversee the entire fleet operations.</p>
                {/* Needs: Efficient management tools, real-time tracking, reporting features, and maintenance scheduling. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Drivers</span> - Operate the vehicles and ensure timely deliveries.</p>
                {/* Needs: User-friendly mobile interface, clear route guidance, behavior feedback, and compliance tracking. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Depot Administration</span> - Coordinate and dispatch vehicles for deliveries and services.</p>
                {/* Needs: Real-time vehicle location, communication tools, and dynamic routing capabilities. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Maintenance Teams</span> - Maintain and repair vehicles.</p>
                {/* Needs: Maintenance schedules, history records, alert systems for upcoming maintenance, and spare parts inventory management. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Safety and Compliance Officers</span> - Ensure that all operations comply with safety regulations and standards.</p>
                {/* Needs: Driver behavior monitoring, compliance reporting, and real-time alerts for violations. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Finance and Accounting</span> - Manage the financial aspects of fleet operations.</p>
                {/* Needs: Cost tracking, fuel management reports, and expense analysis. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>IT Department</span> - Implement and maintain the fleet management system.</p>
                {/* Needs: System integration capabilities, data security features, and technical support. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Senior Management/Executives</span> - Oversee overall company performance and strategic direction.</p>
                {/* Needs: High-level analytics, ROI reports, and overall fleet performance metrics. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Customers</span> - Receive goods or services delivered by the fleet.</p>
                {/* Needs: Reliable delivery times, tracking capabilities, and communication regarding delivery status. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Suppliers and Partners</span> - Provide vehicles, parts, and other necessary resources.</p>
                {/* Needs: Inventory tracking, order management, and communication tools. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Regulatory Bodies</span> - Ensure fleet operations comply with legal standards.</p>
                {/* Needs: Compliance reports, audit trails, and real-time data access. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>Sales and Marketing Teams</span> - Promote and sell the fleet management system.</p>
                {/* Needs: Clear understanding of features, benefits, and competitive advantages. */}
                <p className='mb-5'><span className='text-fleetXpert font-semibold'>HR Department</span> - Manage driver recruitment, training, and performance.</p>
                {/* Needs: Driver performance data, training records, and compliance with employment regulations. */}
              </div>
            </div>

            {/* Competitors */}
            <div className='mt-10 md:mt-20'>
                <div className='project-section-subheading'><span className='text-fleetXpert'>Competitors</span> study</div>
                <p className='mb-5'>These systems help the Indian government efficiently monitor and manage public transport, waste management vehicles, law enforcement fleets, and other essential services.</p>
                <div className='text-sm italic mb-5 text-gray-400'>Source: araiindia.com, blackboxgps.net, Fleetx.io, loconav.com & transportation.trimble.com</div>
                <img className='mb-7' src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1723753817/fleetXpert/indian-competitors_icwwgn.png' alt='Indian competitors study'/>
                <p className='mb-5'>These are some of systems which are used by other countries. These providers offer a range of solutions tailored to different needs and budgets, making it essential to assess your specific requirements and preferences when selecting a fleet management system.</p>
                <div className='text-sm italic mb-5 text-gray-400'>Source: samsara.com, geotab.com, verizonconnect.com, fleetcomplete.com & teletracnavman.com</div>
                <img src='https://res.cloudinary.com/db3h7h0pa/image/upload/v1723753817/fleetXpert/indian-competitors_icwwgn.png' alt='Indian competitors study'/>
            </div>
          </div>


          {/* Industry Research */}
          <div className='project-section'>
          <div className='project-section-heading'>Defining to Concept </div>
            <div className='flex flex-row flex-wrap'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Marrowing<span className='text-fleetXpert'> the stakeholders?</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>In previous section, there were lots of possible stakeholders. By considering Indian context, stakeholders are narrowed down as below</p>
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1723751428/fleetXpert/fleet-stakeholders_tneuqw.png" alt='stakeholders'/>
              </div>
            </div>

            {/* Mapping opportunity */}
            <div className='flex flex-row flex-wrap mt-10 md:mt-20'>
              <div className='w-full md:w-1/3 md:pr-4'>
                <div className='project-section-subheading'>Mapping<span className='text-fleetXpert'> opportunities</span></div>
              </div>
              <div className='w-full md:w-2/3 md:pl-4 flex flex-col justify-center'>
                <p className='mb-5'>Considering Indian context, some of important areas are mapped to design fleet management system. </p>
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1723755724/fleetXpert/Mapping_opportunity_vgyzom.png" alt='opportunity mapping'/>
              </div>
            </div>

            {/* Information Architecture */}
            <div className='mt-10 md:mt-20'>
                <div className='project-section-subheading'>Information<span className='text-fleetXpert'> Architecture</span></div>
                {/* <p className='mb-5'>Considering Indian context, some of important areas are mapped to design fleet management system. </p> */}
                <img src="https://res.cloudinary.com/db3h7h0pa/image/upload/v1723755914/fleetXpert/information-architecture_sye17r.png" alt='Information Architecture'/>
            </div>
          </div>


      </div>
      <div className='my-20'><a name="Home page of the website" className="text-xl my-20" href="/">&#60;&#60; Back to home page</a></div>
    </div>
  )
}
export default FleetXpert