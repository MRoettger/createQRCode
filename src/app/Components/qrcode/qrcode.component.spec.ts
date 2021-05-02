import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRTestComponent } from './qrcode.component';

describe('QRTestComponent', () => {
  let component: QRTestComponent;
  let fixture: ComponentFixture<QRTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QRTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QRTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
