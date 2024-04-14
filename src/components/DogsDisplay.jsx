import { FavDogContext } from "../context/FavDogContext"
import { useContext, useState } from "react"

function DogsDisplay({dogs}) {
    const { favDogName } = useContext(FavDogContext);
    let currDog = dogs.find(dog => dog.name === favDogName)
    const [comment, setComment] = useState('');
// These comments will not persist if you go to a different page they will reset
// instead of pushing them into an array we would want to add them to the database
// and then render them when the page is needed
    const [commentList, setCommentList] = useState([])

    const submit = () => {
        let array = commentList;
        array.push(comment);

        setCommentList(array);
        setComment('');

        console.log(commentList)
    }

    return (
        <>
        <div>
            <h1>Dog Stuff Here</h1>
            <h2>{`Name: ${favDogName}`}</h2>
            <h2>{`Cuteness: ${currDog.cuteness}`}</h2>
            <img src={`${currDog.image}`} alt='cute dog' />
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                ></textarea>
            <button onClick={submit}>Add Comment</button>
        </div>
        <div>
            <ul>
                {commentList.map(single => (
                    <>
                        <li>{`${single}`}</li>
                    </>
                ))}
            </ul>
        </div>

        </>
    )
}

export default DogsDisplay
