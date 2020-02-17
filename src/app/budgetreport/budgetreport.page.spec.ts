import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BudgetreportPage } from './budgetreport.page';

describe('BudgetreportPage', () => {
  let component: BudgetreportPage;
  let fixture: ComponentFixture<BudgetreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
