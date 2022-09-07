import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorialModel/tutorial';
import { TutorialService } from 'src/app/services/tutorialService/tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(private androidService: TutorialService) { }
  listOfTutorials: Tutorial[] = [];

  ngOnInit(): void {
    this.androidService.fetchAll().subscribe(Tutorials => this.listOfTutorials = Tutorials);
  }

}
