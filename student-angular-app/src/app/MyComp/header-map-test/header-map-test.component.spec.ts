import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMapTestComponent } from './header-map-test.component';

describe('HeaderMapTestComponent', () => {
  let component: HeaderMapTestComponent;
  let fixture: ComponentFixture<HeaderMapTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMapTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMapTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
