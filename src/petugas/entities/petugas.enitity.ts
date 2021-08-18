import { Entity, Column, JoinTable, JoinColumn, OneToOne , PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Petugas {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nama_petugas:string;
    @Column()
    pass:string;
    @Column({default:true})
    isAdmin:boolean;
}