import { ParkingType } from "./parkingType";
import { IUser } from "./user";

export interface Parking {
    userid:string,
    start: string,
    end?:string,
    ParkingType: ParkingType,
    User: IUser
}