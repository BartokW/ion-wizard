import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
} from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit, AfterViewInit {
  @ViewChild(IonSlides) slides: IonSlides;
  @Input() firstName: string;
  isFirst = true;
  isLast = true;
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
  };

  constructor(private modalController: ModalController) {}

  async ngAfterViewInit(): Promise<void> {
    if (this.slides) {
      console.log('wiz init');
      await this.slides.update();
      await this.updateFirstLast();
    }
  }
  async updateFirstLast() {
    this.isFirst = await this.slides.isBeginning();
    this.isLast = await this.slides.isEnd();
  }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      message: `Hello ${this.firstName}`,
    });
  }
  prev() {
    this.slides.slidePrev();
    this.updateFirstLast();
  }

  next() {
    this.slides.slideNext();
    this.updateFirstLast();
  }
}
