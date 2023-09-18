import { pokemonRepository } from '../repositories/pokemon.repository';
import { Pokemon } from '../../protocols';

async function createPokemon(pokemon: Pokemon) {
    await pokemonRepository.createPokemon(pokemon);
}

async function showPokemons(): Promise<Pokemon[]> {
    const pokemons: Pokemon[] = await pokemonRepository.showPokemons();
    return pokemons;
}

async function updatePokemon(pokemon: Pokemon) {
    await pokemonRepository.updatePokemon(pokemon);
}

async function deletePokemon(pokemonId: number) {
    await pokemonRepository.deletePokemon(pokemonId);
}

export const pokemonService = { createPokemon, showPokemons, updatePokemon, deletePokemon };
