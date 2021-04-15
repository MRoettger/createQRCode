import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeComponent } from './Components/qrcode/qrcode.component';

const routes: Routes = [
  {
    path: 'qr',
    component: QRCodeComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
