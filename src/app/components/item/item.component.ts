import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/model/item';
import { DataService } from 'src/app/services/data.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  itemList: Item[] = [];

  selectedItem: any;
  constructor(
    private modalService: NgbModal,
    private itemService: ItemService,
    private dataService: DataService
  ) {
    this.dataService.getSearch().subscribe((value) => {
      this.onSeachItem(value);
    });
  }

  ngOnInit(): void {
    this.onSeachItem();
  }

  //item search
  public onSeachItem(value?: string) {
    this.itemService.searchItems(value).subscribe((data) => {
      console.log(data);
      this.itemList = data.Data;
    });
  }

  //open view detail
  public openModel(modal: any, id: string, priceId: number): void {
    this.itemService.getItem(Number(id), priceId).subscribe((data) => {
      const obj = {
        name: data.Data.Name,
        priceGroup: data.Data.ItemPriceGroups.map((value: any) => {
          return {
            priceName: value.PriceGroups.Name,
            type: value.PriceType,
            amount: value.PriceGroups.AverageDaysPerYear,
          };
        }),
      };

      this.selectedItem = obj;
      this.modalService.open(modal).result.then((value) => {
        console.log(value);
      });
    });
  }
}
