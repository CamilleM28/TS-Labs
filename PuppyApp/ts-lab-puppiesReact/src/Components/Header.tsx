import "../styles/Header.css";
import { FormEventHandler } from "react";

interface IHeaderProps {
  handleSubmit: FormEventHandler;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setBreed: React.Dispatch<React.SetStateAction<string>>;
  setBirthDate: React.Dispatch<React.SetStateAction<string>>;
  message: string;
}

const Header = ({
  handleSubmit,
  setName,
  setBreed,
  setBirthDate,
  message,
}: IHeaderProps) => {
  return (
    <div className="Header">
      <h1>Puppy Place</h1>
      <form className="form" onSubmit={handleSubmit}>
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
        <button type="submit">Add Puppy!</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Header;
