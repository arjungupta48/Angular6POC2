import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionComponent } from './distribution.component';

import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';

describe('DistributionComponent', () => {
  let component: DistributionComponent;
  let fixture: ComponentFixture<DistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, AppModule ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create distribution component', () => {
    expect(component).toBeTruthy();
  });
});
