"use client"

import {http} from "@/lib/http"

export default function MusicaLista() {

    return (
        <div className = "overflow-x-auto bg-sky-300 rounded-2xl shadow-md">
            <table className = "min-w-full divide-y divide-gray-200">
                <thead className= "bg-gray-200">
                    <tr>
                        <th className = "px-4 py-3 text-left text-sm text semibold text-gray-700">Título</th>
                        <th className = "px-4 py-3 text-left text-sm text semibold text-gray-700">Artista</th>
                        <th className = "px-4 py-3 text-left text-sm text semibold text-gray-700">Album</th>
                        <th className = "px-4 py-3 text-left text-sm text semibold text-gray-700">Ano</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}