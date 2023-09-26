import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ErezService } from "./erez.service";
import { ErezControllerBase } from "./base/erez.controller.base";

@swagger.ApiTags("erezs")
@common.Controller("erezs")
export class ErezController extends ErezControllerBase {
  constructor(
    protected readonly service: ErezService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
