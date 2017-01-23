import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './signin.html',
  styleUrls: ['./main.css','./ui.css']
})
export class UserComponent {

  uname:string;
  pwd:string;
  Incorrect:Boolean;

  constructor(private router: Router, private route: ActivatedRoute){
   this.uname = "admin";
   this.pwd="admin";
   this.Incorrect = false;

  }

  haha = function(uname, pwd){
    if(!(uname==this.uname && pwd==this.pwd)) this.Incorrect = true;
    else {
      this.Incorrect = false;
      console.log(this)
      this.router.navigate(['success']);
    }
  }
}
