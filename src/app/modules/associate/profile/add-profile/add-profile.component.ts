import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProviderMaterCountryService } from "../../../../core/providers/master/provider-mater-country.service";
import { ProviderMaterLocationService } from "../../../../core/providers/master/provider-mater-location.service";
import { ProviderMaterStateService } from "../../../../core/providers/master/provider-mater-state.service";
import { AssociateInterface } from "../../../../core/providers/user/associate-interface";
import { AssociateService } from "../../../../core/providers/user/associate.service";
import { ImageService } from "../../../../core/providers/user/image.service";
import { AppMessageService } from "../../../../core/services/app-message.service";

@Component({
  selector: "app-add-profile",
  templateUrl: "./add-profile.component.html",
  styleUrls: ["./add-profile.component.scss"],
})
export class AddProfileComponent implements OnInit {
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
  associateId: string;
  associateDetails: any;
  readOnly: boolean = false;

  constructor(
    private providerMaterCountryService: ProviderMaterCountryService,
    private formBuilder: FormBuilder,
    private imageService: ImageService,
    private associateService: AssociateService,
    private providerMaterLocationService: ProviderMaterLocationService,
    private providerMaterStateService: ProviderMaterStateService,
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private appMessageService: AppMessageService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.getCountryList();
    this.getStateList();
    this.getCityList();
  }

  ngAfterViewInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      try {
        this.associateId = params["aid"];
        this.getAssociateDetails(this.associateId);
      } catch (err) {
        console.log("err..");
      }
    });
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

  getStateList(): void {
    let payload = {
      country: null,
    };
    this.providerMaterStateService.getMaterStateListAll(payload).subscribe(
      (res: any) => {
        this.states = res.data[0].states;
        console.log("state", this.states);
      },
      (err) => {
        console.log(err, "not selected");
      }
    );
  }

  getCityList(): void {
    let payload = {
      state: null,
    };
    this.providerMaterLocationService
      .getMaterLocationListAll(payload)
      .subscribe(
        (res: any) => {
          this.cities = res.data ? res.data : [];
        },
        (err) => {
          console.log(err);
        }
      );
  }

  getAssociateDetails(id): void {
    this.associateService.getAssociateById(id).subscribe(
      (res) => {
        this.associateDetails = res;
        if (
          this.associateDetails &&
          this.associateDetails.hasOwnProperty("_id")
        ) {
          this.patchFormData();
        }
      },
      (err) => {
        console.log("err", err);
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

  patchFormData(): void {
    this.removeContacts(0);
    if (this.associateDetails.hasOwnProperty("contactPerson")) {
      this.associateDetails.contactPerson.forEach((element) => {
        this.addNewContact(element);
      });
    }
    this.formGroup.patchValue({
      companyName: this.associateDetails.companyName,
      email: this.associateDetails.email,
      password: this.associateDetails.password,
      confirmPassword: this.associateDetails.confirmPassword,
      country: this.associateDetails.country,
      state: this.associateDetails.state,
      city: this.associateDetails.city,
      gstNo: this.associateDetails.gstNo,
      estYear: this.associateDetails.estYear,
      // registrationCertificate: [...this.certificateList],
      companyWebsite: this.associateDetails.companyWebsite,
      companyStrength: this.associateDetails.companyStrength,
      existingclient: this.associateDetails.existingclient,
      assignedBy: this.associateDetails.assignedBy,
      // agreementLetter: this.associateDetails.agreementLetter,
      isVerified: this.associateDetails.isVerified,
    });
    // this.formGroup.controls.email.disable();
    this.readOnly = true;
  }

  onCountrySelected(e) {
    let payload = {
      country: e.target.value,
    };
    this.providerMaterStateService.getMaterStateListAll(payload).subscribe(
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
    let payload = {
      state: e.target.value,
    };
    this.providerMaterLocationService
      .getMaterLocationListAll(payload)
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
        this.uploadImageToServer(image);
      }
    }
  }

  fileUpload(event: any) {
    const file = event.target.files;
    if (file && file[0]) {
      this.uploadSingleImage(file[0]);
    } else {
      this.appMessageService.createBasicNotification(
        "red",
        "Please upload a image"
      );
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
    if (!this.formGroup.valid) {
      this.appMessageService.createBasicNotification(
        "red",
        "Please fill the all mandatory fields"
      );
      return;
    }
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
      isVerified: false,
    };

    console.log("payload", this.payload);
    if (this.associateDetails && this.associateDetails.hasOwnProperty("_id")) {
      this.payload._id = this.associateDetails._id;
      this.associateService.updateAssociate(this.payload).subscribe(
        (res) => {
          this.router.navigateByUrl("/associate/view");
        },
        (err) => {
          console.log("err", err);
        }
      );
    }
  }
}
