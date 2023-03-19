import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user!:User;
  id!:number;

  constructor(private service:UserService,private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getUser(this.id).subscribe(data=>{
      this.user=data;
    })
    
  }
  stopVM(){
    const requestOptions = {
      headers: { 'accept': 'application/json' },
      body: ''
    };
    
    this.http.post('https://mybright-api.herokuapp.com/stop?vm_name=bright-inference&resource_group_name=bright-inference_group', requestOptions).subscribe(response => {
      console.log(response);
    });
  }

}
