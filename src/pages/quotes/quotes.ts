import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import {QuotesService} from "../../services/quotes.service";
import {Quote} from "../../data/quote.interface";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

  quoteGroup:{category: string, quotes: Quote[], icon:string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService:QuotesService
  ) {}

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  isFavorite(quote:Quote){
    return this.quotesService.isQuoteFavorite(quote);
  }

  onAddToFavorite(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title: 'Add to Favorites',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: ()=>{}
        },
        {
          text: 'Yes',
          handler: ()=>{
            this.quotesService.addQuoteToFavorites(selectedQuote);
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorite(selectedQuote:Quote){
    const alert = this.alertCtrl.create({
      title: 'Remove from Favorites',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to remove the quote?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: ()=>{}
        },
        {
          text: 'Yes',
          handler: ()=>{
            this.quotesService.removeQuoteFromFavorites(selectedQuote);
          }
        }
      ]
    });
    alert.present();
  }


}
