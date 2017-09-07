import { Component, OnInit } from '@angular/core';
import { SuggestiesService } from '../suggesties.service';

@Component({
  selector: 'app-suggesties',
  templateUrl: './suggesties.component.html',
  styleUrls: ['./suggesties.component.css']
})
export class SuggestiesComponent implements OnInit {
  suggesties = [];

  constructor(private suggestiesService: SuggestiesService) { }

  ngOnInit() {
      //this.suggestiesService.getSuggesties().then(suggesties => this.suggesties);
      console.log(this.suggestiesService.getSuggesties());
      this.suggesties = this.suggestiesService.getSuggesties();
  }

  addSuggestie(suggestie) {
      this.suggestiesService.addSuggestie(suggestie);
  }

}
