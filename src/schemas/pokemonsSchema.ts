import Joi from 'joi';

const createPokemonSchema = Joi.object({
  pokemon: Joi.object({
    dex: Joi.number().required(),
    pokemon: Joi.string().required(),
    type: Joi.string().required(),
    height: Joi.number().required(),
  }).required(),
});

export { createPokemonSchema };


const updatePokemonSchema = Joi.object({
    pokemon: Joi.object({
      id: Joi.number().required(),
      dex: Joi.number().required(),
      pokemon: Joi.string().required(),
      type: Joi.string().required(),
      height: Joi.number().required(),
    }).required(),
  });
  
  export { updatePokemonSchema };

  

  const deletePokemonSchema = Joi.object({
    pokemonId: Joi.number().required(),
  });
  
  export { deletePokemonSchema };