import React, { useState, useEffect } from "react";
import axios from "axios";

import { db } from "../firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

const Home = () => {
  const [inputName, setInputName] = useState("");
  const [result, setResult] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  // Read
  useEffect(() => {
    const q = query(collection(db, "userDetails"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let userDetailsArr = [];
      querySnapshot.forEach((doc) => {
        userDetailsArr.push({ ...doc.data(), id: doc.id });
      });
      setUserDetails(userDetailsArr);
    });
    return () => unsubscribe();
  }, []);

  const handleInputChangeName = (event) => {
    setInputName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        Name: inputName,
      };
      console.log(payload);
      const response = await axios.post(
        "http://127.0.0.1:5001/mamamia-test-ca081/us-central1/endpoint/",
        payload.Name
      );
      setResult(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <h5>FullName:</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputName}
            onChange={handleInputChangeName}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>{result}</div>
      <div>
        {userDetails.map((details, id) => (
          <h1 key={id}>{details.name}</h1>
        ))}

        {/* {Object.entries(userDetails).map(([userDetails, id]) => (
          <div key={id}>
            <h1>{userDetails[0]}</h1>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Home;

//======================================================================================