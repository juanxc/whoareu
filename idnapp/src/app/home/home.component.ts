import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from './../interfaces/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  objPersona: Persona;
  existePersona = false;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  buscarPersona(vdni: string) {
    this.apiService.get(vdni).subscribe((response: any) => {
      console.log('response', response);
      if (response.success) {
        this.existePersona = true;
        this.objPersona = response.data;
        this.objPersona.strImagen = 'data:image/jpeg;base64,' + this.objPersona.strImagen;
      }
    });
  }
}
