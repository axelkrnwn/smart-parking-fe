export interface RegisterFormValues {
  id: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export interface LoginFormValues {
  email: string;
  password: string;
};

export interface IUser {
  id:string;
  username: string;
  email: string;
  address: string;
}

