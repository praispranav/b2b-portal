import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { FormProductService } from '../../../core/providers/user/form-product.service';
import { ProviderCategoryService } from '../../../core/providers/user/provider-category.service';
import { ProviderCompanyProfileService } from '../../../core/providers/user/provider-company-profile.service';
import { SellerSearchService } from '../../../core/providers/user/seller-search.service';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)

@Component({
  selector: 'app-page-seller-catalogue-product',
  templateUrl: './page-seller-catalogue-product.component.html',
  styleUrls: ['./page-seller-catalogue-product.component.scss']
})
export class PageSellerCatalogueProductComponent implements OnInit {
  searchParams: any = {};
  oldProductSearchText: string = '';

  totalProducts: number = 0;
  products: any[] = [];

  categories: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private sellerSearch: SellerSearchService,
    private companyProfileService: ProviderCompanyProfileService,
    private productService: FormProductService,
    private categoryService: ProviderCategoryService,
  ) {
    this.route.queryParams.subscribe((params) => {
      this.searchParams = params;

      if (this.oldProductSearchText !== params['searchProduct'] || params['searchProduct'] == '') {
        this.getProducts();
      }


    });
  }

  ngOnInit() {
    this.getSellerCategories();
  }


  getTimeCount(date) {
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(new Date(date));
  }

  getProducts() {
    this.productService
      .searchProductBySeller({
        sellerId: this.searchParams.sellerId,
        page: this.searchParams.page,
        pageSize: this.searchParams.pageSize,
        search: this.searchParams.searchProduct || "",
        categoryId: this.searchParams.categoryId
      })
      .subscribe((res: any) => {
        this.totalProducts = res.data.total;
        if (Array.isArray(res.data.products)) {
          this.products = res.data.products.map((product) => {
            return {
              name: product.productName,
              image: environment.imageStorage + product.productImage[0],
              price: "$ " + product.moq,
              year: this.getTimeCount(product.timestamp),
              supplier: ""
            }
          })
        }
        console.log("Products", res)
      });
  }

  getSellerCategories() {
    this.categoryService.getCategoryListBySeller(this.searchParams.sellerId).subscribe((res) => {
      console.log("categories", res)
      this.categories = res.data
    })
  }

}
