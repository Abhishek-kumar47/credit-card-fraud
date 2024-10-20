import card from '../assets/card1.png';

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
            <div className="w-full h-full bg-cover bg-center"></div>
          </div>

          <div className="col-span-1 row-span-1 bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>14%</div>
              <div className="flex space-x-1">
              <div className="w-6 h-6 bg-red-500 rounded-full relative -mr-3"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full relative -ml-2 mix-blend-overlay opacity-100"></div>
              </div>
            </div>
            <div>
              <div className="text-sm">TOTAL SPEND</div>
              <div className="text-xl">₹ 30,000</div>
            </div>
          </div>

          <div className="col-span-1 row-span-1 bg-green-500 p-4 rounded-lg flex flex-col justify-between items-end">
            <div className="w-12 h-12 border-4 border-black rotate-45 "></div>
            <div className="w-12 h-12 border-4 border-black rotate-45 pb-9"></div>
            <div className="text-sm">DATA COMPLIANCE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
