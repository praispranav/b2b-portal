import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { ProviderMaterCategoryService } from "../../../core/providers/master/provider-mater-category.service";
import { ProviderMaterStateService } from "../../../core/providers/master/provider-mater-state.service";
import {
  ReqQuoFormData,
  RequestQuotationService,
} from "../../../core/providers/user/request-quotation.service";
@Component({
  selector: "app-page-home-rfq-form-two",
  templateUrl: "./page-home-rfq-form-two.component.html",
  styleUrls: ["./page-home-rfq-form-two.component.scss"],
})
export class PageHomeRfqFormTwoComponent implements OnInit {
  @ViewChild("launchModalButton", { static: false })
  launchModalButton: ElementRef<HTMLElement>;
  handlePreview: any;
  file: File;
  fileType: any | string;
  fileName: string = "";
  imageBase64: string | any = "";
  requestQuotationForm2: FormGroup;
  firstFormValue: any;
  payload: any = {};
  ShowSecondSection: boolean = false;
  ShowSecondOne: boolean = true;
  rfqId: string = "";
  quote: any = {};
  allFormData: any;

  categories: any[] = [];
  didNotFind: string = "Don't find? Choose my category.";

  preViewItem: any = null;
  masterCategoryList: any[] = [];
  envImgUrl: string = environment.imageStorage;
  allCategoryList: any[] = []; // this will contain all category which fetched inside the modal

  rfqSmallFormData: ReqQuoFormData =
    this.requestQuotationService.getRequestForQuotationLocal();

  constructor(
    private formBuilder: FormBuilder,
    private requestQuotationService: RequestQuotationService,
    private router: Router,
    private masterCategoryService: ProviderMaterCategoryService,
    private providerMaterCategoryService: ProviderMaterCategoryService
  ) {}

  ngOnInit() {
    this.buildTypeForm2();
    this.rfqId = JSON.parse(localStorage.getItem("rfqId"));
    this.getMaterCategoryListByCategory(0, 1000, { level: "0" });
  }

  buildTypeForm2() {
    this.requestQuotationForm2 = this.formBuilder.group({
      productName: ["", [Validators.required, Validators.maxLength(200)]],
      productCategory: ["", [Validators.required]],
      unit: ["", [Validators.required]],
      sourcingType: ["", [Validators.required]],
      sourcingPurpose: ["", [Validators.required]],
      budget: ["", [Validators.required, Validators.maxLength(50)]],
      details: ["", [Validators.required, Validators.maxLength(200)]],
      currency: ["", [Validators.required]],
      image: ["", [Validators.required]],
      shipIn: ["", [Validators.required, Validators.maxLength(20)]],
      isCheck: [""],
      quantity: ["", Validators.required],
    });
    this.requestQuotationForm2.patchValue({
      ...this.rfqSmallFormData,
    });
    this.filterCategory();
  }

