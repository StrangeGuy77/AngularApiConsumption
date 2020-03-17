import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GitapiService } from 'src/app/data/gitapi.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() githubUser = new EventEmitter();
  searchBarInput: string;

  constructor(private git: GitapiService) { }

  getGithubUser () {
    return this.git.getGithubProfile(this.searchBarInput);
  }

  ngOnInit (): void {
  }

}
