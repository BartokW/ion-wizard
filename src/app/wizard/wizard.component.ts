import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnInit, AfterViewInit {
  @ViewChild('slidesReference')
  slidesRef: IonSlides;
  slides: IonSlides;
  isFirst = true;
  isLast = true;
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
    // effect: 'flip',
  };

  constructor(private modalController: ModalController) {}

  async ngAfterViewInit(): Promise<void> {
    //console.log(this.slidesRef);
    if (this.slidesRef) {
      console.log('wiz init');
      this.slides = this.slidesRef;
      //this.slides.lockSwipes(true);
      await this.slides.update();
      await this.updateFirstLast();
    }
  }
  async updateFirstLast() {
    this.isFirst = await this.slidesRef.isBeginning();
    this.isLast = await this.slidesRef.isEnd();
  }

  ngOnInit() {
    /* this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      // allowTouchMove: false,
    };*/
    // console.log(this.slides);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      // dismissed: true,
    });
  }
  prev() {
    //console.log(this.slidesRef);
    //this.slides.lockSwipes(false);
    this.slides.slidePrev();
    //this.slides.lockSwipes(true);
    this.updateFirstLast();
  }

  next() {
    //this.slides.lockSwipes(false);
    this.slides.slideNext();
    //this.slides.lockSwipes(true);
    this.updateFirstLast();
  }
}