  saveFormData(event): void {
    if (event) {
      this.allFormData = event.formData;
      this.firstFormValue = {
        productName: this.allFormData.productName
          ? this.allFormData.productName
          : "",
        quantity: this.allFormData.quantity ? this.allFormData.quantity : "",
        unit: this.allFormData.unit ? this.allFormData.unit : "",
      };
    }
    this.payload = {
      ...this.requestQuotationForm2.value,
    };

    this.requestQuotationService.addRequestForQuotation(this.payload).subscribe(
      (res) => {
        this.router.navigateByUrl(`/b2b/home`);
        window.alert("Informaion Saved");
        console.log("res", res);
      },
      (err) => {
        window.alert("API Error");
      }
    );
  }
  fileUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageBase64 = reader.result;
      this.requestQuotationForm2.patchValue({
        imageUrl: reader.result as string,
      });
      this.fileType = file.type;
      this.fileName = file.name;
    };
  }

  onChange() {
    const { unit, quantity, productName } = this.requestQuotationForm2.value;
    this.requestQuotationService.setRequestForQuotationLocal({
      unit,
      productName,
      quantity,
    });
  }

  filterCategory() {
    const keyword = this.requestQuotationForm2.value;
    if (keyword.productCategory == "none") return;
    this.masterCategoryService
      .filterByKeyword(keyword.productName)
      .subscribe((res) => {
        const newList = [];
        const searchedCategories = res.data.searchedCategories;
        const parents = res.data.parents;

        searchedCategories.forEach((category) => {
          const newTree = this.includeParents(parents, category);
          newList.push({
            value: category._id,
            label: newTree + " >> " + category.name,
          });
        });
        newList.push({ value: "others", label: "Others" });
        newList.push({ value: "none", label: this.didNotFind });
        this.categories = newList;
        this.requestQuotationForm2.patchValue({
          productCategory: newList[0].value,
        });
        console.log("Resolved");
      });
  }

  includeParents(parent, category, newTree = "") {
    if (category.level == "0") return newTree;
    else {
      const findParent = parent.find(
        (parentCat) => parentCat._id === category.parentId
      );
      // console.log("FIndParent", findParent,category.parentId, parent)
      newTree = findParent.name + " >> " + category.name;
      console.log("NewTree", newTree);
      return this.includeParents(parent, findParent, newTree);
    }
  }

  onChangeCategory() {
    const values = this.requestQuotationForm2.value;
    console.log(
      "Values",
      values.productCategory,
      values.productCategory == "none"
    );
    if (values.productCategory == "none") {
      this.launchModalButton.nativeElement.click();
    }
  }

  //modal category loop code below

  getMaterCategoryListByCategory(
    index: number,
    length: number,
    query: any = {}
  ) {
    this.providerMaterCategoryService
      .getMaterCategoryListByFilter(index, length, query)
      .subscribe((res) => {
        this.masterCategoryList = res.data.map((i) => {
          this.allCategoryList.push(i);
          return {
            ...i,
            _name: i.name,
            _hasChildren: true,
            _isEditable: true,
            _isDeletable: true,
          };
        });
      });
  }

  getChildren(item: any, nodeEl: any) {
    if (this.preViewItem) {
      this.remChildren(item);
    }
    this.providerMaterCategoryService
      .getMaterCategoryListByFilter(0, 1000, { parentId: item["_id"] })
      .subscribe((res) => {
        item["_toggle"] = true;
        this.preViewItem = item;
        this.preViewItem["_nodeEl"] = nodeEl;
        item["children"] = res.data.map((i) => {
          this.allCategoryList.push(i);
          return {
            ...i,
            _name: i.name,
            _hasChildren: true,
            _isEditable: true,
            _isDeletable: true,
          };
        });
      });
  }

  remChildren(cur: any) {
    this.removeRecChild(cur, this.masterCategoryList);
    this.preViewItem = null;
  }

  removeRecChild(cur: any, arr: any[]) {
    if (Array.isArray(arr)) {
      arr.forEach((item) => {
        if (item.parentId === cur.parentId) {
          item["children"] = [];
          item["_toggle"] = false;
        } else {
          this.removeRecChild(cur, item["children"]);
        }
      });
    }
  }

  selectExtraCategory(category) {
    let name = category.name;
    if (category.level == "0") {
    } else if (category.level == "1") {
      const parent = this.includeParents(this.allCategoryList, category);
      name = parent;
    } else {
      console.log("All Catgories", this.allCategoryList);
      const parent = this.includeParents(this.allCategoryList, category);
      name = parent + " >> " + category.name;
    }
    debugger;
    console.log("Selected Category", name, category._id);
    this.categories = [
      { label: name, value: category._id },
      ...this.categories,
    ];
    this.requestQuotationForm2.patchValue({ productCategory: category._id });
    console.log(
      "Selected Category2",
      this.requestQuotationForm2.value.productCategory
    );
  }
}
