import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  userId = '';
  password = '';

  constructor(
    private activeModal: NgbActiveModal,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.activeModal.close();
  }

  onSubmit(): void {
    const result = this.loginService.loginDoctor(this.userId, this.password);
    if (result) {
      this.activeModal.close();
    }
  }

}
