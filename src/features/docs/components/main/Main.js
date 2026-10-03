"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import Menu from "./ui/Menu";
import Search from "./ui/Search";
import CardDoc from "./ui/CardDoc";

export default function Main({ data }) {
    const [activeSection, setActiveSection] = useState(data[0]?.id || null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentSection = data.find((sec) => sec.id === activeSection);

    const filteredItems = currentSection?.items?.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    ) || [];

    return (
        <main className="w-full min-h-[calc(100vh-100px)]">
            <button
                className="fixed bottom-10 right-10 z-50 h-14 w-14 flex items-center justify-center bg-accent text-primary lg:hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            >
                <Icons.PanelRightOpen size={24} />
            </button>

            {isMenuOpen && <div className="fixed inset-0 z-40 bg-background p-10 lg:hidden overflow-y-auto">
                <div className="flex justify-end mb-12">
                    <button onClick={() => setIsMenuOpen(false)} className="text-text-main opacity-60 hover:opacity-100">
                        <Icons.X size={24} />
                    </button>
                </div>
                <Menu
                    data={data}
                    setActiveSection={(id) => {
                        setActiveSection(id);
                        setIsMenuOpen(false);
                    }}
                    activeSection={activeSection}
                />
            </div>}
            <div className="w-full h-full flex">
                <aside className="sticky top-0 h-full min-h-[calc(100vh-100px)] w-100 flex-none overflow-y-auto border-r border-primary/5 hidden lg:block py-12 px-6">
                    <Menu
                        data={data}
                        setActiveSection={setActiveSection}
                        activeSection={activeSection}
                    />
                </aside>

                <section className="w-full overflow-x-hidden">
                    <div className="container mx-auto py-10 px-4">
                        <header className="flex w-full items-center gap-4 bg-primary/5 px-5 py-3 border border-white/5 text-secondary/80 focus-within:border-accent transition-all">
                            <Search
                                currentSection={currentSection}
                                searchTerm={searchTerm}
                                setSearchTerm={setSearchTerm}
                            />
                        </header>

                        <div className="flex flex-col gap-12 py-10">
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <CardDoc
                                        key={item.id}
                                        data={item} />
                                ))
                            ) : (
                                <div className="text-center py-32 border border-dashed border-white/5">
                                    <p className="font-sans text-md font-light tracking-wider text-secondary/80">
                                        No se encontraron resultados para tu búsqueda.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}