import { Component, OnInit } from '@angular/core';
import { NotifyService } from './notify.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  title = "Toaster"

  constructor(private notifyService: NotifyService) { }

  ngOnInit(): void {
  }
  showToasterSuccess() {
    this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }

  showToasterError() {
    this.notifyService.showError("Something is wrong", "ItSolutionStuff.com")
  }

  showToasterInfo() {
    this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
  }

  showToasterWarning() {
    this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
  }
}
