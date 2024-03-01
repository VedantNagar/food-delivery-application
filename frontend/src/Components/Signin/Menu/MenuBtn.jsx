const MenuBtn = ({ img, title, onClick }) => {
    return (
        <div className="text-sm font-poppins flex items-center gap-3 border border-fudo-red py-2 px-4 rounded-xl cursor-pointer hover:bg-fudo-red hover:text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 lg:text-xs lg:gap-2 md:py-1 md:px-2 min-w-32 mx-2">
            <img src={img} alt="not found" className="w-8 h-8" />
            <h3 className="text-sm whitespace-nowrap">{title}</h3>
        </div>
    );
};
export default MenuBtn;
