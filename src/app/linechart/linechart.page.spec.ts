import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinechartPage } from './linechart.page';

describe('LinechartPage', () => {
  let component: LinechartPage;
  let fixture: ComponentFixture<LinechartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinechartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinechartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
