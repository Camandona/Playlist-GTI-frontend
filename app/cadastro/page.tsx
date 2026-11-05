"use client"

import {useState} from "react"
import {musicaService} from "@/services/musicaService"
import {Musica} from "@/domain/musica"

export default function cadastroPage(){
    const [titulo, setTitulo] = useState("")
    const [artista, setArtista] = useState("")
    const [album, setAlbum]= useState("")
    const [ano, setAno] = useState("")
    const [mensagem, setMensagem] = useState("")
    
    async function cadastrar (e: React.FormEvent) {
        e.preventDefault()
        setMensagem("")

        const musica:Musica = {titulo, artista, album, ano:Number(ano)}
        try {
            await musicaService.cadastrar(musica)
            setMensagem("Música cadastrada com sucesso!")
            setTitulo("")
            setArtista("")
            setAlbum('')
            setAno("")
        }catch(err:any){
            console.log(err?.message)
            setMensagem("Erro ao cadastrar!")

        }
        
    }

    return(
        <main className='min-h-screen flex items-center justify-center bg-stone-200 p-4 font-serif'>
            <form onSubmit= {cadastrar} className= 'bg-plate w-full max-w-md p-6 rounded-lg shadow shadow-violet-500/50 space-y-4'>
                <h1>Cadastrar Música</h1>
                <input placeholder="Título" value={titulo} onChange= {(e) =>setTitulo(e.target.value)} className= "border border-mauve-400 p-2 w-full rounded"/>
                <input placeholder="Artista" value={artista} onChange= {(e) =>setArtista(e.target.value)} className= "border border-mauve-400 p-2 w-full rounded"/>
                <input placeholder="Album" value={album} onChange= {(e) =>setAlbum(e.target.value)} className= "border border-mauve-400 p-2 w-full rounded"/>
                <input placeholder="Ano" value={ano} onChange= {(e) =>setAno(e.target.value)} className= "border border-mauve-400 p-2 w-full rounded"/>

                <button type="submit" className= "bg-mist-400 text-olive-800 px-4 rounded w-full hover hover:bg-mist-500 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                    Salvar  
                </button>
                <p className="text-sm text-center text-red-600">{mensagem}</p>
            </form>
        </main>
    )
}