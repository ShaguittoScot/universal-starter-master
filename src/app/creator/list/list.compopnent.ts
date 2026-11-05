import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ITodo } from "../../structures/todo";
import { TodoService } from "../../services/todos.services";
@Component({
    selector: 'list',
    templateUrl: './list.component.html',
})

export class ListComponent implements OnInit {
    public listId! :string;
    public todos!: Observable<ITodo[]>;
    constructor(private route: ActivatedRoute,private todoS:TodoService) {

    }


    ngOnInit(): void { 

        this.listId = this.route.snapshot.params.id;
        this.todos = this.todoS.getFromList(this.listId)
        console.log(this.route.snapshot.params.id)
    }

}