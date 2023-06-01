import { Component } from '@angular/core';
import {Character} from './character.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ow';
  framework='Angular';
  img='https://placekitten.com/200/300'
  btnDisabled=false;
  achievements=25;
  player={
    nickname:"Valkyrya",
    hoursPlayed:500,
    achievements:25,
  }
  player2={
    nickname:"Lomo.Adobado",
    hoursPlayed:1000,
    achievements:200,
  }
  players:string[]=["Valkyrya", "Lomo.Adobado", "Rubander"];
  newPlayer:string ="";
  characters: Character[]=[
    {
      name:'orisa',
      role:'tank',
      image: './assets/images/orisa.jpg'
    },
    {
      name:'soldier:76',
      role:'damage dealer',
      image: './assets/images/soldier76.webp'
    },
    {
      name:'kiriko',
      role:'support',
      image: './assets/images/kiriko.webp'
    },
  ]
  toggleBtn(){
    this.btnDisabled=!this.btnDisabled
  }
  increaseHours(){
    this.player.hoursPlayed+=1;
  }
  increaseAch(){
    this.player.achievements+=1;
  }
  onScroll(event:Event){
    const element =event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changePlayer(event:Event){
    const element =event.target as HTMLInputElement;
    console.log(element.value)
    this.player.nickname=element.value
  }
  addName(){
    this.players.push(this.newPlayer);
    this.newPlayer ='';
  }
  deletePlayer(index:number){
    this.players.splice(index,1)
  }
}
