import { Component, Input } from '@angular/core';
import { InquiryService } from '../inquiry.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.css'
})
export class QuotationComponent {
  quotation: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    // this.inquiryService.getQuotation().subscribe(data => {
    //   this.quotation = data;
    // });
    this.route.queryParams.subscribe(params => {
      this.quotation = params['quotation'];
      console.log(this.quotation)
    });
  }
}
