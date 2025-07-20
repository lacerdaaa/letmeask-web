import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsResponse = Array<{
    id: string,
    name: string,
}>

export function CreateRoom() {

    const { data, isLoading } = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms');
            const result: GetRoomsResponse = await response.json();

            return result;
        }
    })

    return (
        <div>
            <h1>Create a new room</h1>
            <form>
                <input type="text" placeholder="Room name" />
                <Button variant={"link"}>
                    <Link to="/room">Create Room</Link>
                </Button>
            </form>

            {isLoading && <p>Loading rooms...</p>}

            {!isLoading && <div>
                <h2>Available Rooms</h2>
                <ul>
                    {data?.map(room => (
                        <li key={room.id}>
                            <Link to={`/room/${room.id}`}>{room.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>}

        </div>
    )
}