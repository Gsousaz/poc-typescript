import { Router } from "express";
import pokemonRouter from "./pokemons.router";

const router = Router();
router.use(pokemonRouter);

export default router;