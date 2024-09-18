import { neon } from "@neondatabase/serverless";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class NeonDatabaseService {
  private readonly sql;

  constructor(private configService: ConfigService) {
    const databaseUrl = this.configService.get<string>('DATABASE_URL');
    this.sql = neon(databaseUrl);
  }
  async getData() {
    return await this.sql`...`;
  }
}
