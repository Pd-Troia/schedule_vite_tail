import { useEffect, useState } from 'react'
export const useGetRoutinesbyIdUserAsync = (id: string|null, token: string|null) => {
    const [returnRoutine, setReturnRoutine] = useState()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_API_SCHEDULE}/usergroup/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Baerer ${token}`,
            },
        })
            .then(async (res) => {
                if (res.status == 200) {
                    const routines = await res.json()
                    setReturnRoutine(routines)
                } else {
                    throw Error('falha ao buscar as rotinas')
                }
            })
            .catch((err) => {
                console.log(err)
            })
        return returnRoutine
    }, [id, token])
}
