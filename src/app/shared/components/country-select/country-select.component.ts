import {
  Component,
  OnInit,
  Inject,
  Output,
  Input,
  OnDestroy,
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subject, Subscription } from "rxjs";
import { CountryModel } from "src/app/core/domain/bank.model";
import { RecipientModel } from "src/app/core/domain/recipient.model";
import { CountryService } from "src/app/core/services/modal-services/country.service";
import { StorageService } from "src/app/core/services/utils/storage.service";
import { countrySettings } from "../../utils/country.settings";

@Component({
  selector: "app-country-select",
  templateUrl: "./country-select.component.html",
  styleUrls: ["./country-select.component.scss"],
})
export class CountrySelectComponent implements OnInit, OnDestroy {
  visibility = true;
  countries: CountryModel[];
  viewTypes = countrySettings.viewTypes;
  subscriptions: Subscription[] = [];
  @Input() category: string;
  @Output() selectedCountry = new Subject<CountryModel>();
  selected: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: RecipientModel,
    private readonly countryService: CountryService,
    private readonly storageService: StorageService
  ) {
    this.countries = this.storageService.getData("countries");
  }

  ngOnInit(): void { }

  openCountries(): void {
    const modal = this.countryService.openCountry({
      selections: [],
      category: '',
      type: 'radio'
    }
    );
    this.subscriptions.push(
      modal.afterClosed().subscribe((data: CountryModel) =>{} )
    );
  }

  ngOnDestroy(): void {
    // const modal = this.countryService.openCountry(
    //   this.countries,
    //   this.category
    // );
    // this.subscriptions.push(
    //   modal.afterClosed().subscribe((data: CountryModel) => {
    //     this.countryService.openedStatus.next(false);
    //     this.visibility = true;
    //     this.selectedCountry.next(data);
    //   })
    // );
    // this.subscriptions.length &&
    //   this.subscriptions.forEach((value) => value && value.unsubscribe());
  }
}
