import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../booking.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  bookingForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', [Validators.required, this.dateValidator]]
    });
  }

  dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const today = new Date();
    const selectedDate = new Date(control.value);
    if (selectedDate < today) {
      return { 'invalidDate': true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookingForm.valid) {
      this.bookingService.book(this.bookingForm.value).subscribe(response => {
        alert("Booking form is submitted.");
        this.bookingForm.reset();
        console.log('Booking confirmed:', response);
      });
    }
  }
}
