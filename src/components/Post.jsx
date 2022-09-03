import LikedPost from "./LikedPost.jsx";

//sätter in mina propsar
const Post = ({question, answer, liked, isLiked, index}) => {
    const likedPost = () => {
        isLiked(index)
    }

    
    //bygger upp min post
    return (
        <div className="myPost">
            <p className="question"><b>Fråga: </b>{question}</p>
            <p className="answer"><b>Svar: </b>{answer}</p>
            {/*if not liked lämna like annar skriver ut PostLike jsx */}
            {!liked ? 
                (<button className="likeBtn" onClick={likedPost}>
                    <b>Like</b>
                </button>)

                : <LikedPost />
            }
        </div>
    )
}

export default Post;