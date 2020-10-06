import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

}
