import { IAddress, IChild, ICompanyDetails } from "../../domain/entity/user";

export interface RegisterDTO {
    email: string,
    name?: string;
    password: string,
    role: 'customer' | 'admin' | 'superAdmin',
    age?: number;
    gender?: 'male' | 'female' | 'other';
    children?: IChild[];
    companyDetails?: ICompanyDetails;
    address?: IAddress;
    fcmToken?: string;
}

export interface LoginDTO {
    email: string,
    password: string,
}

export interface ChangePasswordDTO {
    email: string,
    newPassword: string,
}

export interface ForgotPasswordDTO {
    email: string
}
export interface VerifyEmailDTO {
    code: string
}

export interface UserInfoDTO {
    email: string,
    name?: string;
    role: 'customer' | 'admin' | 'superAdmin',
    age?: number;
    gender?: 'male' | 'female' | 'other';
    children?: IChild[];
    companyDetails?: ICompanyDetails;
    address?: IAddress;
    fcmToken?: string;
}

export interface SecretTokenDTO {
    token: string,
    age: string,
}
