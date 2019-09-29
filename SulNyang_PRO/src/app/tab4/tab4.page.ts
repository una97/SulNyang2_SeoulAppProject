import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea, IdeaService } from 'src/app/services/idea.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public ideas:Observable<Idea[]>;

  constructor(private ideaService: IdeaService, private iab: InAppBrowser) { }

  ngOnInit() {
      this.ideas = this.ideaService.getIdeas();
  }
  openBlank(note) {
    console.log(note);
    this.iab.create(note, `_blank`);
  }

}
