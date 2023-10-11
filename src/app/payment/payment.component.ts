import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  constructor(private router: ActivatedRoute) {}
  ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      const dataParams = params.get('data');
      if (dataParams) {
        const data = JSON.parse(dataParams);
        this.cart = data.cart;
        this.total = data.total;
        this.location = data.location;
        console.log(this.cart);
        console.log(this.total);
        console.log(this.location);
      }
    });
    this.tax = (this.total * 18) / 100;
    this.amount = this.total + this.tax + this.dilivery;
    // const { plotno, address, floreno, place } = this.location[0];
    this.qrCodeData = `upi://pay?pa=${this.upiIdowner}&am=${this.amount}`;
    this.generateQRCode();
  }
  tax = 0;
  dilivery = 24;
  amount = 0;
  cart: any = [];
  location: any = [];
  total = 0;
  order_no = Math.floor(Math.random() * 100000 + 1);
  date = new Date().toDateString();
  time =
    new Date().getHours() +
    ':' +
    new Date().getMinutes() +
    ':' +
    new Date().getSeconds();

  Name = 'Manan Jain';
  ContactNo = 8390596701;
  cardNo = 0;
  expiryDate = '';
  cvv = 0;
  openCreditcard = false;
  openNetBanking=false;
  actNo=0;
  accHolderName="";
  ifsc="";
  branch="";
  bank="";
  upiId="";
  upiIdowner: string = '8390596701@paytm';
  qrCodeData:string="";
  qrCodeImage:string="";
  creaditCardopen() {
    this.openCreditcard = true;
    this.closeNetbanking();
    this.closeUpi();
    this.closeCashOnDelivery();

  }
  closeCard(){
    this.openCreditcard=false;
  }
  closeNetbanking(){
    this.openNetBanking=false;
  }
  netBankingOpenCard(){
    this.openNetBanking=true;
    this.closeCard();
    this.closeUpi();
    this.closeCashOnDelivery();

  }
  upiopen=false;
  openupiFun(){
    this.upiopen=true;
    this.closeNetbanking();
    this.closeCard();
    this.closeCashOnDelivery();
  }
  closeUpi(){
    this.upiopen=false;
  }
  generateQRCode() {
    const qr = QRCode(0, 'H');
    qr.addData(this.qrCodeData);
    qr.make();
    this.qrCodeImage = qr.createImgTag(5);
  }
  cod=false;
  cashondelivery(){
    this.cod=true;
    this.closeCard();
    this.closeNetbanking();
    this.closeUpi();
  }
  closeCashOnDelivery(){
this.cod=false;
  }
}
