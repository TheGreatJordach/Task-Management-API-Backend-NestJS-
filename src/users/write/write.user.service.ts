import { Body, Injectable } from "@nestjs/common";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class WriteUserService {

  createUser(@Body() body:any) {
    return `This service create a new user with body ${body}`
  }

  update(identifier:number,updateUserDto:UpdateUserDto) {
    return `This service updates user with ID ${identifier} and payload ${updateUserDto} `
  }

  remove(identifier:number){
    return `This service removes a user with ID ${identifier}`
  }
}
