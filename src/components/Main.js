import card from '../assets/card1.png';
import person from '../assets/output.png'

const Main = () => {
  return (
    <div className="flex justify-center items-center h-screen overflow-hidden space-x-10">
      <div className="flex-1 font-MONO pb-[13%] pl-[7%] text-white">
        <p className="tracking-widest leading-relaxed text-[36px]">
          FORTIFYING TRUST,
        </p>
        <p className="tracking-widest text-[36px]">
          SECURING EVERY TRANSACTION
        </p>
        <p className="mt-4 tracking-wide text-[23px]">
          Seamlessly integrating advanced analytics and personalized monitoring
          to safeguard your financial integrity and elevating fraud prevention
          to new heights
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 bg-black text-white max-w-[500px]">
          <div className="col-span-1 row-span-1 bg-gray-800 p-4 rounded-lg flex flex-col justify-top ">
            <div className="text-3xl font-bold font-myFont">20+</div>
            <div className="mt-16 font-serif tracking-[px]">Years of Trusted service</div>
          </div>

          <div className="col-span-2 row-span-1 ">
            <img src={card} alt="card" className="rounded-lg" />
          </div>

          <div className="col-span-2 row-span-2 bg-pink-400 rounded-lg overflow-hidden">
                <div className="w-full h-full">
                    <img src={person} alt="person with credit card" className="w-full h-full object-cover" />
                </div>
          </div>

          <div className="col-span-1 row-span-1 bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>14%</div>
              <div className="flex space-x-1">
              <div className="w-6 h-6 bg-red-500 rounded-full relative -mr-3"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full relative -ml-2 mix-blend-color-dodge opacity-100"></div>
              </div>
            </div>
            <div>
              <div className="text-sm font-serif">TOTAL SPEND</div>
              <div className="text-xl font-myFont">₹ 30,000</div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-green-600 p-4 rounded-lg flex flex-col justify-between items-end overflow-hidden">
            <div className="-mr-4">
                <div className="w-12 h-12 border-2 border-black bg-green-400 rotate-45 -mt-8 overflow-hidden"></div>
                <div className="w-12 h-12 border-2 border-black bg-green-200 rotate-45 mix-blend-color-burn"></div>
            </div>
            <div className="text-sm tracking-wider font-serif">DATA COMPLIANCE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
