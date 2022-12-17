import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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

  rfqSmallFormData: ReqQuoFormData =
    this.requestQuotationService.getRequestForQuotationLocal();

  constructor(
    private formBuilder: FormBuilder,
    private requestQuotationService: RequestQuotationService,
    private router: Router,
    private masterCategoryService: ProviderMaterCategoryService
  ) {}

  ngOnInit() {
    this.buildTypeForm2();
    this.rfqId = JSON.parse(localStorage.getItem("rfqId"));
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

    console.log("payload", this.payload);
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

    console.log("Keyword", keyword);
    this.masterCategoryService
      .filterByKeyword(keyword.productName)
      .subscribe((res) => {
        console.log("Rewsponse", res);
        const newList = [];
        const searchedCategories = res.data.searchedCategories;
        const parents = res.data.parents;

        searchedCategories.forEach((category) => {
          const newTree = this.includeParents(parents, category);
          console.log("New Tree", newTree);
          newList.push({ value: category._id, label: newTree });
        });
      });
  }

  includeParents(parent, category, newTree = "") {
    if (category.level == "0") return newTree;
    else {
      const findParent = parent.find(
        (parentCat) => parentCat._id === category.parentId
      );
      console.log("FIndParent", findParent,category.parentId)
      newTree = findParent.name + " >> " + category.name;
      return this.includeParents(parent, findParent, newTree);
    }
  }
}
