import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class BookDto {

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
    @IsString()
    tahun_terbit:string; 
    @IsNumber()
    stok:number;  
}