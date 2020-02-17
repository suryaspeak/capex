import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetgroupPage } from './assetgroup.page';

describe('AssetgroupPage', () => {
  let component: AssetgroupPage;
  let fixture: ComponentFixture<AssetgroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetgroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetgroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
