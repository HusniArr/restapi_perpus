import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatePinjamDto {
    @IsString()
    @IsNotEmpty()
    id_pinjam:string;
    @IsNumber()
    id_anggota:number;
    @IsDateString()
    tgl_pinjam:string;
    @IsNumber()
    jml_pinjam:number;
    @IsString()
    status:string;
    
}