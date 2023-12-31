import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzComponent } from './buzz.component';

describe('BuzzComponent', () => {
  let component: BuzzComponent;
  let fixture: ComponentFixture<BuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
