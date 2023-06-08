import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/httpAdapters/axios.adepater';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ){}

  async executeSeed() {
    // git checkout -- .
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650');
    // const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=650");
    // const jsonData: PokeResponse = await response.json();

    const pokemonToInsert: {name: string, no: number }[] = [];

    data.results.forEach( async({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[ segments.length - 2 ];
      pokemonToInsert.push({name, no});
    })

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executed';
  }

}
