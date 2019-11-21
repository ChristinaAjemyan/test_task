import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../shared/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  todo;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit(data) {
    data = this.form.value;
    this.dataService.postData(data).subscribe(d => {
      console.log(d);
      localStorage.setItem('data', JSON.stringify(d));


    });
    this.form.reset();
    this.router.navigate(['todo']);
   ;
  }
}
