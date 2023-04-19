// useEffect(()=>{
//     fetch(`${import.meta.env.VITE_REACT_API_SCHEDULE}/usergroup/${id}`,{
//         method:"GET",
//         headers:{
//             Authorization: `Baerer ${token}`
//         }
//     }).then(async(res)=>{
//         if(res.status == 200){
//             const routines = await res.json()
//             setRoutines(routines.groups)
//         }else{
//             const failResponse = await res.json()
//             console.log(failResponse.msg)
//         }
//     }).catch((err)=>{
//         console.log(err)
//     })
// },[])
