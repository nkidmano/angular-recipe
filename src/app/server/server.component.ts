import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  username: string = "";
  users = [];

  constructor() {}

  isEmpty(input: string): boolean {
    if (input) {
      return false;
    } else {
      return true;
    }
  }

  clearInput(): void {
    this.username = "";
  }

  addUser(username: string): void {
    this.users.push(username);
    this.clearInput();
  }

  ngOnInit() {}
}
