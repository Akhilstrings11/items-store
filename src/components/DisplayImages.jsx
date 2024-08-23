import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const DisplayImages = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const usersData = querySnapshot.docs.map(doc => doc.data());
      setUsers(usersData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <img src={user.imageUrl} alt={user.name} width="100" />
        </div>
      ))}
    </div>
  );
};

export default DisplayImages;
