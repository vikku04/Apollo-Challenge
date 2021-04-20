import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  doctorDetails: any;
  patientList: any;

  constructor(
    private modalService: NgbModal,
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.openLoginModal();
  }

  openLoginModal(): void {
    const modalRef = this.modalService.open(LoginModalComponent, { backdrop: 'static' });
    modalRef.closed.subscribe(() => {
      this.isLoggedIn = true;
      this.getLoggedInDoctorDetails();
      this.getPatientList();
    });
  }

  getLoggedInDoctorDetails(): void {
    this.doctorDetails = this.loginService.getDoctorDetails();
  }

  getPatientList(): void {
    this.patientList = this.userService.getPatientList(this.doctorDetails.id);
  }

  logOutDoctor(): void {
    if (this.loginService.logoutDoctor()) {
      this.isLoggedIn = false;
      this.openLoginModal();
    }
  }

  ngOnDestroy(): void {
    this.modalService.dismissAll();
  }

}
