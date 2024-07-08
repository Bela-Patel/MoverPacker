import { Component, OnInit } from '@angular/core';
import { InquiryService } from '../inquiry.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiry-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './inquiry-form.component.html',
  styleUrl: './inquiry-form.component.css'
})
export class InquiryFormComponent implements OnInit {
  inquiryForm!: FormGroup;
  submitted = false;
  quotation: any;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private http: HttpClient,
    private inquiryService: InquiryService
  ) { }


  ngOnInit(): void {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: ['', [Validators.required]],
      items: ['', Validators.required],
      distance: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.inquiryForm.valid) {
      this.inquiryService.submitInquiry(this.inquiryForm.value).subscribe(response => {
        alert("Inquiry is submitted.");
        console.log('Inquiry submitted:', response);
        this.inquiryService.getQuotation(this.inquiryForm.value).subscribe(quotation => {
          this.quotation = quotation.cost;
          this.router.navigate(['/quotation'], {
            queryParams: {
              quotation: this.quotation,
            }
          });
        });
      });
    }
  }
}
