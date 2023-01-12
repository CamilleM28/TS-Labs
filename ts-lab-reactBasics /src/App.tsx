import React, {useEffect, useState} from 'react';
import './App.css';
import IUserInfo from "./Interfaces";
import User from "./Components/User";
import EditName from "./Components/EditName";


function App() {

    const [user, setUser] = useState<IUserInfo>({name: "", age: 0, address: ""})

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('https://randomuser.me/api/');
            const userData = await response.json();
            const entry = userData.results[0];
           
            setUser({
                name: entry.name.first,
                age:entry.dob.age,
                address: entry.location.city + " -  " +  entry.location.country 
            })
        }
        
        getUsers()
        
    }, [])
    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUser({...user, name:e.target.value} )
    }


    return (
        <div className="info">
            <User name={user.name} age={user.age} address={user.address}/>
            <EditName name={user.name} handleChange={handleChange}/>
        </div>
    );
}

export default App;
