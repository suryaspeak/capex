import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinglegraphPage } from './singlegraph.page';

describe('SinglegraphPage', () => {
  let component: SinglegraphPage;
  let fixture: ComponentFixture<SinglegraphPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglegraphPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinglegraphPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
