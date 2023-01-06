export interface Titulo {
    TipoTitulo: BondType
    DataVencimento: Date
    DataBase: Date
    TaxaCompraManha: Number
    TaxaVendaManha: Number
    PUCompraManha: Number
    PUVendaManha: Number
    PUBaseManha: Number
}

export enum BondType {
    IPCA = "Tesouro IPCA+",
    IPCASemestral = "Tesouro IPCA+ com Juros Semestrais",
    Prefixado = "Tesouro Prefixado",
    PrefixadoSemestral = "Tesouro Prefixado com Juros Semestrais",
    Selic = "Tesouro Selic",
    IGPM = "Tesouro IGPM+ com Juros Semestrais",
}

export const BONDS_TABLE = "titulos"