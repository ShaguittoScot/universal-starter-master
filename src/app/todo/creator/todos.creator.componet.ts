import { Component, Input, OnInit } from "@angular/core";
import {TStatus, ITodo} from "../../structures/todo";
import { TodoService } from "../../services/todos.services";

@Component({
    selector: 'todo-creator',
    templateUrl: 'todos.creator.component.html'
})

export class TodoCreatorComponent implements OnInit {
    @Input() id!: string;
    public todo : ITodo = {content:'',status: TStatus.Created}
    constructor(private todoS : TodoService){}


    ngOnInit(): void {
        
    }

    save(){
        this.todoS.add(this.id, this.todo)
    }
}