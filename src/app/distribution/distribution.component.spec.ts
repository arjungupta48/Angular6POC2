import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionComponent } from './distribution.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By} from '@angular/platform-browser';

describe('DistributionComponent', () => {
  let component: DistributionComponent;
  let fixture: ComponentFixture<DistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionComponent);
    component = fixture.componentInstance;
    component.distributions = [
      { "distributionId": 1, "fname": "Arjun", "lname": "Kasaudhan", "plan": "401K Plan", "ssn": "923-23-1177" },
      { "distributionId": 2, "fname": "Gaurav", "lname": "Srivastava", "plan": "AL2", "ssn": "923-23-2277" },
      { "distributionId": 3, "fname": "Ratan", "lname": "Singh", "plan": "Roth IRA", "ssn": "923-23-3377" },
      { "distributionId": 4, "fname": "Arpita", "lname": "Jain", "plan": "401K Plan", "ssn": "923-23-4477" },
      { "distributionId": 5, "fname": "Aakansha", "lname": "Chhabra", "plan": "401K Plan", "ssn": "923-23-5577" },
      { "distributionId": 6, "fname": "Vinisha", "lname": "Chhetri", "plan": "401K Plan", "ssn": "924-23-1177" },
      { "distributionId": 7, "fname": "Archana", "lname": "Bisht", "plan": "AL2", "ssn": "924-23-2277" },
      { "distributionId": 8, "fname": "Lookmaan", "lname": "Yadav", "plan": "Roth IRA", "ssn": "924-23-3377" },
      { "distributionId": 9, "fname": "Nayana", "lname": "Kapadia", "plan": "401K Plan", "ssn": "924-23-4477" },
      { "distributionId": 10, "fname": "Isha", "lname": "Chakraboraty", "plan": "401K Plan", "ssn": "924-23-5577" },
      { "distributionId": 11, "fname": "Anisha", "lname": "Singh", "plan": "401K Plan", "ssn": "925-25-1177" },
      { "distributionId": 12, "fname": "Himali", "lname": "Gupta", "plan": "AL2", "ssn": "925-25-2277" },
      { "distributionId": 13, "fname": "Sandesh", "lname": "Naik", "plan": "Roth IRA", "ssn": "925-25-3377" },
      { "distributionId": 14, "fname": "Santhosh", "lname": "Kashyap", "plan": "401K Plan", "ssn": "925-25-4477" },
      { "distributionId": 15, "fname": "Pruthishree", "lname": "Reddy", "plan": "401K Plan", "ssn": "925-25-5577" }
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
  it('should search distributions and output should not be null', () => {
    spyOn(component, 'search').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.debugElement.query(By.css('button')).triggerEventHandler('click', 2);
      fixture.detectChanges();
      expect(component.distributions[0].distributionId).not.toBe(null);
    });
  });
});
