import {
  Component, EventEmitter, Input, Output
} from '@angular/core';

import { TableInput } from "../../../models/table-input-classes";

@Component({
  selector: 'app-table-paginator',
  templateUrl: 'paginator.component.html',
  styleUrls: ['paginator.component.css']
})
export class PaginatorComponent {
  @Input() private currentPage: number = 1;
  @Input() private tableInput: TableInput;
  @Output() private emPageClicked = new EventEmitter();
  private pagesIterator: number[];
  private firstVisiblePage: number = 1;
  private clickablePages: number[];

  constructor() { }
  /* Private methods */
  private setClickablePages(totClickablePages: number) : void {
    this.clickablePages = [];
    let length: number = (
        this.firstVisiblePage + totClickablePages <=
        this.pagesIterator.length
    )
        ? this.firstVisiblePage + totClickablePages
        : this.pagesIterator.length + 1;
    for (let i = this.firstVisiblePage; i < length; i++) {
      this.clickablePages.push(i);
    }
  }
  /* Public methods */
  public getItemsByPage(tableInput: TableInput) : any[][] {
    let itemsByPage: any[][] = [];
    let items: any[] = tableInput.items;
    let itemsPerPage: number = tableInput.itemsPerPage;
    let sliceStart: number = 0;
    let sliceEnd: number;
    do {
      sliceEnd = (sliceStart + itemsPerPage <= items.length) ?
        sliceStart + itemsPerPage :
          items.length;
      itemsByPage.push(items.slice(sliceStart, sliceEnd));
      sliceStart += itemsPerPage;
    }
    while (sliceStart < items.length);
    this.setPagesIterator(itemsByPage.length);
    this.setClickablePages(tableInput.totClickablePages);
    return itemsByPage;
  }
  public onNextPagesClicked(nextPages: HTMLElement) : void {
    if (nextPages.classList.contains('disabled')) {
      return;
    }
    else {
      this.firstVisiblePage += this.tableInput.totClickablePages;
      this.setClickablePages(this.tableInput.totClickablePages);
    }
  }
  public onPageClicked(page: number) : void {
    this.emPageClicked.emit(page);
  }
  public onPrevPagesClicked(prevPages: HTMLElement) : void {
    if (prevPages.classList.contains('disabled')) {
      return;
    }
    else {
      this.firstVisiblePage -= this.tableInput.totClickablePages;
      this.setClickablePages(this.tableInput.totClickablePages);
    }
  }
  public setPagesIterator(totPages: number) : void {
    this.pagesIterator = [];
    for (let i = 1; i < totPages + 1; i++) {
      this.pagesIterator.push(i);
    }
  }
}
