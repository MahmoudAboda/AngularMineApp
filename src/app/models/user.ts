export class User {
    public userId: string;
    public userName: string;
    public password: string;
    public email: string;
    public profileImageUrl: string;
    public active: boolean;
    public notLocked: boolean;
    public role: string;
    public authorities: [];
  
    constructor() {
      this.userId = '';
      this.userName = '';
      this.password = '';
      this.email = '';
      this.profileImageUrl = '';
      this.active = false;
      this.notLocked = false;
      this.role = '';
      this.authorities = [];
    }
  
  }
  