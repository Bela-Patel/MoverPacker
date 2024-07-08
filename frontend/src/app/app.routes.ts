import { Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { InquiryFormComponent } from './inquiry-form/inquiry-form.component';
import { QuotationComponent } from './quotation/quotation.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inquiry', pathMatch: 'full' },
    { path: 'inquiry', component: InquiryFormComponent },
    { path: 'booking', component: BookingFormComponent },
    { path: 'quotation', component: QuotationComponent }
];
