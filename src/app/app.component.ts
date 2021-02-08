import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-info';

  emptyEmployee = {
    "empNumber": "",
    "employeeId": "",
    "firstName": "",
    "lastName": "",
    "middleName": "",
    "dateOfBirth": "",
    "maritalStatus": false,
    "gender": 'male'
  };

  currentEmployee = null;

  employees = [
    {
      "empNumber": "54",
      "employeeId": "EMP-54",
      "firstName": "Rachel",
      "lastName": "Alexander",
      "middleName": "",
      "dateOfBirth": "2012-04-19",
      "maritalStatus": true,
      "gender": 'male'
    },
    {
      "empNumber": "66",
      "employeeId": "EMP-66",
      "firstName": "Abbie",
      "lastName": "Campbell",
      "middleName": "Snider",
      "dateOfBirth": "1991-04-19",
      "maritalStatus": true,
      "gender": 'female'
    },
    {
      "empNumber": "77",
      "employeeId": "EMP-77",
      "firstName": "Ricardo",
      "lastName": "Bowman",
      "middleName": "",
      "dateOfBirth": "2001-04-19",
      "maritalStatus": false,
      "gender": 'male'
    }
  ];

  selectEmployee(employee) {
    this.currentEmployee = employee;
  }

  cancelEmployeeDetails() {
    this.currentEmployee = null;
  }

  saveEmployeeDetails() {

  }

  resetEmployeeDetails() {
    this.currentEmployee = this.emptyEmployee;
  }
}
