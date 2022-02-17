import React,{useState} from 'react';
import Tweet from './Tweet';

const Tweets = () => {
    const [tweets,setTweets]=useState(
        [
        {
        id:1,
        name:'Bill Gates',
        tweeterhandle:'@billgates',
        tweet:'Lorem ipsum dolor sit amet consectetur adipisicing.',
        likes:0
    },{
        id:2,
        name:"Jeff Bezos",
        tweeterhandle:"@jeffbezos",
        tweet:"Lorem ipsum dolor sit",
        likes:0
    },
    {
        id:3,
        name:"Mukesh Ambani",
        tweeterhandle:"@mukambani",
        tweet:"Lorem ipsum dolor sit",
        likes:0
    },
    {
        id:4,
        name:"Gautam Adani",
        tweeterhandle:"@gautamadani",
        tweet:"Lorem ipsum dolor sit",
        likes:0
    }

]);

const handleLike=(id)=>{
    const updatedState=[...tweets];
    const index=tweets.findIndex(el=>el.id===id);
    updatedState[index].likes+=1;
    setTweets(updatedState);

}
const handleDislike=(id)=>{
    const updatedState=[...tweets];
    const index=tweets.findIndex(el=>el.id===id);
    if(updatedState[index].likes>0)
        updatedState[index].likes-=1;
    setTweets(updatedState);

}
    const renderTweets=()=>{
        return tweets.map(item=>{
            return <Tweet tweet={item} handleLikeProp={handleLike} handleDislikeProp={handleDislike} ></Tweet>
        })
    }
  return (<>
  {renderTweets()}
  </>
    
  )
}

export default Tweets