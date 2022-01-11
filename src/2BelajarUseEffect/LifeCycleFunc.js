import React, { useEffect, useState } from "react";

function LifeCycleFunc() {
  const [name, setName] = useState("");
  const [isUpdate, setUpdate] = useState(false);

  //Component didmount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((response) => response.json())
      .then((json) => {
        console.log("UseEffect : Component did mount");
        setName(json.name);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PUT",
      body: JSON.stringify({
        id: 2,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setUpdate(true));
  };

  //Component did update
  useEffect(() => {
      if(isUpdate){
          alert('UseEffect : Nama Sukses Diupdate')
          setUpdate(false)
      }
  }, [isUpdate])

  //Component will unmount
  useEffect(() => {
      
      return () => {
          console.log('UseEffect : Component di copot');
      }
  }, [])

  return (
    <div>
      <h3>Name : {name} </h3>
      <hr />
      <h3>Update Name :</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="Change Name"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LifeCycleFunc;
