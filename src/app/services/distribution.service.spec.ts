import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionComponent } from '../distribution/distribution.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By} from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';

describe('DistributionComponent', () => {
  let component: DistributionComponent;
  let fixture: ComponentFixture<DistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, AppModule ],
      declarations: [ ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionComponent);
    component = fixture.componentInstance;
    component.distributions = [
      { "distributionId": 1, "fname": "Arjun", "lname": "Kasaudhan", "plan": "401K Plan", "ssn": "923-23-1177" },
      { "distributionId": 2, "fname": "Gaurav", "lname": "Srivastava", "plan": "AL2", "ssn": "923-23-2277" }
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call search function', () => {
    spyOn(component, 'search').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.debugElement.query(By.css('button')).triggerEventHandler('click', 1);
      fixture.detectChanges();
      expect(component.search).toHaveBeenCalled();
    });
  });
  it('should search distributions with id equal to 1', () => {
    spyOn(component, 'search').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.debugElement.query(By.css('button')).triggerEventHandler('click', 1);
      fixture.detectChanges();
      expect(component.distributions[0].distributionId).toBe(1);
    });
  });
  it('should search distributions and result should not be null', () => {
    spyOn(component, 'search').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.debugElement.query(By.css('button')).triggerEventHandler('click', 2);
      fixture.detectChanges();
      expect(component.distributions[0].distributionId).not.toEqual(null);
    });
  });
});
