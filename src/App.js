import { useState } from "react";
import "./App.css";
import usersData from './mock.json'




export default function App() {
  const users = usersData.users
  let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel tellus vel tortor aliquam tempor. Vivamus at varius nisi. Vivamus sed velit accumsan, placerat enim vel, iaculis sapien. Morbi fringilla erat vel tincidunt iaculis. Nullam fringilla ipsum vel arcu blandit, in pharetra nulla placerat. Aenean neque massa, pretium tincidunt cursus quis, condimentum sed erat. Integer nec tortor hendrerit, congue metus vitae, scelerisque lacus. In congue suscipit libero, eu euismod urna euismod sit amet. Cras tincidunt, risus a pulvinar rutrum, libero ligula sollicitudin sem, ac tempor turpis ante in nulla. Ut fringilla mi vitae malesuada vestibulum. Aenean eu ipsum mattis, vulputate justo et, pulvinar arcu. Sed convallis augue quam, id finibus arcu consequat ac. Praesent eget pharetra sem, lacinia scelerisque odio. Nullam orci nunc, dictum ac faucibus sed, feugiat a ipsum. Morbi eget rutrum lorem, id semper tellus. Sed quis pharetra tortor, vitae blandit erat. Maecenas hendrerit justo sed leo ullamcorper, non tincidunt nulla condimentum. Integer pellentesque tortor elit, vitae dictum lorem cursus ut. Nunc ac gravida mi, et facilisis dolor. Praesent ut diam aliquet, commodo elit vitae, placerat libero. In hac habitasse platea dictumst. Integer vulputate aliquam ipsum, interdum ultricies turpis finibus at. Vivamus a dictum turpis. Ut ornare dui non convallis rutrum. Aenean posuere, nibh eu sodales dictum, nibh est maximus nisl, sed congue est arcu vel velit. Mauris pretium et quam eget faucibus. Ut eget justo ante. Phasellus mattis maximus leo, ut molestie diam. Fusce eros neque, scelerisque in pellentesque quis, porttitor viverra quam. In varius dolor posuere leo iaculis, quis lobortis lectus porttitor. Nunc pharetra vulputate odio et tincidunt. Nulla fermentum ex est, id efficitur lacus sollicitudin a."
  const [selectedUser, setSelectedUser] = useState(null)
  const [showMore, setShowMore] = useState(false);


  const handleClick = (user) => {
    setSelectedUser(user)
  };

  const userList = users.map(user =>
    
    <li key={user.id}>
      <button onClick={ () => handleClick(user) }>
        <p>
          <b>{ user.firstName }</b>
          <b>{ user.lastName }</b>
        </p>
      </button>
    </li>)


  return (

    <div>
      <div className="selectedUser">
        { selectedUser && (
          <div className="userCard">
            <img src={selectedUser.image}></img>
            <div className="userInfo">
              <h2>{selectedUser.firstName} "{selectedUser.maidenName}" {selectedUser.lastName}</h2>
              <p>Username: {selectedUser.username}</p>
              <p>Email: {selectedUser.email}</p>
              <p>Phone: {selectedUser.phone}</p>
              <p>Gender: {selectedUser.gender}</p>
              <p>Age: {selectedUser.age}</p>
              <p>Birth date: {selectedUser.birthDate}</p> <br></br>

              <h3>Adress: </h3>
              <p>Street: {selectedUser.address.address}</p>
              <p>Coordinates: {selectedUser.address.coordinates.lat}, {selectedUser.address.coordinates.lng}</p>
              <p>State: {selectedUser.address.state}</p>
              <p>Postal code: {selectedUser.address.postalCode}</p> <br></br>

              <h3>Description: </h3>
              <p>{showMore ? text : `${text.substring(0, 80)}`}
              <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button></p>
            </div>
              
          </div>
        ) }

      </div>

      
      <div className="container">
        <ul>{ userList }</ul>
      </div>

      
    </div>
  );
}
