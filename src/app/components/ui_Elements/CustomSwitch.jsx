const CustomSwitch = ({ labelTittle }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="text-[#FFFFFF] font-normal text-[18px] pr-4">
        {labelTittle}
      </span>
      <input type="checkbox" value="" className="sr-only peer " />
      <div
        className="relative w-[50px] h-6 bg-[#FFFFFF] peer-focus:outline-none peer-focus:ring-4
     rounded-full peer
    dark:bg-[#FFFFFF] peer-checked:after:translate-x-full
     rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#10B981] after:content-[''] 
     after:absolute after:top-[2px] after:start-[2px] after:bg-[#10B981]  after:border-[#10B981]
     after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
     "
      ></div>
    </label>
  );
};
export default CustomSwitch;
