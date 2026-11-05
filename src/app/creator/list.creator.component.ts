import {Component, OnInit} from '@angular/core';
import { ILista } from '../structures/listas';
import { ListServices } from '../services/list.services';

@Component({
    selector: 'creator',
    templateUrl: './list.creator.component.html',
})

export class ListCreatorComponent implements OnInit {

    public list : ILista = {title: ' '};

    constructor(private listService : ListServices) {}


    ngOnInit(): void {}


    save() {
        this.listService.add(this.list).then(console.log)
    }
}