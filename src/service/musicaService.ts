import {http} from "@/src/lib/http"
import type {Musica} from "@/src/domain/musicas"
import { promises } from "dns"

export const musicaService = {

    cadastrar: async (musica:Musica):Promise<Musica> =>{
        const (data) = await http.post<Musica>("/musicas",musica)
        return DataTransfer;
    }
}
