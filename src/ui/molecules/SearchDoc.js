import { Search } from "lucide-react";

export default function SearchDoc({ currentSection, searchTerm, setSearchTerm }) {
    return (
        <>
            <div className="flex gap-4 items-center w-[90%]">
                <Search />
                <input
                    type="text"
                    placeholder={`Buscar en ${currentSection?.title || "documentación"}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[80%] bg-transparent outline-none text-sm text-[#e0e0e0] placeholder-[#b3b3b3]"
                />
            </div>

            <div>
                <p className="space-x-2">
                    <span className="bg-[#090909] px-2 py-1 rounded-md">Ctrl</span>
                    <span className="bg-[#090909] px-2 py-1 rounded-md">K</span>
                </p>
            </div>
        </>
    )
}