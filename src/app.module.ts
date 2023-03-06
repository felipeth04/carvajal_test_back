import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ContactModule } from './contact/contact.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  HOST_DB,
  PORT_DB,
  USER_DB,
  PASS_DB,
  NAME_DB,
} from './config/constants';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>(HOST_DB),
        port: parseInt(config.get<string>(PORT_DB), 10),
        username: config.get<string>(USER_DB),
        password: config.get<string>(PASS_DB),
        database: config.get<string>(NAME_DB),
        synchronize: true,
        autoLoadEntities: true,
        entities: [__dirname + './**/**/*entity{.ts,.js}'],
      }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    ContactModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
