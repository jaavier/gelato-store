type Role = "visitor" | "user" | "admin" | "banned";

declare interface User {
  name: string;
  username: string;
  password: string;
  lastOrder?: any;
  role: Role;
}
