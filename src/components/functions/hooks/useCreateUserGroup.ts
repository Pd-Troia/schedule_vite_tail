import * as React from 'react'

export function useCrateNotificationAsync(
    idUser: string,
    token: string,    
    idRoutine: string
) {
    const [response, setResponse] = React.useState()
    React.useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_API_SCHEDULE}/usergroup/creategroup`, {
            method: 'POST',
            headers: {
                Authorization: `Baerer ${token}`,
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({idUser,idRoutine}),
        }).then((res) => {            
            console.log(res)
        })
    }, [])
    return response
}
