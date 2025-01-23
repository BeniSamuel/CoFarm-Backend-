import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Farm } from './entities/farm.entity';
import { Message } from './entities/message.entity';
import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';
import { FarmModule } from './farm/farm.module';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'beni@ish',
      database: 'cofarm',
      entities: [ User, Farm, Message ],
      synchronize: true
    }),
    AuthModule,
    NotificationModule,
    FarmModule,
    ChatModule
  ],
})
export class AppModule {}
