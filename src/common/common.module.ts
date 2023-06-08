import { Module } from '@nestjs/common';
import { AxiosAdapter } from './httpAdapters/axios.adepater';


@Module({
    providers: [ AxiosAdapter ],
    exports: [ AxiosAdapter ],
})
export class CommonModule {}
