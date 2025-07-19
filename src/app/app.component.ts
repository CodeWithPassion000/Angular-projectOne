import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS
  userName: string = 'No user Selected';

  onSelectUser(id: string) {
    console.log('Selected user with id' + id)
    let selectedUser = DUMMY_USERS.find((data) => data.id === id)
    this.userName = selectedUser?.name || 'No user Selected'
  }
}
