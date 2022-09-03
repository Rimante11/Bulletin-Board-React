import { useState } from 'react';
import Post from './Post'; 

const BulletinB = () => {
    //skapar post data
    const [myPost, setMyPost] = useState([
        {
            question: "Vad är tre fördelar med att använda React?",
            answer: "Ultimat flexibilitet och kompatibilitet. Hassle-free återanvändning av komponenter. Är ett av de mest använda ramverket. ",
            liked: false,
            id: 1 // för att veta vilken fråga
            
        },
        {
            question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
            answer: "En ensidig applikation (SPA) är en webbapp som presenteras för användaren via en enda HTML-sida för att vara mer lyhörd och för att närmare replikera en skrivbordsapplikation eller en inbyggd app. På begäran laddar en ensidig app bara om den data som behövs för användaren. I fallet med en flersidig app uppdateras hela webbsidans innehåll, vilket också gäller för alla sidor som användaren begär.",
            liked: false,
            id: 2
        },
        {
            question: "Nämn tre skillnader mellan React och Angular.",
            answer: "Angular är ett Javascript-ramverk byggt med Typescript, medan Reactjs är ett Javascript-bibliotek och byggt med JSX. Angular används mest för att bygga komplexa företagsklassade appar som ensidiga appar och progressiva webbappar, medan React används för att bygga UI-komponenter i alla appar med ofta varierande data. Angulars inlärningskurva är brantare på grund av dess för många inbyggda funktioner medan Reacts mindre paketstorlek.",
            liked: false,
            id: 3
        },
    ]);

    const isLiked = (id) => {

        let allMyPosts = [...myPost];
        allMyPosts[id].liked = true;
        setMyPost([...allMyPosts]);
        
    }

    return ( //Returnerar my bulleting board
        <main className='bulletinBoard'>
            {myPost.map((post, key) => {
                return (
                    <Post 
                        key={key}
                        question={post.question} 
                        answer={post.answer} 
                        liked={post.liked} 
                        isLiked={isLiked} 
                        index={key} 
                    />
                )
            })};
        </main>
    )
}

export default BulletinB;