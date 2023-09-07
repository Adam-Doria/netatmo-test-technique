import { useEffect, useState } from "react"

const useFetchAPI = (numberOfDisplay) => {
const [userData,setUserData] = useState()
const [error,setError] = useState(false)
const [loading,setLoading] = useState(true)

useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${numberOfDisplay}`)
    .then(res=>{
        if(!res.ok) throw new Error()
        return res.json()
    })
    .then(data =>{
        setUserData(data.results)
        setLoading(false)
    })
    .catch (()=> setError(true))

},[numberOfDisplay])


return  {userData, error, loading,setUserData}
}

export default useFetchAPI