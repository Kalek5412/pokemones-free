import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent{
  public pokeList: Array<any>=[]
  page: number=0
    
  constructor(private pokeService: PokeService) { 
    pokeService.getList().subscribe((resp: any)=>{this.pokeList=resp.results})
  }

    nextPage(){
    this.page += 8;
    this.pokeService.getList(this.page).subscribe((resp: any)=>{this.pokeList=resp.results})
    }

    prevPage(){
      this.page -= 8;
      this.pokeService.getList(this.page).subscribe((resp: any)=>{this.pokeList=resp.results})
      }
  

}
