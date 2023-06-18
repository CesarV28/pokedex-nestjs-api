import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CommonModule } from './common/common.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';



@Module({
  imports: [

    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),

    MongooseModule.forRoot( process.env.MONGO_CONNECTION ),

    PokemonModule,

    CommonModule,

    SeedModule
  ],
})


export class AppModule {}
