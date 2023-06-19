import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandeirasComponent } from './bandeiras.component';

describe('BandeirasComponent', () => {
  let component: BandeirasComponent;
  let fixture: ComponentFixture<BandeirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BandeirasComponent]
    });
    fixture = TestBed.createComponent(BandeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
