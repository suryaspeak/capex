import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotdetailsPage } from './notdetails.page';

describe('NotdetailsPage', () => {
  let component: NotdetailsPage;
  let fixture: ComponentFixture<NotdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
