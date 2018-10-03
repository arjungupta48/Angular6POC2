import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, AppModule ],
      declarations: [ ],
    }).compileComponents();
  }));
  it('should create the app component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
