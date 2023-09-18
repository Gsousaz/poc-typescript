import { Request, Response } from 'express';
import { pokemonService } from '../services/pokemon.service';
import httpStatus, { BAD_REQUEST } from "http-status";
import { Pokemon } from '../../protocols';

async function createPokemon(req: Request, res: Response) {
    const poke: Pokemon = req.body;
    await pokemonService.createPokemon(poke);
    res.sendStatus(httpStatus.CREATED);
}

async function showPokemons(req: Request, res: Response) {
    const pokemons = await pokemonService.showPokemons()
    res.status(httpStatus.OK).send(pokemons)
}

async function updatePokemon(req: Request, res: Response) {
    const poke: Pokemon = req.body;
    if (!poke.id) {
        res.sendStatus(BAD_REQUEST)
    }
    await pokemonService.updatePokemon(poke);
    res.sendStatus(httpStatus.OK);
}

async function deletePokemon(req: Request, res: Response) {
    const { pokemonId } = req.body;
    if (!pokemonId) {
        res.sendStatus(BAD_REQUEST)
    }
    await pokemonService.deletePokemon(pokemonId);
    res.sendStatus(httpStatus.OK);
}


export const pokemonController = { createPokemon, showPokemons, updatePokemon, deletePokemon };