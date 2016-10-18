import {
  AfterViewChecked, Component, DoCheck, ElementRef, EventEmitter, HostListener,
  Input, OnInit, OnDestroy, ViewChild
} from '@angular/core';

import { Subscription }   from 'rxjs/Rx';

import { PaginatorComponent } from "./paginator/paginator.component";
import { TableInput } from "../../models/table-input-classes";

@Component({
  selector: 'alep-ng2-table',
  templateUrl: 'alep-ng2-table.component.html',
  styleUrls: ['alep-ng2-table.component.css']
})
export class AlepNg2TableComponent
implements AfterViewChecked, OnDestroy, OnInit, DoCheck {
  @HostListener('window:resize', ['$event'])
  private onResize(event: any) {
    this.emOnResize.emit();
  }
  @Input() private tableInput: TableInput;
  @ViewChild("container") private containerChild: ElementRef;
  @ViewChild("table") private tableChild: ElementRef;
  @ViewChild("tableContainer") private tableContainerChild: ElementRef;
  @ViewChild("paginator") private paginatorChild: ElementRef;
  @ViewChild(PaginatorComponent) private paginator: PaginatorComponent;
  private currentPage: number = 1;
  private emOnResize: EventEmitter<any> = new EventEmitter();
  private itemsByPage: any[][] = [];
  private sortedColumn: {index: number, order: string} = {
    index: null,
    order: null
  };
  private subOnResize: Subscription;

  constructor() { }

  ngOnInit() {
    this.subOnResize = this.emOnResize.subscribe(
      () => this.setTableContainerHeight()
    );
    this.sortColumn(0, 'ascending');
    this.setItemsByPage();
  }
  ngOnDestroy() {
    this.cancelSubs();
  }
  ngAfterViewChecked() {
    this.setTableContainerHeight();
  }
  ngDoCheck() {
  }

  private cancelSubs() : void {
    this.subOnResize.unsubscribe();
  }
  public onPageClicked(page: number) : void {
    this.currentPage = page;
  }
  public onSortColumn(index: number) {
    let order: string;
    if (this.sortedColumn.index === index) {
      order = (this.sortedColumn.order === 'ascending') ?
        'descending' : 'ascending';
    }
    else {
      order = 'ascending';
    }
    this.sortColumn(index, order);
    this.updateItemsByPage();
  }
  private setItemsByPage() : void {
    this.itemsByPage = this.paginator.getItemsByPage(this.tableInput);
  }
  private sortColumn(index: number, order: string) : void {
    this.sortedColumn.index = index;
    this.sortedColumn.order = order;
    this.sortTableInputItems(this.tableInput.headers[index].propName);
    if (order === 'descending') {
      this.tableInput.items.reverse();
    }
  }
  private setTableContainerHeight() : void {
    let container: HTMLElement = this.containerChild.nativeElement;
    let containerHeight: number = container.clientHeight;
    let paginator: HTMLElement = this.paginatorChild.nativeElement;
    let paginatorHeight: number = paginator.clientHeight;
    let tableContainer: HTMLElement = this.tableContainerChild.nativeElement;
    tableContainer.style.height = containerHeight - paginatorHeight + 'px';
  }
  private sortTableInputItems(propName: string) : void {
    this.tableInput.items.sort((a, b) => {
      let result: number = (a[propName] > b[propName]) ? 1 : -1;
      return result;
    });
  }
  private updateItemsByPage() : void {
    this.setItemsByPage();
  }
}
