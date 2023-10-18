export class CreateUserDto {
    readonly name: string;
    readonly image: string;
    readonly password: string;
    readonly email: string;
    readonly blocked: false;
  }
  
  export class UpdateUserDto {
    readonly name: string;
    readonly image: string;
    readonly password: string;
    readonly email: string;
    readonly blocked: boolean;
  }
  