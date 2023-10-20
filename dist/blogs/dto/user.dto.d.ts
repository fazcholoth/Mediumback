export declare class CreateUserDto {
    readonly name: string;
    readonly image: string;
    readonly password: string;
    readonly email: string;
    readonly blocked: false;
}
export declare class UpdateUserDto {
    readonly name: string;
    readonly image: string;
    readonly password: string;
    readonly email: string;
    readonly blocked: boolean;
}
