export enum TStatus {
    Created,
    Completed,
    Fallided,
    Expired
}
 


export interface ITodo {
    id ?:string;
    content: string;
    status: TStatus;
    descripcion ? : string;
    createdAt ? : any;
}