import { headers } from "next/headers"

const Navbar = () => {
    return (
        <header className="bg-red-500">
            <div>
                <Link href="/">CuyAnimeList</Link>
            </div>
        </header>
    )
}

export default Navbar