import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit {
    creditCardForm: FormGroup;
    expMonths: string[];
    expYears: string[];

    _isStoreCard: Boolean = false;

    progressCount: number = 1;
    progressValues = [];
    progressLength: number = 0;

    spinnerShow: Boolean = false;
    successShow: Boolean = false;

    constructor(private cardForm: FormBuilder) {
    }

    inputEmail($event) {
        if ($event == 'test@gmail.com') {
            this.creditCardForm.controls.cardNumber.setValue('1234567899990000');
            this.creditCardForm.controls.expMonth.setValue('07');
            this.creditCardForm.controls.expYear.setValue('19');
            this.progressCount = 100;
        }
    }

    // Store card from email
    storeCard() {
        this._isStoreCard = !this._isStoreCard;
        if(this._isStoreCard) {
            this.creditCardForm.controls.cardNumber.disable();
            this.creditCardForm.controls.expMonth.disable();
            this.creditCardForm.controls.expYear.disable();
            this.creditCardForm.controls.email.enable();
        } else {
            this.creditCardForm.controls.cardNumber.enable();
            this.creditCardForm.controls.expMonth.enable();
            this.creditCardForm.controls.expYear.enable();
            this.creditCardForm.controls.email.disable();
        }
    }

    // Initialization form
    private initForm(): void {
        this.creditCardForm = this.cardForm.group({
            cardNumber: [null, [
                Validators.required,
                Validators.pattern(/^[0-9]{16}$/),
                Validators.minLength(16),
                Validators.maxLength(16),
            ]],
            expMonth: [null, [
                Validators.required,
            ]],
            expYear: [null, [
                Validators.required,
            ]],
            cvvCode: [null, [
                Validators.required,
                Validators.pattern(/^[0-9]{3}$/),
                Validators.minLength(3),
                Validators.maxLength(3),
            ]],
            email: [null, [
                Validators.required,
                Validators.pattern(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/),
            ]],
        });
        this.creditCardForm.controls.email.disable();
    }

    // Counter for progressbar
    counterProgressBar(val) {
        this.progressLength = 0;
        this.progressValues = Object.values(val);

        if(!this._isStoreCard) {
            for (let item of this.progressValues) {
                if (item != null) {
                    this.progressLength += item.length * 4.5;
                }
            }
        }

        this.progressCount = this.progressLength;
    }

    // Submitting form
    onSubmit() {
        this.spinnerShow = true;

        setTimeout(()=>{
            this.spinnerShow = false;
            this.successShow = true;
            this.creditCardForm.reset();
        },2000);
    }

    ngOnInit() {
        this.expMonths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.expYears = ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
        this.initForm();

        // Subscribing to form changing for counter progressbar
        this.creditCardForm.valueChanges.subscribe(val => this.counterProgressBar(val));
    }
}
