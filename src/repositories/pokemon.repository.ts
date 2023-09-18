import { db } from '../database/database.connection';
import { Pokemon } from '../../protocols';

async function createPokemon(pokemon: Pokemon) {
    await db.query(
        `INSERT INTO pokemons (dex_number, pokemon, type, height) 
         VALUES ($1, $2, $3, $4)`,
        [pokemon.dex, pokemon.pokemon, pokemon.type, pokemon.height]
    );
}

async function showPokemons(): Promise<Pokemon[]> {
    const pokemons = await db.query(
        `SELECT dex_number, pokemon, type, height 
         FROM pokemons`
    );
    return pokemons.rows;
}

async function updatePokemon(pokemon: Pokemon) {
    await db.query(
        `UPDATE pokemons 
         SET dex_number = $1, 
             pokemon = $2, 
             type = $3, 
             height = $4 
         WHERE id = $5`,
        [pokemon.dex, pokemon.pokemon, pokemon.type, pokemon.height, pokemon.id]
    );
}

async function deletePokemon(pokemonId: number) {
    await db.query(
        `DELETE FROM pokemons 
         WHERE id = $1`,
        [pokemonId]
    );
}

export const pokemonRepository = { createPokemon, showPokemons, updatePokemon, deletePokemon };
