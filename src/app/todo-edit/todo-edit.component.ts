import { Component, OnInit } from "@angular/core";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ITodo } from "../interfaces/itodo";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"],
})
export class TodoEditComponent implements OnInit {
  modalInstance: NgbModalRef;
  todo: ITodo;
  newDescription: string;

  edit(): void {
    this.modalInstance.close(this.newDescription);
  }

  close() {
    this.modalInstance.close();
  }

  constructor() {}

  ngOnInit() {}
}