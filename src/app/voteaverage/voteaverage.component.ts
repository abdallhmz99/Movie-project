import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-voteaverage',
  templateUrl: './voteaverage.component.html',
  styleUrls: ['./voteaverage.component.scss']
})
export class VoteaverageComponent implements OnInit {

  average:object[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(_MovieService:MovieService) { 
    _MovieService.getVoteaverage().subscribe((data)=>{
      this.average=data.results;
    });
  }
  ngOnInit(): void {
  }

}
