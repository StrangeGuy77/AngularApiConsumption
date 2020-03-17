import { Component, OnInit, Input } from '@angular/core';
import { GitapiService } from '../data/gitapi.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

  constructor(private git: GitapiService) { }

  GitUser: any;

  ngOnInit () {
    this.git.getGithubProfile("StrangeGuy77").subscribe((res) => this.GitUser = res);
  }

}
