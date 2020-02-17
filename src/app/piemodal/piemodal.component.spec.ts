import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiemodalComponent } from './piemodal.component';

describe('PiemodalComponent', () => {
  let component: PiemodalComponent;
  let fixture: ComponentFixture<PiemodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiemodalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
