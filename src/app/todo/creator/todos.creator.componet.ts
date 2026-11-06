import { Component, Input, OnInit } from "@angular/core";
import { TStatus, ITodo } from "../../structures/todo";
import { TodoService } from "../../services/todos.services";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
    selector: 'todo-creator',
    templateUrl: 'todos.creator.component.html',

    animations: [
         // Animación del formulario de creación: colapsa/expande el panel
         // con una transición suave al alternar entre estados.
         trigger('openClose', [
             state('collapsed, void', style({ height: '0px' })),
             state('expanded', style({ height: '*' })),
             transition('collapsed <=> expanded', animate('200ms ease-in-out'))
         ])
    ]
})

export class TodoCreatorComponent implements OnInit {
    @Input() id!: string;
    public formState: string = 'collapsed';


    public todo: ITodo = { content: '', status: TStatus.Created }
    constructor(private todoS: TodoService) { }


    ngOnInit(): void {

    }

    save() {
        this.todoS.add(this.id, this.todo)
    }

    toggleForm() {
        this.formState = (this.formState === 'collapsed') ? 'expanded' : 'collapsed';
    }

    label(): string {
        return (this.formState === 'collapsed') ? 'Agregar nuevo pendiente' : 'ocultar';
    }

    icon() {
        return (this.formState === 'collapsed') ? 'fa fa-plus' : 'fa fa-minus';
    }
}