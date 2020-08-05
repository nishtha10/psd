import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-angular-toaster',
  templateUrl: './angular-toaster.component.html',
  styleUrls: ['./angular-toaster.component.scss']
})
export class AngularToasterComponent implements OnInit {

  constructor(private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnackBar(message:string,action:string):void{
    this.snackbar.open(message,action,{
      duration:2000,
    });
  }
}
