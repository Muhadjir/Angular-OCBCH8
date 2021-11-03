import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/models/payment-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  constructor(public authService:AuthService,
    private toastr: ToastrService) { }


  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.authService.payDet.paymentDetailId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.authService.postPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.authService.refreshList();
        this.toastr.success('Submitted successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.authService.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.authService.refreshList();
        this.toastr.info('Updated successfully', 'Payment Detail Register')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.authService.payDet =new PaymentDetail();
  }
}
