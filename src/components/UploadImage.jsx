import React, { useState } from 'react';
import { db, storage } from '../firebaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const UploadImage = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image && name) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageURL = await getDownloadURL(storageRef);

      await addDoc(collection(db, 'users'), {
        name: name,
        imageUrl: imageURL,
      });

      setName('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='formm position-absolute top-50 start-50 translate-middle pp d-flex flex-column align-items-center border rounded p-3 ' >
        <h4 className='formm' >Memorify</h4>
      <input 
        type="text" 
        className='m-2 form-control formm'
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter name" 
      />
      <input 
        type="file" 
        className='form-control mb-2 formm'
        id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"
        aria-label="Upload"
        onChange={handleImageChange} 
      />
      <button className='btn btn-outline-light'
        id="inputGroupFileAddon04"
        type="submit">Upload</button>

      

    </form>
  );
};

export default UploadImage;
