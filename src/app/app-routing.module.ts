import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassComponent } from './ADMIN/class/class.component';
import { SectionComponent } from './ADMIN/section/section.component';
import { CategoryComponent } from './ADMIN/category/category.component';
import { ReligionComponent } from './ADMIN/religion/religion.component';
import { HouseComponent } from './ADMIN/house/house.component';
import { BusComponent } from './ADMIN/bus/bus.component';
import { StudentAdmissionComponent } from './ADMIN/+student/student-admission/student-admission.component';
import { StudentsListComponent } from './ADMIN/+student/students-list/students-list.component';
import { SubjectComponent } from './ADMIN/subject/subject.component';
import { ExamComponent } from './ADMIN/exam/exam.component';
import { AssingedSubjectComponent } from './ADMIN/assinged-subject/assinged-subject.component';
import { ExamScheduleComponent } from './ADMIN/exam-schedule/exam-schedule.component';


const routes: Routes = [
  { path: '', redirectTo: 'class',pathMatch: 'full'},
  { path: 'class', component: ClassComponent},
  { path: 'section', component: SectionComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'religion', component: ReligionComponent},
  { path: 'house', component: HouseComponent},
  { path: 'bus', component: BusComponent},
  { path: 'subject', component: SubjectComponent},
  { path: 'assinged-subject', component: AssingedSubjectComponent},
  { path: 'exam', component: ExamComponent},
  { path: 'exam-schedule', component: ExamScheduleComponent},
  { path: 'student-admission', component: StudentAdmissionComponent},
  { path: 'students-list', component: StudentsListComponent},
  { path: '**', redirectTo: 'class',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
