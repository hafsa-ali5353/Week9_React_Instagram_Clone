import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  // Hubi in component-ga ka sareysa midaan ay props sax ah soo direyso.

  const {post} = props;

  console.log(post);

    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments]=useState(post.comments);
 // Function to increase the number of likes
  // Function-ka kor loogu qaado likes-ka

  const incrementLikes = () => {
    setLikes(likes + 1);
  };
const numberOfLikes =likes;

  return (
    <div className='post-border' key={post.id}>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
     
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? Please send all the props it needs */}
      {/* Component-ga 'LikeSection' ma heysataa wixii props ah oo ay u baahantahay? Hadaysan heysan, fadlan u dir */}

      <LikeSection incrementLikes={incrementLikes} numberOfLikes={numberOfLikes}/>
      

      {/* Comments also wants its props! */}
      {/* Fadlan u dir props-ka ay 'Comments' component u baahantahay */}
      <Comments comments={comments}/>
    
    </div>
  );
};

export default Post;
