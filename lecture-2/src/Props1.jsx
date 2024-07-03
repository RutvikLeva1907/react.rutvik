// function Props1() {
//     return (
//         <div>
//             <h1>hello react</h1>
//         </div>
//     );

// }
// export default Props1;

// import React from 'react';

// function Greeting({ name }) {
//   return (
//     <div>
//       <h1>{name ? `Hello, ${name}!` : 'Welcome, Guest!'}</h1>
//     </div>
//   );
// }

// export default Greeting;


import React  from 'react';
// import './UserProfileCard.css';

const usar = ({ name, age, bio, location, profilePicture }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [bioText, setBioText] = useState(bio);
  const [editMode, setEditMode] = useState(false);
  const [showFullBio, setShowFullBio] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const toggleFollow = () => setIsFollowing(!isFollowing);
  
  const handleBioChange = (e) => setBioText(e.target.value);
  const saveBio = () => setEditMode(false);
  const addComment = () => {
    if (newComment.trim()) {
      const timestamp = new Date().toLocaleString();
      setComments([...comments, { text: newComment, timestamp }]);
      setNewComment('');
    }
  };

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="user-profile-card">
      <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
      <h2>{name}</h2>
      <p>{location}</p>
      <p>Age: {age}</p>
      {editMode ? (
        <div>
          <textarea value={bioText} onChange={handleBioChange}></textarea>
          <button onClick={saveBio}>Save</button>
        </div>
      ) : (
        <p >
          {showFullBio ? bioText : `${bioText.substring(0, 100)}...`}
          <button onClick={() => setShowFullBio(!showFullBio)}>
            {showFullBio ? 'Show less' : 'Read more'}
          </button>
        </p>
      )}
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Cancel' : 'Edit Bio'}
      </button>
      <button onClick={toggleFollow}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      <div className="comments-section">
        <h3>Comments</h3>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={addComment}>Add</button>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <span>{comment.text}</span>
              <span className="timestamp">{comment.timestamp}</span>
              <button onClick={() => deleteComment(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default usar;
