import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { MessageService } from "../../../@pages/components/message/message.service";
import { BuyerMailService } from "../../../core/providers/user/buyer-mail.service";
import { FormProductService } from "../../../core/providers/user/form-product.service";
import { ImageService } from "../../../core/providers/user/image.service";

@Component({
  selector: "app-send-enquiry-form",
  templateUrl: "./send-enquiry-form.component.html",
  styleUrls: ["./send-enquiry-form.component.scss"],
})
export class SendEnquiryFormComponent implements OnInit {
  addedProducts: any[] = [];
  message: string = '';
  attachments: any[] = [];
  attachment: any;
  image: string;
  baseUrl: string = environment.imageStorage;

  constructor(
    private router: Router,
    private productService: FormProductService,
    private buyerMailService: BuyerMailService,
    private messageService: MessageService,
    private imageService: ImageService,
  ) { }


  ngOnInit() {
    this.checkProducts();
    this.productService.stringSubject.subscribe((a) => {
      this.checkProducts();
    });
  }

  removeAddedProduct(productId) {
    this.productService.removeProduct(productId);
  }

  checkProducts() {
    const products = localStorage.getItem(this.productService.productConstant);
    if (products) {
      const parsed = JSON.parse(products);
      this.addedProducts = parsed;
    }
  }

  onChangeQuanity(event, index) {
    this.addedProducts[index].quantity = event.target.value;
  }

  fileUpload(event: any) {
    const file = event.target.files;
    if (file && file[0]) {
      this.uploadImageToServer(file[0]);
    } else {
      alert('Please upload a image')
    }
  }

  uploadImageToServer(image) {
    return new Promise((resolve, reject) => {
      this.imageService.uploadImage(image).subscribe(
        (res) => {
          resolve(res)
          this.image = res.fileName;
        },
        (error) => {
          console.log(error);
          reject(error);
        }
      );
    });
  }


  saveForm() {
    const sellersWithProduct = {};

    this.addedProducts.forEach((product) => {
      if (sellersWithProduct[product.supplierId]) {
        sellersWithProduct[product.supplierId].product.push({ productId: product.productId, productName: product.name, quantity: product.quantity, productImage: product.image })
      } else {
        sellersWithProduct[product.supplierId] = {
          message: this.message,
          attachments: this.image,
          product: [],
          sellerId: product.supplierId
        }
        sellersWithProduct[product.supplierId].product.push({ productId: product.productId, productName: product.name, quantity: product.quantity, productImage: product.image })
      }
    })


    Object.values(sellersWithProduct).forEach((payload) => {
      this.buyerMailService.createNewRequest(payload).subscribe((res) => {
        console.log(res);
        if (res.header.code === 200) {
          this.messageService.success(res.header.message);
          this.message
          localStorage.removeItem(this.productService.productConstant);
          this.productService.changeState();
          window.history.back()
        } else {
          this.messageService.error(res.header.message)
        }
      })
    })

  }
}
