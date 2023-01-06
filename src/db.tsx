import Dexie, { Table } from 'dexie';
import { Titulo, BONDS_TABLE } from './models';

export interface Exports {
    id?: string;
    value: string;
}

const DB_NAME = "brazilian_bonds"

export class Database extends Dexie {
    exports!: Table<Exports>;

    constructor() {
        super(DB_NAME);
        this.version(1).stores({
            exports: '++id'
        });
    }

    async asyncDeleteIfPresent(key: string) {
        try {
            if (await db.exports.get(key)) {
                await db.exports.delete(key)
            }
        } catch (error) {
            console.error(`Failed to retrieve ${key} data: ${error}`);
        }
    }

    async cacheBonds(series: Titulo[]) {
        await this.asyncDeleteIfPresent(BONDS_TABLE)

        try {
            await db.exports.add({
                id: BONDS_TABLE,
                value: JSON.stringify(series),
            })
        } catch (error) {
            console.error(`Failed to add bonds data: ${error}`);
        }
    }
}

export const db = new Database();