import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class UpdateBookDto {
    @IsNumber()
    id:number;
    @IsNotEmpty()
    @IsString()
    kd_buku : string;
    @IsNotEmpty()
    @IsString()
    judul_buku:string;
    @IsNotEmpty()
    @IsString()
    pengarang:string;
    @IsNotEmpty()
    @IsString()
    penerbit:string;
    @IsNotEmpty()
    tahun_terbit:string;
    @IsNumber()
    stok:number;
    @IsNumber()
    id_rak:number;   
}