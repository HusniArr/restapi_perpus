import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class CreateRakDto {
    @IsNumber()
    id:number;
    @IsString()
    nama_rak:string;
    @IsString()
    lokasi_rak:string;
}