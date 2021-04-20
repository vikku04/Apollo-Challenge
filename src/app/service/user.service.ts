import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjConstants } from '../constants/proj.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  doctorMap: any;
  patientList: any[] = [];

  constructor(
    private dateService: DatePipe,
    private toastrService: ToastrService
  ) {
    this.doctorMap = ProjConstants.DOCTOR_ID_MAP;
  }

  createAppointment(id: string, pName: string): void {
    const obj = {
      doctorId: id,
      patientName: pName,
      time: this.getTimeSlot(id)
    };
    this.patientList.push(obj);
  }

  getTimeSlot(id: string): string|null {
    let startMins = this.doctorMap[id].time - this.doctorMap[id].availableTime;
    const startHour = 0 + parseInt((startMins / 60).toString(), 10);
    startMins = (startMins % 60);
    let endMins = startMins + 20;
    const endHour = 0 + parseInt((endMins / 60).toString(), 10);
    endMins = (endMins % 60);
    const sDate = new Date();
    sDate.setHours(10 + startHour, startMins, 0, 0);
    const eDate = new Date();
    eDate.setHours(10 + endHour, endMins, 0, 0);
    this.doctorMap[id].availableTime -= 20;
    this.toastrService.success('Appointment booked successfully');
    return this.dateService.transform(sDate, 'hh:mm a') + ' - ' + this.dateService.transform(eDate, 'hh:mm a');
  }

  getAvailableTime(id: string): any {
    return this.doctorMap[id].availableTime;
  }

  getPatientList(id: string): any {
    return this.patientList.filter(data => data.doctorId === id);
  }
}
