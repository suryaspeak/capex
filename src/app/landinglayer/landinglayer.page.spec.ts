import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandinglayerPage } from './landinglayer.page';

describe('LandinglayerPage', () => {
  let component: LandinglayerPage;
  let fixture: ComponentFixture<LandinglayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandinglayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandinglayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
