import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>
  ){}

  async executeSeed() {
    // git checkout -- .
    await this.pokemonModel.deleteMany({});

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=650");
    const jsonData: PokeResponse = await response.json();

    const pokemonToInsert: {name: string, no: number }[] = [];

    jsonData.results.forEach( async({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[ segments.length - 2 ];
      pokemonToInsert.push({name, no});
    })

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';
  }

}
