import { Button } from "@/components/ui/button";

export function Room() {
    return (
        <div>
            <h1>Room Page</h1>
            <p>This is the room page where you can join or create a room.</p>
            <form>
                <input type="text" placeholder="Enter room code" />
                <Button type="submit">Join Room</Button>
            </form>
        </div>
    )
}