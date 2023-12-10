import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilacoinListComponent } from './pilacoin-list.component';

describe('PilacoinListComponent', () => {
  let component: PilacoinListComponent;
  let fixture: ComponentFixture<PilacoinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilacoinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilacoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
