import { useState } from "react";
import "../styles/Puppy.css";
import IPuppy from "../Types/IPuppy";

interface IPuppyInfo {
  puppy: IPuppy;
  handleUpdate: Function;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setBreed: React.Dispatch<React.SetStateAction<string>>;
  setBirthDate: React.Dispatch<React.SetStateAction<string>>;
  handleDelete: Function;
}

const Puppy = ({
  puppy,
  handleUpdate,
  setName,
  setBreed,
  setBirthDate,
  handleDelete,
}: IPuppyInfo) => {
  const [infoShown, setInfoShown] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("More Info");

  const handleClick = () => {
    if (infoShown === false) {
      setInfoShown(true);
      setButtonText("Hide Info");
    } else {
      setInfoShown(false);
      setButtonText("More Info");
    }
  };

  return (
    <div className="Puppy">
      <h2>{puppy.name}</h2>
      <button onClick={handleClick}>{buttonText}</button>
      <br></br>
      <br></br>
      <div
        className="Info"
        style={!infoShown ? { display: "none" } : { display: "block" }}
      >
        <p>
          Breed: <strong>{puppy.breed}</strong>
        </p>
        <p>
          DOB: <strong>{puppy.birthDate.split("T")[0]}</strong>
        </p>
      </div>
      <form className="update" onSubmit={(e) => handleUpdate(e, puppy.id)}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Breed"
          onChange={(e) => setBreed(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Birth Date (YYYY-MM-DD)"
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
        <button type="submit">Update Puppy!</button>
      </form>
      <br></br>
      <button onClick={(e) => handleDelete(e, puppy.id)}>Delete</button>
    </div>
  );
};

export default Puppy;
