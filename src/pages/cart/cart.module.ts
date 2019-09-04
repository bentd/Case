import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CartPage } from "./cart";
import { BookCardModule } from "../../elements/book/book.module";


@NgModule
({
    declarations:
    [
        CartPage,
    ],

    imports:
    [
        BookCardModule,
        IonicPageModule.forChild(CartPage),
    ],
})
export class CartPageModule { }
