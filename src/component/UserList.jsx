import axios from 'axios'
import React, { useEffect, useState } from 'react'


const UserList = () => {

const [userList, setUserList]=useState([])
const getData = ()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
 .then(res=>{setUserList(res.data)})
.catch(err=>console.log(err))

}
useEffect(()=>{
    getData()
},[])
  return (
    <div>
        <h1>List Names</h1>
{
userList.map(user=>(
    <div key={user.id}>
<h1>{user.name}</h1>
<h2>{user.email}</h2>
<h3>{user.company.catchPhrase}</h3>

    </div>
))
}

    </div>
  )
}

export default UserList