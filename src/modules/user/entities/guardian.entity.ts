import { User } from './user.entity';

export class Guardian extends User {
  public guardianId: string;
  public isActive: boolean;
}
