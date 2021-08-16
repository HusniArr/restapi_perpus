import { IsNumber,  IsString, isNotEmpty, IsNotEmpty } from "class-validator";

export class UpdateRakDto {
    @IsNumber()
    id:number;
    @IsString()
    @IsNotEmpty()
    nama_rak:string;
    @IsString()
    @IsNotEmpty()
    lokasi_rak:string;
    
}