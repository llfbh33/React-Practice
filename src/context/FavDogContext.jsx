import { createContext, useState } from "react";

export const FavDogContext = createContext();


function FavDogProvider(props) {
    const [favDogName, setFavDogName] = useState('Chester');

    return (
        <FavDogContext.Provider
        value={{
            favDogName,
            setFavDogName
        }}
        >
            {props.children}
        </FavDogContext.Provider>
    )
}

export default FavDogProvider
