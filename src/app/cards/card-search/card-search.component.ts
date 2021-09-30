import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {

  constructor(
    private cardService:CardService
  ) { }



  search(searchText:string){
    searchText = searchText.toLowerCase();
    this.cardService.filteredCards = this.cardService.cards.filter(_=>{
      return _.title.toLocaleLowerCase().indexOf(searchText)>-1 || (_.name && _.name.toLocaleLowerCase().indexOf(searchText)>-1); 
    })
  }

}
