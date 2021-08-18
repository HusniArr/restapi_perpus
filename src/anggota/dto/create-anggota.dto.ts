import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAnggotaDto {
    @IsNumber()
    id_anggota:number;
    @IsString()
    @IsNotEmpty()
    nama_anggota:string;
    @IsString()
    @IsNotEmpty()
    kelas:string;
    @IsString()
    no_telp:string;
    @IsString()
    alamat:string;
}