// Angular
import { Component } from '@angular/core';

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { ActionSheetController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';

// App
// import { BoilerPage } from "../boiler/boiler";

@IonicPage
({
    name: "new",
    segment: "new"
})
@Component
({
    selector: 'page-new',
    templateUrl: 'new.html',
})
export class NewPage
{

    photos : Array<string>;

    constructor(public controller: NavController,
                public params: NavParams,
                public imagePicker: ImagePicker,
                public actionSheetCtrl: ActionSheetController,
                public camera: Camera,
                public cropService: Crop) { }

    presentActionSheet()
    {
        let actionSheet = this.actionSheetCtrl.create
        ({
            title: 'Choose or take a picture',

            buttons:
            [
                { text: 'Take a picture',
                  handler: () => { this.takePicture(); }},

                { text: 'Choose pictures',
                  handler: () => { this.openImagePicker(); }}
            ]
        });

      actionSheet.present();
    }

    openImagePicker()
    {
        let options = { maximumImagesCount: 5 }
        this.photos = new Array<string>();

        this.imagePicker.getPictures(options).then
        ((results) =>
        {
            this.reduceImages(results).then(() => { console.log('all images cropped!!'); });
        },

        (err) => { console.log(err) });
    }

    reduceImages(selected_pictures: any) : any
    {
        return selected_pictures.reduce((promise: any, item: any) =>
        {
            return promise.then((result) =>
            {
                return this.cropService.crop(item, {quality: 75}).then(cropped_image => this.photos.push(cropped_image));
            });
        },

        Promise.resolve());
    }

    takePicture()
    {
        let options = { quality: 100,
                        correctOrientation: true };

      this.camera.getPicture(options).then((data) =>
      {
          this.photos = new Array<string>();

          this.cropService.crop(data, {quality: 75}).then((newImage) =>
          {
              this.photos.push(newImage);
          },

          error => console.error("Error cropping image", error));

      },

      function(error) { console.log(error); });
    }

}
