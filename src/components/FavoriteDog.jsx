// change the specified dog to that which is chosen on the gallery page
import { useContext } from "react";
import { FavDogContext } from "../context/FavDogContext";

function FavoriteDog({dogs}) {
    const { favDogName } = useContext(FavDogContext)
    let findDog = dogs.find(dog => dog.name === favDogName)

    return (
        <>
            <h2 className="space" >Current favorite Dog!</h2>
            <div className='flexy'>
                <h3>{`Name: ${findDog.name}`}</h3>
                <h3>{`Cuteness Level: ${findDog.cuteness}`}</h3>
            </div>
            <img className='space' src={`${findDog.image}`} alt='funny dog' />
        </>
    )
}


export default FavoriteDog;
