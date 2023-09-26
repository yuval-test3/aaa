import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ErezModuleBase } from "./base/erez.module.base";
import { ErezService } from "./erez.service";
import { ErezController } from "./erez.controller";
import { ErezResolver } from "./erez.resolver";

@Module({
  imports: [ErezModuleBase, forwardRef(() => AuthModule)],
  controllers: [ErezController],
  providers: [ErezService, ErezResolver],
  exports: [ErezService],
})
export class ErezModule {}
