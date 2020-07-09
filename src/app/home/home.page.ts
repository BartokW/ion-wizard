import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: WizardComponent,
      cssClass: 'my-custom-class',
      swipeToClose: false,
      backdropDismiss: false,
      showBackdrop: true,
    });
    return await modal.present();
  }
}
