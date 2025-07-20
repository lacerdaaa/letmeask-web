import { Navigate, useParams } from "react-router-dom"

export function Room() {

    const params = useParams<{ id: string }>();

    if (!params.id) {
        return <Navigate to="/" replace />
    }
    return (
        <div>
            <h1>Room Details</h1>
            <p>Room ID: {params.id}</p>
        </div>
    )
}