"use client"

import {useState} from "react"
import {musicaService} from "@/services/musicaService"
import {Musica} from "@/domain/musica"

export default function cadastroPage(){
    const [titulo, setTitulo] = useState("")
    const [artista, setArtista] = useState("")
    const [album, setAlbum]= useState("")
    const [ano, setAno] = useState("")
    
    async function cadastrar (e: React.FormEvent) {
        e.preventDefault()
        const musica:Musica = {titulo, artista, album, ano:Number(ano)}
    }

    return(
        <main className='min-h-screen flex items-center justify-center bg-zinc-70 p-4'>
            <form onSubmit= {cadastrar} className= 'bg-plate w-full max-w-md p-6 rounded-lg shadow space-y-4'>
                <h1>Cadastrar Música</h1>
                <input placeholder="titulo" value={titulo} onChange= {(e) =>setTitulo(e.target.value)} className= "border vorder-gray-300 p-2 rounded"/>
                <input placeholder="artista" value={artista} onChange= {(e) =>setArtista(e.target.value)} className= "border vorder-gray-300 p-2 rounded"/>
                <input placeholder="album" value={album} onChange= {(e) =>setAlbum(e.target.value)} className= "border vorder-gray-300 p-2 rounded"/>
                <input placeholder="ano" value={ano} onChange= {(e) =>setAno(e.target.value)} className= "border vorder-gray-300 p-2 rounded"/>

                <button type="submit" className= "bg-blue-500 text-white px-4 rounded w-full hover:bg-black">
                    Salvar  
                </button>
            </form>
        </main>
    )
}