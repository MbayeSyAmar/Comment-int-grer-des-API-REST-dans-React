import React, { useState, useEffect } from 'react';
import api from '../services/api';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts'); // Appeler l'endpoint NestJS
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts :", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p>Chargement des posts...</p>;
  }

  return (
    <div>
      <h1>Liste des Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
