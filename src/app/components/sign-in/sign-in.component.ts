import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //form!: FormGroup;
  doctor!:User;
  credential=new Credentials();
  errorMessage!:string;
  

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
     
  }
  onSubmit(){

    this.http.post<User>('https://mybright-api.herokuapp.com/login',this.credential).subscribe(user =>{
        if(user){
          this.router.navigate(['/home/'+user.idU])
        }
         
      },(error:HttpErrorResponse)=>{
        this.errorMessage="login or password incorrect"
      } )

    

  }

}
export class Credentials{
  login!: string;
  password!: string;
}
