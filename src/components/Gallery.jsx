import { useContext, useEffect } from "react";
import { FavDogContext } from "../context/FavDogContext";
import { useNavigate } from "react-router-dom";

function Gallery({dogs}) {
    const { favDogName, setFavDogName } = useContext(FavDogContext);

    const navigate = useNavigate();

    const clicking = (name) => {
        setFavDogName(name);

        let currDog = dogs.find(dog => favDogName === dog.name)

        navigate(`/gallery/${currDog.id}`)
    }

    return(
        <div>
            <div className="space">
                {dogs.map(dog => (
                    <div>
                        <img src={`${dog.image}`} alt='cute dog' className="space" />
                        <div>{`${dog.name}`}</div>
                        <div>{`${dog.cuteness}`}</div>
                        <button onClick={() => clicking(dog.name)}>Pick Me!</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;
