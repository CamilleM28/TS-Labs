import {ChangeEventHandler} from "react";

const EditName = ({name, handleChange} : {name:string, handleChange: ChangeEventHandler<HTMLInputElement>}) => {
    return <>
    <input type="text" value={name} onChange={handleChange}  />
    </>
}

export default EditName;