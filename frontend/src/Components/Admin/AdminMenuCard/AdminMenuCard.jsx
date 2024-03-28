import tacos from "../../../../assets/tacos.png";
const AdminMenuCard = ({ data }) => {
    // console.log(data)
    return (
        <div className="border border-slate-300 p-2 rounded-lg justify-between gap-4 shadow-md flex">
            <div className="object-contain w-32 h-32">
                <img
                    src={data?.image[0]}
                    alt=""
                    className="w-full h-full object-cover rounded-lg "
                />
            </div>
            <div className="w-1/3 flex flex-col justify-center gap-2">
                <h1 className="text-lg font-bold">{data?.name}</h1>
                <p className="truncate">{data?.about}</p>
                <span>${data?.price}</span>
            </div>

            <div
                className="inline-flex w-fit rounded-md shadow-sm h-fit my-auto"
                role="group"
            >
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-fudo-red focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                >
                    Edit
                </button>
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-fudo-red focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
export default AdminMenuCard;
