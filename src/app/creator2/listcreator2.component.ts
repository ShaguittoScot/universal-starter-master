import {Component, OnInit} from '@angular/core';
import { ILista } from '../structures/listas';

@Component({
    selector: 'creator2',
    templateUrl: './listcreator2.component.html',
})

export class ListCreatorComponent2 implements OnInit {

    public list : ILista = {title: ' Demo2 '};


    ngOnInit(): void {}


    save() {
        console.log('Saving list:', this.list);
    }
}