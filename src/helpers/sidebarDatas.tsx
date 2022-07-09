import {
    FaTh,
    FaUserAlt,
} from "react-icons/fa";
import { MdLogout, MdComputer } from "react-icons/md";
import { BsFillPieChartFill } from "react-icons/bs";

const menuItem: Array<any> = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaTh />
    },
    {
        path: "/user",
        name: "User",
        icon: <FaUserAlt />
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: <MdComputer />
    },
    {
        path: "/reports",
        name: "Reports",
        icon: <BsFillPieChartFill />
    },
    {
        path: "/logout",
        name: "Logout",
        icon: <MdLogout />
    },
];

export default menuItem;