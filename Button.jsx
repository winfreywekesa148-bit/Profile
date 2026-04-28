import { useState } from "react";

function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button onClick={handleClick}>
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

export default FollowButton;