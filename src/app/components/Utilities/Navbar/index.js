import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-red-500">
            <div className="flex justify-between p-4">
                <Link href="/" className="font-bold text-white text-2xl">CuyAnimeList</Link>
                <input placeholder="cari anime....." className="text-center"/>
            </div>
        </header>
    )
}

export default Navbar