import { Component, OnInit, VERSION } from '@angular/core';
import {FormsModule} from '@angular/forms';
declare var QRCode: any;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRCodeComponent implements OnInit {
  text = 'www.google.de/search?q=hab+dich+lieb';
  bar = 'World';
  version:string  = 'ANGULAR läuft auf der Version : '+VERSION.major;
  initailtext = ' Willkommen hier soll der qr Code generiert werden';
  opts = {
    errorCorrectionLevel: 'H',
    type: 'image/jpeg',
    quality: 0.3,
    margin: 1,
    color: {
      dark:"#010599FF",
      light:"#FFBF60FF"
    }
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  inputchange(){
    //console.log(this.text);
    
    var inputText:any = document.getElementById('inputText');
    console.log(inputText.value);
    
    //this.openWin();
  }
  

  private qrfunction(value: any) {
    QRCode.toDataURL(value,this.opts)
      .then(url => {
        console.log(url);
      })
      .catch(err => {
        console.log(err)
      });
  }
  private openWin()
  {
    window.print();
    /** 
    var myWindow=window.open('','','width=2000,height=1000');
    myWindow.document.write(document.documentElement.innerHTML);
    myWindow.document.close(); //missing code
    myWindow.focus();
    myWindow.print(); 

    */
  }
}
