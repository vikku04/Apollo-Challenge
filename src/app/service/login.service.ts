import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ProjConstants } from '../constants/proj.constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginDetails: any;
  idNameMap: any;
  loggedInDoctorDetails: {
    id: any,
    name: any
  } = {
    id: '',
    name: ''
  };

  constructor(
    private toastrService: ToastrService
  ) {
    this.loginDetails = ProjConstants.LOGIN_DETAILS_MAP;
    this.idNameMap = ProjConstants.DOCTOR_ID_NAME_MAP;
  }

  loginDoctor(userId: string, password: string): boolean {
    if (!(this.loginDetails[userId] === undefined || this.loginDetails[userId] === null)) {
      if (this.loginDetails[userId]['userId'] === userId && this.loginDetails[userId]['password'] === password) {
        this.loggedInDoctorDetails.id = userId;
        this.loggedInDoctorDetails.name = this.idNameMap[userId];
        this.toastrService.success('Logged in Successfully!');
        return true;
      }
    }
    this.toastrService.error('Please enter correct details.');
    return false;
  }

  logoutDoctor(): boolean {
    this.loggedInDoctorDetails.id = '';
    this.loggedInDoctorDetails.name = '';
    this.toastrService.success('Logged out Successfully!');
    return true;
  }

  getDoctorDetails(): any {
    return this.loggedInDoctorDetails;
  }
}
