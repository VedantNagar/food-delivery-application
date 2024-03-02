import { GoAlertFill } from "react-icons/go";

const Dashboard = () => {
    return (
        <span className="text-6xl text-center text-red-600">
            <span>
                <GoAlertFill />
            </span>
            Currently in maintenance <br></br> Sorry for the inconvenience
            caused
        </span>
    );
};
export default Dashboard;
