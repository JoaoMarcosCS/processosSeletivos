export interface vaga {
    id:number;
    nome:string;
    link:string;
    status?:string
}

export interface vagas{
    vagas: vaga[]
}