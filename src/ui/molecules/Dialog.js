"use client"

import { useEffect, useRef } from "react"
import TitleSection from "../atoms/TitleSection"
import Text from "../atoms/Text"
import Icon from "../atoms/Icon"

export default function Dialog({ dialog, open, setOpen }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            const dialogEl = dialogRef.current;
            if (dialogEl && !dialogEl.contains(e.target)) {
                dialogEl.close();
                setOpen(!open)
            }
        };

        if (open) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [open]);

    const extra = dialog.extra.map((extra, i) => (
        <li key={i} className="flex items-center text-gray-600 text-sm">
            <div
                style={{ backgroundColor: dialog.label.color }}
                className="h-2 w-2 mr-2 rounded-full"
            ></div>
            <Text
                text={extra}
                color="#999"
                fontSize=".9rem"
            />
        </li>
    ))

    return (
        <dialog
            ref={dialogRef}
            open={open}
            className="absolute inset-[40%] z-10000 rounded-2xl p-6 max-w-md w-[90%] bg-[#181818] border border-zinc-700 animate-fadeIn"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full text-slate-500 bg-zinc-800 border border-slate-500">
                    <Icon name={dialog.icon} />
                </div>
                <TitleSection
                    title={dialog.value}
                    color="#e0e0e0"
                    fontSize="1.2rem"
                />
            </div>

            <Text
                text={dialog.detail}
                fontSize=".9rem"
            />

            <ul className="space-y-2 m-6">
                {extra}
            </ul>

            <form method="dialog" className="mt-6 flex justify-end">
                <button
                    className="px-4 py-2 cursor-pointer rounded-lg text-[#e0e0e0] text-sm font-medium transition-colors"
                    style={{ backgroundColor: dialog.label.color }}
                >
                    OK
                </button>
            </form>
        </dialog>
    )
}