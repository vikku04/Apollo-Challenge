import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-patient-modal',
  templateUrl: './patient-modal.component.html',
  styleUrls: ['./patient-modal.component.scss']
})
export class PatientModalComponent implements OnInit {

  patientName = '';
  doctorId: any;

  constructor(
    private activeModal: NgbActiveModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.activeModal.close();
  }

  onSubmit(): void {
    this.userService.createAppointment(this.doctorId, this.patientName);
    this.activeModal.close();
  }

}
