import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Soo jiido Posts iyo SearchBar components-ka
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts'; 
// Import the dummyData
import dummyData from './dummy-data'
import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // Waxaa sameysaa state la dhaho 'posts' si aad ugu keydisid wixii dummyData ka imaanaayo.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  // Hadaa rabtid inaad "SearchBar" ka shaqeysiisid (Waa Stretch ogow), waxaan u baahanahay state kale oo aad ku keydisid qoraalka aad raadineysid.
 
  const [posts,setPosts]=useState(dummyData);
  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar/>
      <Posts posts={posts}/>
      {/* Soo jiido SearchBar iyo Posts components-ka hoos, si aad u muujiyo */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
      {/* Fiiri sida loo sameeyo component-kasta, si aad u ogaato PROPS-ka ay u baahan tahay, hadayba jiraan props ay u baahanatahy! */}
    </div>
  );
};
export default App;
