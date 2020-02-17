import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrpahmodalPage } from './grpahmodal.page';

describe('GrpahmodalPage', () => {
  let component: GrpahmodalPage;
  let fixture: ComponentFixture<GrpahmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpahmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrpahmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
