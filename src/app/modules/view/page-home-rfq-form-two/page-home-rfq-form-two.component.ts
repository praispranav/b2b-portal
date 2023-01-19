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
import { ProviderUserAuthService } from "../../../core/providers/auth/provider-user-auth.service";
import { ProviderMaterCategoryService } from "../../../core/providers/master/provider-mater-category.service";
import { ProviderMaterStateService } from "../../../core/providers/master/provider-mater-state.service";
import { ImageService } from "../../../core/providers/user/image.service";
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

  userInfor: any = null;
  constructor(
    private formBuilder: FormBuilder,
    private requestQuotationService: RequestQuotationService,
    private router: Router,
    private imageService: ImageService,
    private masterCategoryService: ProviderMaterCategoryService,
    private providerMaterCategoryService: ProviderMaterCategoryService,
    private authService: ProviderUserAuthService
  ) {}

  ngOnInit() {
    const jwt_decode = this.authService.currentUserValueObjTokenDecoded;
    console.log("JwtDecode", jwt_decode);
    if (jwt_decode) {
      this.userInfor = jwt_decode
    } else {
      this.router.navigateByUrl("user-auth/sign-in");
    }

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

  uploadImageToServer(image) {
    return new Promise((resolve, reject) => {
      this.imageService.uploadImage(image).subscribe(
        (res) => {
          resolve(res);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }


  async saveFormData(event){
    if (event) {
      this.allFormData = this.requestQuotationForm2.value;
      this.firstFormValue = {
        userId: this.userInfor._id,
        productName: this.allFormData.productName
          ? this.allFormData.productName
          : "",
        quantity: this.allFormData.quantity ? this.allFormData.quantity : "",
        unit: this.allFormData.unit ? this.allFormData.unit : "",
      };
    }
    let productImage = '';

    if (this.selectedProductFile) {
      const fileName:any = await this.uploadImageToServer(
        this.selectedProductFile
      );
      productImage = fileName.fileName
    }

    this.payload = {
      ...this.requestQuotationForm2.value,
      image: productImage
    };

    this.requestQuotationService.addRequestForQuotation(this.payload).subscribe(
      (res) => {
        this.requestQuotationService.removeRequestForQuotationLocal();
        this.router.navigateByUrl(`/b2b/home`);
        window.alert("Informaion Saved");
        console.log("res", res);
      },
      (err) => {
        window.alert("API Error");
      }
    );
  }

  selectedProductFile:any = null;
  fileUpload(event: any) {
    const file = event.target.files[0];
    this.selectedProductFile = file;
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
