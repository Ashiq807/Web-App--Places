import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
    id: 'u1',
    name: 'Ashiq o s',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    places: 3
  }
];

  return <UsersList items={USERS} />;
};

export default Users;
