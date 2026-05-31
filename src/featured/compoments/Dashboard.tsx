import { useSupabase } from "#hooks/useSupabase"
import { useEffect } from "react";

export default function Dashboard() {

    const {pendant, getPendant} = useSupabase();

    useEffect(() => {
        getPendant()
    }, [getPendant])
    return(
        <>
        Dashboard

        </>
    )
}