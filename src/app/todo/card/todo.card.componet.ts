import {Component, Input, OnInit} from "@angular/core";
import { ITodo } from "../../structures/todo";

@Component ({
    selector: 'todo-card',
    templateUrl: 'todo.card.componet.html'
})

export class TodoCardComponent implements OnInit {
    @Input() todo!: ITodo;

    ngOnInit(): void {
        
    }
}