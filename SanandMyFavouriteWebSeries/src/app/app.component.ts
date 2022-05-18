import { Component } from '@angular/core';
import {Content} from "./models/content";
import { List } from "./models/list";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SanandMyFavouriteWebSeries';
     firstContentItem: Content;
     secondContentItem: Content;
     thirdContentItem: Content;
     fourthContentItem: Content;
     fifthContentItem: Content;

    



     constructor() {
       this.firstContentItem = {
            id: 0,
         title:"How i Met Your Mother",
         body:"How I Met Your Mother (often abbreviated as HIMYM) is an American sitcom, created by Craig Thomas and Carter Bays for CBS. The series, which aired from 2005 ...",
         author:
           "Carter Bays-Craig Thomas",
         imagelink:"https://static.wikia.nocookie.net/himym/images/4/46/HIMYM_poster.jpg",
         type:"Sitcom-Romace-Comedy",
         hashtags:["#himym", "#legendary"]
       };


       this.secondContentItem = {
         id: 1,
         title:"Friends",
         body:"Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six twenty-somethings living in New York City. Over the course of 10 years and seasons, these friends go through life lessons, family, love, drama, friendship, and comedy.",
         author:"David Crane & Marta Kauffman",
         imagelink:"https://images.indianexpress.com/2021/05/friends-the-reunion-1200-2.jpg",
         type:"Sitcom-Comedy",
         hashtags: ["#friends", "#howyoudoin", "#illbethereforyou"]
       };

       this.thirdContentItem = {
         id: 2,
         title:"Brooklyn Nine-Nine",
         body:"Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
         author:"Dan Goor- Michael Schur",
         imagelink:"https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
         type:"funny",
         hashtags:["#bnn", "#high"]
       };

       this.fourthContentItem = {
         id: 3,
         title:"Modern Family",
         body:"Three different but related families face trials and tribulations in their own uniquely comedic ways.",
         author:"Steven Levitan- Christopher Lloyd",
         imagelink:"https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/showimages/cae29355a2f177539897e6db1d9b0861/1600x900-Q90_cae29355a2f177539897e6db1d9b0861.jpg",
         type:"Comedy-family",
         hashtags:["Modernfamily", "#lukedhunpy"]
       };

       this.fifthContentItem = {
         id: 4,
         title:"the office",
         body:"A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium..",
         author:"Greg Daniels",
         imagelink:"https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
         type:"Sitcom",
         hashtags:["#office", "#Michaelscott"]
       };
     }
}
