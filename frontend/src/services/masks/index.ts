import { EmailModule } from "./modules/email";
import { SMaskModule, SMaskTypes } from "./types";
import { BirthdateModule } from "./modules/birthdate";

export const utilsModule: Record<SMaskTypes, SMaskModule> = {
  email: EmailModule,
  birthdate: BirthdateModule,
};
