
import { createContext} from "react";


export const foodContext = createContext();

export function FoodContextProvider({ children }) {
    
    return (
        <foodContext.Provider
            value={{
             
            }}
        >
            {children}
        </foodContext.Provider>
    );
}
