import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YearselectPage } from './yearselect.page';

describe('YearselectPage', () => {
  let component: YearselectPage;
  let fixture: ComponentFixture<YearselectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearselectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YearselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
