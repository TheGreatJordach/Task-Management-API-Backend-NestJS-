import { Body, Controller, Delete, Param, Patch, } from "@nestjs/common";
import { WriteUserService } from "./write.user.service";
import { IdDto } from "../../common/dto/id-dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('users')
export class UsersWriteController {

  constructor(private readonly userWriteService:WriteUserService) {}


  @Patch("/:id")
  @ApiTags()
  @ApiOperation({})
  @ApiResponse({})
  @ApiBody({})
  updateUser(@Param() { id }: IdDto, @Body() updateUserDto:UpdateUserDto) {
    console.log(typeof id);
    return this.userWriteService.update(id,updateUserDto)
  }


  @Delete(":id")
  @ApiTags()
  @ApiOperation({})
  @ApiResponse({})
  deleteUser(@Param() { id }: IdDto) {
   return this.userWriteService.remove(id)
  }

}
