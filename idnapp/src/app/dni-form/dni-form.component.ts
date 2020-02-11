import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dni-form',
  templateUrl: './dni-form.component.html',
  styleUrls: ['./dni-form.component.css']
})
export class DniFormComponent implements OnInit {
  dni = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
