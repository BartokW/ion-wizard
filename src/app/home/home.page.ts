import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message: string;
  constructor(private modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: WizardComponent,
      cssClass: 'my-custom-class',
      swipeToClose: false,
      backdropDismiss: false,
      showBackdrop: true,
      componentProps: {
        firstName: 'Bob',
      },
    });

    modal.onDidDismiss().then((returnedData) => {
      this.message = returnedData.data.message;
    });

    return await modal.present();
  }
}
