import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // email = new FormControl('');

  emailForm!: FormGroup;

  constructor(private service: DataService, private fb: FormBuilder){
    
  }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  title = 'household-webapp';

  // public getCode(){

  //   if (this.email.valid) {
  //     console.log('Email submitted:', this.email.value);

      
  //   }   
  // }
  code: string = "Your code !!"
  getCode(): void {
    this.code="Your code !!"
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')?.value;
      console.log('Submitted email:', email);
      // this.yourMethod(email);
      this.service.getData(email).subscribe(res=>{
       
        this.code = res.code
        console.log(this.code)
      
          
      })
    }
  }
}