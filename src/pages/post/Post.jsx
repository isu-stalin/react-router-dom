import React, { useEffect, useState } from "react"
import { api } from "../../api";

const Post = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.error("Failed to fetch posts:", err));
    }, []);

    return (
      <div className="p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-700">Posts</h1>
          {posts.length === 0 ? (
            <p className="text-center text-gray-500">No posts found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map(post => (
                <div key={post.id} className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-3">{post.body}</p>
                  <p className="text-xs text-gray-400">👀 {post.views} | 🏷️ {post.tags.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );    
}

export default Post
