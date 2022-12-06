import axios from 'axios'
import { useEffect, useState} from 'react'



function HomePage(){

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [reload, setReload] = useState(true)

    useEffect(()=>{
        async function fetchUsers(){
            try {
                const response = await axios.get("https://ironrest.cyclic.app/server8")
                setUsers(response.data)
                setIsLoading(false)
                
            } catch (error) {
                console.log(error)
                
            }
        }
        fetchUsers()
    },[])

    async function handleDelete(id){
        try {
            await axios.delete(`https://ironrest.cyclic.app/server8/${id}`)
            setReload(!reload)

        } catch (error) {
            console.log(error)
            
        }
    }
    
console.log(users)
    return(
        <div>
        
            

            {!isLoading && (
                <>
                    {users.map((user) => {
                        return(
                          <div key={user._id} style={{backgroundColor: user.age >= 30 ? "green" : "blueviolet" }} >
                          <p> {user.name}</p>
                            <button onClick={()=> handleDelete(user._id)}> Excluir</button>
                          </div>  
                        )
                    })}
                </>
            )}
        </div>
    )
}

export default HomePage