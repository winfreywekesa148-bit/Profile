// display profile
function Profile({name, role }) {
    return (
        <div className="profile">
            <h1>Profile</h1>
            <p>Name: {name}</p>
            <p>Role: {role}</p>
        </div>
    )
}

export default Profile;
