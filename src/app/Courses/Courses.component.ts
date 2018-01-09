import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './Courses.component.html',
  styleUrls: ['./Courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'List of courses';
  courses;
  email = 'me@example.com';

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  ngOnInit() {
  }

  onKeyUp() {
    console.log(this.email);
  }

}
