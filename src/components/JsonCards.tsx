// UserCard.tsx
import React from "react";
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    
  return (
    <div className="card-containers">
      <span className="pro">{user.id}</span>
      <img className="round" src="../prof.png" alt="user" />
      <h3>{user.name}</h3>
      <h6>{user.email}</h6>
      <p>{user.phone}</p>

      <div className="skills">
        <h6>Website</h6>
        <p>{user.website}</p>
        <h6>Address</h6>
        <p>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
        <h6>Company</h6>
        <p>{`${user.company.name} - ${user.company.catchPhrase} - ${user.company.bs}`}</p>
      </div>
    </div>
  );
};

export default UserCard;
