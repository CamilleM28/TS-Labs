import Puppy from "./Puppy";
import IPuppy from "../Types/IPuppy";
import "../styles/PuppyList.css";

interface IAllPuppies {
  puppies: IPuppy[];
  handleUpdate: Function;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setBreed: React.Dispatch<React.SetStateAction<string>>;
  setBirthDate: React.Dispatch<React.SetStateAction<string>>;
  handleDelete: Function;
}
const PuppyList = ({
  puppies,
  handleUpdate,
  setName,
  setBreed,
  setBirthDate,
  handleDelete,
}: IAllPuppies) => {
  return (
    <div className="PuppyList">
      {puppies.reverse().map((puppy: IPuppy) => (
        <Puppy
          key={puppy.id}
          puppy={puppy}
          handleUpdate={handleUpdate}
          setName={setName}
          setBreed={setBreed}
          setBirthDate={setBirthDate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default PuppyList;
