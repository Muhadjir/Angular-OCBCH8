import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentDetail } from 'src/app/models/payment-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(public authService:AuthService,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    this.authService.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.authService.payDet = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.authService.deletePaymentDetail(id)
        .subscribe(
          res => {
            this.authService.refreshList();
            this.toastr.error("Deleted successfully", 'Payment Detail Register');
          },
          err => { console.log(err) }
        )
    }
  }
}
