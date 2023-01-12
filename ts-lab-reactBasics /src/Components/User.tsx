import IUserInfo from "../Interfaces";
const User =({name, age, address}: IUserInfo) => {
    return <>
     <h1>{name}</h1>
     <h2>{age}</h2>
     <h3>{address}</h3>   
    </>
}

export default User