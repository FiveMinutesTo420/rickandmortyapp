import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  count:number = 1
  @Input() info:any;
  @Output() pageChange:EventEmitter<any> = new EventEmitter()
  onChangePage(url:string):void{
    let check:URLSearchParams = new URLSearchParams(url)
    check.forEach((key)=>{
      this.count = Number(key)

    })
    this.pageChange.emit(url)
  }
}
