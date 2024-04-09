import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (): MongooseModuleFactoryOptions => ({
        uri: process.env.DATABASE_CONNECTION,
      }),
    }),
  ],
})
export class DatabaseModule {}
