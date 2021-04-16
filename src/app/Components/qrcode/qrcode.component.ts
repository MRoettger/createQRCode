import { Component, OnInit, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var QRCode: any;

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss'],
})
export class QRCodeComponent implements OnInit {
  text = 'www.google.de/search?q=ovSoftware';
  version: string = 'ANGULAR läuft auf der Version : ' + VERSION.major;
  initailtext = ' Willkommen hier soll der qr Code generiert werden';
  
  optionsQRCode = {
    errorCorrectionLevel: 'H',
    type: 'svg',
    width: 600,
    quality: 0.1,
    margin: 1,
    color: {
      dark: '#001a45',
      light: '#ffffff',
    },
  };
  constructor() {}

  ngOnInit(): void {
    this.fillImgTag('https://desk.ovsoftware.com/dashboard');
    this.fillSvgTag('https://desk.ovsoftware.com/dashboard');
    this.fillCanvasTag('https://desk.ovsoftware.com/dashboard');
  }
  inputchange() {
    var inputOfElement: any = document.getElementById('inputText');
    this.fillImgTag(inputOfElement.value);
    this.fillSvgTag(inputOfElement.value);
    this.fillCanvasTag(inputOfElement.value);
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
    myWindow.document.write(document.getElementById('svgElement').innerHTML);
    // hier könnte man noch HEAD ... setzten wenn gewünscht
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
  }
}
