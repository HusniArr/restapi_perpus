import { IsNumber, IsNotEmpty, IsString } from "class-validator";

export class BookDto {
    @IsNumber()
    id:number;
    @IsNumber()
    id_lokasi:number;
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
}