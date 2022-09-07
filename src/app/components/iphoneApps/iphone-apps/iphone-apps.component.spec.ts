import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneAppsComponent } from './iphone-apps.component';

describe('IphoneAppsComponent', () => {
  let component: IphoneAppsComponent;
  let fixture: ComponentFixture<IphoneAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IphoneAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
