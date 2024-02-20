import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userContext } from "../../../userContext/context";
import { useContext } from "react";
import classes from "./Login.module.css";
import Button from "../../Utils/Button/Button";
import axios from "axios";
import { loginUrl } from "../../../../urls/userUrl";
import { toast } from "react-hot-toast";
const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const { setIsLogin } = useContext(userContext);
    const registerUser = async (e) => {
        e.preventDefault();
        // console.log(data)
        const { email, password } = data;
        try {
            const response = await axios.post(loginUrl, {
                email,
                password,
            });
           
            const values = response.data
            
            if (values.error) {
                toast.error(values.error, {
                    duration: 2000,
                });
            } else {
                
                setData({});
                toast.success("Logged in", {
                    duration: 2000,
                });
                setIsLogin(true);
                navigate("/homepage");
            }
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <form onSubmit={registerUser} className={classes.formAction}>
            <h1>Login</h1>
            <div className={classes.input}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={data.email}
                    onChange={(e) =>
                        setData({
                            ...data,
                            email: e.target.value,
                        })
                    }
                />
            </div>
            <div className={classes.input}>
                <input
                    type="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={(e) =>
                        setData({
                            ...data,
                            password: e.target.value,
                        })
                    }
                />
            </div>
            <Button type="submit" title={"Continue"} />
        </form>
    );
};
export default Login;
