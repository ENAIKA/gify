import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GifyComponent } from './gify.component';

describe('GifyComponent', () => {
  let component: GifyComponent;
  let fixture: ComponentFixture<GifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
