import Image from "next/image"
const AnimeList = () => {
    return (
        <div className="grid grid-cols-3 gap-4 h-32">
            <div className="bg-indigo-300">
                <Image src="https://placehold.co/600x400/png" alt="..." width={600} height={600} />
                <h3>Judul anime disini</h3>
            </div>
            <div className="bg-indigo-300">Kotak 2</div>
            <div className="bg-indigo-300">Kotak 3</div>
            <div className="bg-indigo-300">Kotak 4</div>
            <div className="bg-indigo-300">Kotak 5</div>
            <div className="bg-indigo-300">Kotak 6</div>
        </div>
    )
}


export default AnimeList