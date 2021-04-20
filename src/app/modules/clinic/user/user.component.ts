import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/service/user.service';
import { ProjConstants } from './../../../constants/proj.constant';
import { PatientModalComponent } from './patient-modal/patient-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  clinicData: any[] = [];
  doctorMap: any;

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.clinicData = ProjConstants.CLINIC_DATA;
    this.doctorMap = ProjConstants.DOCTOR_ID_MAP;
  }

  getAvailableTime(id: string): any {
    return this.userService.getAvailableTime(id);
  }

  getDoctorRate(id: string): any {
    return this.doctorMap[id].rate;
  }

  bookAppointment(id: string): any {
    const modalRef = this.modalService.open(PatientModalComponent, {backdrop: 'static'});
    modalRef.componentInstance.doctorId = id;
  }

}
