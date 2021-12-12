import {IUser} from "./interfaces/app-interface";

export class UserService {

  public users: IUser[] = [
    { id: 1, name: 'hasan', email: 'hasan@gmail.com' },
    { id: 2, name: 'asiye', email: 'asiye@gmail.com' },
    { id: 3, name: 'mohamad', email: 'mohamad@gmail.com' }
  ];

}
