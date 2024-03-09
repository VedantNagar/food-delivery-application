import { createContext, useState } from "react";

export const foodContext = createContext();

export function FoodContextProvider({ children }) {
    const [showToast, setShowToast] = useState(false);
    const [render, setRender] = useState(false);
    return (
        <foodContext.Provider
            value={{
                showToast,
                setShowToast,
                render,
                setRender,
            }}
        >
            {children}
        </foodContext.Provider>
    );
}
