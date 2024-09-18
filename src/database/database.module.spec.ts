import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestDbConfig } from "../configuration/test-db.config";
import { DatabaseModule } from "./database.module";


describe("DatabaseModule", () => {
  let module: TestingModule

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(TestDbConfig),
        DatabaseModule,
      ],
    }).compile()
  })
  it("should be defined", () => {
    expect(module).toBeDefined()
  })
})
