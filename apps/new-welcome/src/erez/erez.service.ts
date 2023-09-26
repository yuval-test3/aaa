import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErezServiceBase } from "./base/erez.service.base";

@Injectable()
export class ErezService extends ErezServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
