import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var QRCode: any;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QRTestComponent implements OnInit {

  InputControl = new FormControl('');
  text:string = 'www.google.de/search?q=test';
  URL:string= '';
  version: string = 'ANGULAR läuft auf der Version : ' + VERSION.major+'.' +VERSION.minor;

  initailtext:string = 'Willkommen beim Angular QR-Code-Generator';
  
  optionsQRCode = {
    errorCorrectionLevel: 'H',
    type: 'svg',
    width: 180,
    quality: 1,
    margin: 1,
    color: {
      dark: '#001a45',
      light: '#ffffff',
    },
  };
  private readonly defaultURL = 'www.google.de/search?q=test';

  constructor() {}

  ngOnInit(): void {
    this.URL = this.defaultURL
    this.fillImgTag(this.defaultURL);
    this.fillSvgTag(this.defaultURL);
    this.fillCanvasTag(this.defaultURL);
  }

  inputchange() {
    
    var inputOfElement: any = document.getElementById('inputText');
    if(inputOfElement.value){
    this.fillElements(inputOfElement.value);}
  }
  private fillElements(InputValue: any) {
    this.URL = InputValue;
    this.text = InputValue;
    this.fillImgTag(InputValue);
    this.fillSvgTag(InputValue);
    this.fillCanvasTag(InputValue);
  }

  randmonInput(){
    let output = ''; 
    for (let index = 0; index < 10; index++) {
      let number = 97+ Math.floor(Math.random() * 26);
      output+=String.fromCharCode(number);
     // console.log(number+" --> "+ String.fromCharCode(number));
    }
   output=  'www.google.de/search?q='+ output;
   this.fillElements(output);
  }

  private fillImgTag(value: any) {
    QRCode.toDataURL(value, this.optionsQRCode)
      .then((url) => {
        this.setElement(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  private fillSvgTag(value: any) {
    QRCode.toString(value, this.optionsQRCode)
      .then((url) => {
        this.setSVGElement(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  private fillCanvasTag(text: string) {
    QRCode.toCanvas(
      document.getElementById('canvas'),
      text,
      this.optionsQRCode,
      function (error) {
        if (error) console.error(error);
      }
    );
  }

  private setElement(url: string) {
    var t: any = document.getElementById('inputImage');
    t.src = url;
  }
  private setSVGElement(url: any) {
    document.getElementById('svgElement').innerHTML = url;
  }
  printQRCode() {
    var myWindow = window.open('', '', 'width=2000,height=1000');
    myWindow.document.write(
      `
      <style>
      body {font-family: Roboto, "Helvetica Neue", sans-serif;}
      </style><h1>Ausdruck QR-Code</h1>
      `+'<p>URL: '+this.URL+'</p>'+document.getElementById('svgElement').innerHTML);
    // hier könnte man noch HEAD ... setzten wenn gewünscht
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
  }
}
