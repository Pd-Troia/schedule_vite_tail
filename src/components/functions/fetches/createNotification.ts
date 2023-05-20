

export function createNotification(idSender:string,token:string,email:string,idUserGroup:string) {   
    console.log(idSender,token,email,idUserGroup )
    fetch(`${import.meta.env.VITE_REACT_API_SCHEDULE}/notification`, {
        method:"POST",
        headers:{
            Authorization: `Baerer ${token}`, 
            "Content-type": "Application/json"                
        },
        body:JSON.stringify({
            idSender: idSender,
            email: email,
            idUserGroup: idUserGroup
        })
    }).then(async(res)=>{
        console.log(await res.json())
    })   
}
