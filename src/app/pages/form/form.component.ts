import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Myuser } from '../../model/user_data';
import { IUser } from '../../model/IUser';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private userForm: FormGroup;
  private myuserClass: Myuser;
  private userData: IUser;
  private editable_mode = false;
  titleAlert = 'This field is required';

  constructor() {
  }

  ngOnInit() {
    this.myuserClass = new Myuser();
    this.userData = this.myuserClass.getUser();
    this.setData();
  }

  setData() {
    this.userForm = new FormGroup({
      userid: new FormControl(this.userData.id, Validators.required),
      name: new FormControl(this.userData.name, Validators.required),
      username: new FormControl(this.userData.username, Validators.required),
      emailid: new FormControl(this.userData.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.userData.phone, Validators.required),
      website: new FormControl(this.userData.website, Validators.required),
      address: new FormGroup({
        street: new FormControl(this.userData.address.street, Validators.required),
        suite: new FormControl(this.userData.address.suite, Validators.required),
        city: new FormControl(this.userData.address.city, Validators.required),
        zipcode: new FormControl(this.userData.address.zipcode, Validators.required)
      }),
      company: new FormGroup({
        company_name: new FormControl(this.userData.company.name, Validators.required),
        company_catch_pharse: new FormControl(this.userData.company.catchPhrase, Validators.required),
        company_bs: new FormControl(this.userData.company.bs, Validators.required)
      }),
    });
    this.userForm.disable();
  }

  get userid() { return this.userForm.get('userid'); }
  get name() { return this.userForm.get('name'); }
  get username() { return this.userForm.get('username'); }
  get emailid() { return this.userForm.get('emailid'); }
  get phone() { return this.userForm.get('phone'); }
  get street() { return this.userForm.get('address').get('street'); }
  get suite() { return this.userForm.get('address').get('suite'); }
  get city() { return this.userForm.get('address').get('city'); }
  get zipcode() { return this.userForm.get('address').get('zipcode'); }
  get company_name() { return this.userForm.get('company').get('company_name'); }
  get company_catch_pharse() { return this.userForm.get('company').get('company_catch_pharse'); }
  get company_bs() { return this.userForm.get('company').get('company_bs'); }

  public editFrom() {
    this.userForm.enable();
    this.editable_mode = true;
  }

  public updateForm(User) {
    this.userForm.disable();
    this.editable_mode = false;
  }

  public clearForm() {
    this.userForm.reset();
  }

  public cancelForm() {
    this.userForm.disable();
    this.editable_mode = false;
    this.setData();
  }


}
