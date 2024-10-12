import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCreateAccountComponent } from './seller-create-account.component';

describe('SellerCreateAccountComponent', () => {
  let component: SellerCreateAccountComponent;
  let fixture: ComponentFixture<SellerCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerCreateAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
