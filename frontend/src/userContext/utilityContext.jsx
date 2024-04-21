import { createContext, useState } from "react";

export const utilityContext = createContext();

export function UtilityContextProvider({ children }) {
    const [showToast, setShowToast] = useState(false);
    const [render, setRender] = useState(false);
    const [modal, setModal] = useState(false);
    const [adminMenuModal, setAdminMenuModal] = useState(false);
    return (
        <utilityContext.Provider
            value={{
                showToast,
                setShowToast,
                render,
                setRender,
                modal,
                setModal,
                adminMenuModal,
                setAdminMenuModal,
            }}
        >
            {children}
        </utilityContext.Provider>
    );
}
