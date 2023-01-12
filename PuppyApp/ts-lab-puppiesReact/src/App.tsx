import React, { FormEvent, useEffect, useState } from "react";
import IPuppy from "./Types/IPuppy";
import Header from "./Components/Header";
import PuppyList from "./Components/PuppyList";

function App() {
  const [puppies, setPuppies] = useState<IPuppy[]>([
    { id: "", name: "", breed: "", birthDate: "" },
  ]);
  const [name, setName] = useState<string>("");
  const [breed, setBreed] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const getPuppies = async () => {
    const response = await fetch("https://localhost:7220/api/Puppies");
    const puppies = await response.json();

    setPuppies(puppies);
  };

  useEffect(() => {
    getPuppies();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("https://localhost:7220/api/Puppies", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        breed: breed,
        birthDate: birthDate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const puppy: IPuppy = await response.json();
    if (response.status === 201) {
      getPuppies();
      setMessage("Dog added successfully");
    } else {
      setMessage("Error, Please try again");
    }
  };

  const handleUpdate = async (e: FormEvent, id: string) => {
    e.preventDefault();
    const response = await fetch(`https://localhost:7220/api/Puppies/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        breed: breed,
        birthDate: birthDate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    getPuppies();
  };

  const handleDelete = async (e: FormEvent, id: string) => {
    e.preventDefault();
    const response = await fetch(`https://localhost:7220/api/Puppies/${id}`, {
      method: "DELETE",
    });
    getPuppies();
  };

  return (
    <div>
      <Header
        handleSubmit={handleSubmit}
        setName={setName}
        setBreed={setBreed}
        setBirthDate={setBirthDate}
        message={message}
      />
      <PuppyList
        puppies={puppies}
        handleUpdate={handleUpdate}
        setName={setName}
        setBreed={setBreed}
        setBirthDate={setBirthDate}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
