import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrapjackComponent } from './crapjack.component';

describe('CrapjackComponent', () => {
  let component: CrapjackComponent;
  let fixture: ComponentFixture<CrapjackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrapjackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrapjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
