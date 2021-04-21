import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <p>Home</p>
            <Link to="/details">details</Link>
        </>
    );
}
