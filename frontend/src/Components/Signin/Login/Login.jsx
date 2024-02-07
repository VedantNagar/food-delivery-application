import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userContext } from "../../../userContext/context";
const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const { setIsLogin } = useContext(userContext);
    return <div>Login</div>;
};
export default Login;
