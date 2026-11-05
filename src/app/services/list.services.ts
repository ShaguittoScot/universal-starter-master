import {Injectable} from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthServices } from './auth.services';
import { ILista } from '../structures/listas';

import * as firebase from 'firebase/app';



@Injectable() 

export class ListServices {
    public uid!: string;
    public listCollection! : AngularFirestoreCollection<ILista>;
    public lists$!: Observable<ILista[]>;


    constructor(private afs: AngularFirestore, private auth : AuthServices) {
        this.auth.getUser().subscribe(user => {
            this.uid = user.uid;
            
            if(this.uid)this.setCollection();
        })
     }

     setCollection() {
            this.listCollection = this.afs.collection<ILista>(`users`).doc(this.uid).collection<ILista>('lists');

            this.lists$ = this.listCollection.snapshotChanges().pipe( map(actions => actions.map(item => {
                const data = item.payload.doc.data() as ILista;
                    const id = item.payload.doc.id;
                    return { id, ...data };
                }
            )))
        }


        add(list: ILista):Promise<any> { 
        if (!this.listCollection)throw Error('La colección de listas no está inicializada');
        const createdAt = firebase.firestore.FieldValue.serverTimestamp();
        list.createdAt = createdAt;
        return this.listCollection.add(list);
        }
}