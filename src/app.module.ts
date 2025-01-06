import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5423,
      username: 'postgres',
      password: 'beni@ish',
      database: 'cofarm',
      entities: [],
      synchronize: true
    })
  ],
})
export class AppModule {}
