import {
  createContext,
  useContext,
  useState
} from "react";
import {faker} from "@faker-js/faker";


function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body : faker.hacker.phrase()
  };
}

// Step 1: Create new context
const PostContext = createContext();

function PostProvider({children}) {
  const [posts, setPosts]             = useState(() => Array.from({length: 30}, () => createRandomPost()));
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts = searchQuery.length > 0 ? posts.filter((post) => `${post.title} ${post.body}`
    .toLowerCase()
    .includes(searchQuery.toLowerCase())) : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return <PostContext.Provider value={{
    posts      : searchedPosts,
    onClearPost: handleClearPosts,
    onAddPost  : handleAddPost,
    searchQuery,
    setSearchQuery

  }}>
    {children}
  </PostContext.Provider>;
}


function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("💁🏼  😡😡️PostContext is used outside of the scope or"
                    + " PostProvider 💁 😡😡");
  return useContext(PostContext);
}

export default PostProvider;
export {PostContext, usePosts};
