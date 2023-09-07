import "./UserCards.css"

export default function UserCards({
  name,
  location,
  dob,
  picture,
  phone,
  email,
  deleteUsers,
  id,
}) {
  return (
    <div className="userCard">
      <img className="userImage"src={picture.large} alt={`picture of ${name.first} ${name.last}`} />
        <h2 id="userName">
        {name.first} {name.last}
        </h2>
      <div className="userInfo">
        <p>I am from {location.country}</p>
        <p>Phone : {phone}</p>
        <p>Email :{email}</p>
        <p>
          Birthday :{new Date(dob.date).toLocaleDateString("fr-FR", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <button className="deleteUser" onClick={() => deleteUsers(id)}>&#x2718;</button>
      </div>
    </div>
  );
}
