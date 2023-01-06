import React, { useEffect, useMemo } from 'react'
import { db } from './db'
import { downloadCSVAndSave } from './manipulations'

export default function Home() {

    useEffect(() => {
        debugger
        downloadCSVAndSave()
    })

    useMemo(()=>{
        db.exports.toArray().then((all) => {
            console.log(all)
        })
    }, [])

    return (
        <React.Fragment>

        </React.Fragment>
    )
}
