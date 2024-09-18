import { Module } from '@nestjs/common';
import { ConfigModule,  } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env.dev'
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],

      useFactory: async () => {
        const ttl:number = parseInt(process.env.CACHE_TTL)|| 60 * 5
        const max:number = parseInt(process.env.CACHE_MAX_TTL) || 100;


        //DEBUG
        console.log({ttl,max})

        if (isNaN(ttl) || ttl < 0) {
          throw new Error("CACHE_TTL must be a non-negative integer");
        }

        if (isNaN(max) || max < 0) {
          throw new Error("CACHE_MAX must be a non-negative integer");
        }

        return {
          isGlobal: true,
          ttl,
          max,
        }
      }
    })
  ]

})
export class ConfigurationModule {}
