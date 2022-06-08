import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  result?: string;
  seriesList: Content[];
  constructor() {
    this.seriesList = [{
      id: 0,
      title: "How i Met Your Mother",
      body: "How I Met Your Mother (often abbreviated as HIMYM) is an American sitcom, created by Craig Thomas and Carter Bays for CBS. The series, which aired from 2005 ...",
      author:
        "Carter Bays-Craig Thomas",
      imagelink: "",
      type: "sitcom",
      hashtags: ["himym", "legendary"]
    },
    {
      id: 1,
      title: "Friends",
      body: "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six twenty-somethings living in New York City. Over the course of 10 years and seasons, these friends go through life lessons, family, love, drama, friendship, and comedy.",
      author: "David Crane & Marta Kauffman",
      imagelink: "https://images.indianexpress.com/2021/05/friends-the-reunion-1200-2.jpg",
      type: "sitcom",
      hashtags: ["friends", "howyoudoin", "illbethereforyou"]
    },
    {
      id: 2,
      title: "Brooklyn Nine-Nine",
      body: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
      author: "Dan Goor- Michael Schur",
      imagelink: "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",

      hashtags: ["bnn", "high"]
    },
    {
      id: 3,
      title: "Modern Family",
      body: "Three different but related families face trials and tribulations in their own uniquely comedic ways.",
      author: "Steven Levitan- Christopher Lloyd",
      imagelink: "https://cdn1.edgedatg.com/aws/v2/abc/ModernFamily/showimages/cae29355a2f177539897e6db1d9b0861/1600x900-Q90_cae29355a2f177539897e6db1d9b0861.jpg",

      hashtags: ["Modernfamily", "lukedhunpy"]
    },
    {
      id: 4,
      title: "the office",
      body: "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium..",
      author: "Greg Daniels",
      imagelink: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
      type: "comedy",
      hashtags: ["office", "Michaelscott"]
    },
    {
      id: 5,
      title: "Breaking Bad",
      body: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
      author: "Vince Gilligan",
      imagelink: "https://ntvb.tmsimg.com/assets/p8696131_b_h10_aa.jpg?w=1280&h=720",
      type: "crime",
      hashtags: ["WalterWhite", "JessePinkman"]
    }, {
      id: 6,
      title: "YOU",
      body: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
      author: "Greg Berlanti",
      imagelink: "https://m.media-amazon.com/images/M/MV5BMzkzOGFiY2EtZDcyZi00OWNhLThhNmYtYjQ3ODljMTM5ZDBkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      type: "crime",
      hashtags: ["JoeGoldberg", "LoveQuinn"]
    }];

  }

  ngOnInit(): void {
  }
  titleFilter(input: string): any {
    //console.log(input);
    for (let i = 0; i <= 7; i++) {
      // console.log(typeof(this.rockets[i].title));
      console.log(this.seriesList[5].author);
      console.log(i);
      if (this.seriesList[i].author == input) {
        console.log(i);
        console.log(input);
        this.result = 'Exist';
        return this.result;
        //console.log(true);
      }
      else {
        this.result = 'Not Exist';
        console.log(false);
      }
    }
  }

}
