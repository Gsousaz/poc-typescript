import { pokemonController } from "../controllers/pokemon.controller";
import { Router } from "express";

const pokemonRouter = Router();
pokemonRouter.post("/postpokemon", pokemonController.createPokemon);
pokemonRouter.get("/getpokemons", pokemonController.showPokemons);
pokemonRouter.put("/updatepokemon", pokemonController.updatePokemon);
pokemonRouter.delete("/deletepokemon", pokemonController.deletePokemon);


export default pokemonRouter;