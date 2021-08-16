import { IsNumber, IsNotEmpty, IsString, isNotEmpty } from "class-validator";

export class UpdateRakDto {
    @IsNumber()
    id:number;
    @IsString()
    nama_rak:string;
    @IsNotEmpty()
    @IsString()
    lokasi_rak:string;
    
}