import React from 'react';
import './HomePage.css';

const HomePage = ({ posts }) => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Social Media App</h1>
      </header>

      {/* Stories Section */}
      <section className="stories">
        <h2>Stories</h2>
        <div className="story-list">
          {posts.slice(0, 5).map((story) => (
            <div key={story.id} className="story">
              <img src={story.thumbnail} alt="Story" />
              <p>{story.user}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Posts Section */}
      <section className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <p>{post.user}</p>
            </div>
            <img src={post.url} alt="Post" className="post-image" />
            <div className="post-actions">
              <button>❤️ Like</button>
              <button>🔄 Share</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
