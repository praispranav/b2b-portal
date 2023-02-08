import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { ProviderMaterCountryService } from "../../../../core/providers/master/provider-mater-country.service";
import { FormGroup, FormArray } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { AssociateInterface } from "./../../../../core/providers/user/associate-interface";
import { ImageService } from "./../../../../core/providers/user/image.service";
import { AssociateService } from "./../../../../core/providers/user/associate.service";
import { ProviderMaterLocationService } from "./../../../../core/providers/master/provider-mater-location.service";
import { ProviderMaterStateService } from "./../../../../core/providers/master/provider-mater-state.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-associate-profile-add",
  templateUrl: "./associate-profile-add.component.html",
  styleUrls: ["./associate-profile-add.component.scss"],
})
export class AssociateProfileAddComponent implements OnInit {
  countries: any = [];
  states: any[] = [];
  cities: any[] = [];
  formGroup: FormGroup;
  image: string;
  selectedFiles: any[] = [];
  previews: any[] = [];
  payload: AssociateInterface;
  formArray: FormArray = new FormArray([]);
  certificateList: any[] = [];
  date = new Date();

  constructor(
    private providerMaterCountryService: ProviderMaterCountryService,
    private formBuilder: FormBuilder,
    private imageService: ImageService,
    private associateService: AssociateService,
    private providerMaterLocationService: ProviderMaterLocationService,
    private providerMaterStateService: ProviderMaterStateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCountryList();
    this.buildForm();
  }

  getCountryList(): void {
    this.providerMaterCountryService.getMaterCountryList().subscribe(
      (res: any) => {
        this.countries = res.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      companyName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
      country: [""],
      state: [""],
      city: ["", [Validators.required]],
      gstNo: ["", [Validators.required]],
      estYear: ["", [Validators.required]],
      registrationCertificate: ["", [Validators.required]],
      companyWebsite: ["", [Validators.required]],
      companyStrength: ["", [Validators.required]],
      existingclient: ["", [Validators.required]],
      assignedBy: ["", [Validators.required]],
      agreementLetter: ["", [Validators.required]],
      contactPerson: this.formBuilder.array([]),
    });
    this.addNewContact({});
  }

  onCountrySelected(e) {
    this.providerMaterStateService
      .getMaterStateListAll(e.target.value)
      .subscribe(
        (res: any) => {
          this.states = res.data[0].states;
          console.log("state", this.states);
        },
        (err) => {
          console.log(err, "not selected");
        }
      );
  }

  onStateSelected(e) {
    this.providerMaterLocationService
      .getMaterLocationListAll(e.target.value)
      .subscribe(
        (res: any) => {
          this.cities = res.data ? res.data : [];
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onCitySelected(e) {}

  // WILL RETURN ALL CONTACTS
  get contacts(): FormArray {
    return this.formGroup.get("contactPerson") as FormArray;
  }

  // WILL ADD NEW CONTACTS
  addNewContact(data): void {
    this.contacts.push(this.newContacts(data));
  }

  // NEW CONTACTS
  newContacts(data: any = {}): FormGroup {
    return this.formBuilder.group({
      name: [data && data.name ? data.name : "", [Validators.required]],
      surName: [
        data && data.surName ? data.surName : "",
        [Validators.required],
      ],
      phone: [data && data.phone ? data.phone : "", [Validators.required]],
      mobileNumber: [
        data && data.mobileNumber ? data.mobileNumber : "",
        [Validators.required],
      ],
    });
  }

  // WILL REMOVE SELECTED CONTACTS
  removeContacts(index: number): void {
    this.contacts.removeAt(index);
  }

  selectFiles(event: any): void {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles && this.selectedFiles[0]) {
      for (let image of this.selectedFiles) {
        console.log("image------", image);
        this.uploadImageToServer(image);
      }
    }
  }

  fileUpload(event: any) {
    const file = event.target.files;
    if (file && file[0]) {
      this.uploadSingleImage(file[0]);
    } else {
      alert("Please upload a image");
    }
  }

  uploadImageToServer(image) {
    return new Promise((resolve, reject) => {
      this.imageService.uploadImage(image).subscribe(
        (res) => {
          resolve(res);
          this.certificateList.push(res.fileName);
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  uploadSingleImage(image) {
    return new Promise((resolve, reject) => {
      this.imageService.uploadImage(image).subscribe(
        (res) => {
          resolve(res);
          this.image = res.fileName;
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }

  onSubmit(): void {
    // alert();
    // if (!this.formGroup.valid) {
    //   return;
    // }
    let formData = this.formGroup.value;
    let formArrayData = [...this.formArray.value];
    let contact_details = [];
    if (
      formData.hasOwnProperty("contactPerson") &&
      Array.isArray(formData.contactPerson) &&
      formData.contactPerson.length > 0
    ) {
      formData.contactPerson.forEach((item) => {
        let payload: any = {
          name: item.name,
          surName: item.surName,
          phone: item.phone,
          mobileNumber: item.mobileNumber,
        };
        contact_details.push(payload);
      });
    }

    this.payload = {
      companyName: formData.companyName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      gstNo: formData.gstNo,
      estYear: formData.estYear,
      registrationCertificate: [...this.certificateList],
      companyWebsite: formData.companyWebsite,
      companyStrength: formData.companyStrength,
      existingclient: formData.existingclient,
      assignedBy: formData.assignedBy,
      agreementLetter: this.image,
      contactPerson: [...contact_details],
      timeStamp: this.date.toString(),
    };

    console.log("payload", this.payload);
    this.associateService.addAssociate(this.payload).subscribe(
      (res) => {
        console.log("res", res);
        this.router.navigateByUrl("/admin/associate-profile/list");
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
