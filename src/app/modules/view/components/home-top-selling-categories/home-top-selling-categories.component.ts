import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ProviderMaterCategoryService } from '../../../../core/providers/master/provider-mater-category.service';

@Component({
  selector: 'app-home-top-selling-categories',
  templateUrl: './home-top-selling-categories.component.html',
  styleUrls: ['./home-top-selling-categories.component.scss']
})
export class HomeTopSellingCategoriesComponent implements OnInit {
  categoryList: any[] = [];
  baseUrl: string = environment.imageStorage;
  constructor(
    private _providerMasterService: ProviderMaterCategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this._providerMasterService.getMaterCategoryListByFilter().subscribe(
      (res) => {
        console.log('res+++', res);
        this.categoryList = res.data;
      },
      (err) => {
        console.log('err', err);
      })
  }

}
