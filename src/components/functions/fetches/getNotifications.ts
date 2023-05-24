
export const getNotifications =async(id: string|null, token: string|null) => {         
    try{
    const res = await fetch(`${import.meta.env.VITE_REACT_API_SCHEDULE}/notification/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Baerer ${token}`,
            "Context-Type": "application/json"
        },
    })
    const data = await res.json()  
    return data.notifications    
    }catch(e){
        console.log(e)
        return null
    }     
}    
