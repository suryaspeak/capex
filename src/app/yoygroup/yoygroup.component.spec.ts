import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YoygroupComponent } from './yoygroup.component';

describe('YoygroupComponent', () => {
  let component: YoygroupComponent;
  let fixture: ComponentFixture<YoygroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoygroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YoygroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
