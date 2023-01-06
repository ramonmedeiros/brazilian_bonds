import { Titulo } from './models'
import * as Papa from 'papaparse';

import { db } from './db'
import { debug } from 'console';

const BondsTitle = "https://www.tesourotransparente.gov.br/ckan/dataset/df56aa42-484a-4a59-8184-7676580c81e3/resource/796d2059-14e9-44e3-80c9-2d9e30b405c1/download/PrecoTaxaTesouroDireto.csv"

export function downloadCSVAndSave() {
    debugger
    fetch(BondsTitle)
        .then((data) => data.text())
        .then((response) => {
            debugger
            db.cacheBonds(csvToBond(response))
        }).
        catch(err => {
            console.error(err)
        })
}

function csvToBond(content: string): Titulo[] {
    const records = []

    // Parse CSV string
    debugger
    var data = Papa.parse(content);
    console.log(data)
    return new Array()
}


