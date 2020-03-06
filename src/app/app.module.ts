import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./COMMON/header/header.component";
import { AngularMaterialModule } from "./COMMON/angular-material.module";
import { ClassComponent } from "./ADMIN/class/class.component";
import { SectionComponent } from "./ADMIN/section/section.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorMessageDialogComponent } from "./COMMON/error-message-dialog/error-message-dialog.component";
import { AssignSectionDialogComponent } from "./ADMIN/assign-section-dialog/assign-section-dialog.component";
import { CategoryComponent } from "./ADMIN/category/category.component";
import { ReligionComponent } from "./ADMIN/religion/religion.component";
import { HouseComponent } from "./ADMIN/house/house.component";
import { BusComponent } from "./ADMIN/bus/bus.component";
import { StudentAdmissionComponent } from './ADMIN/+student/student-admission/student-admission.component';
import { StudentsListComponent } from './ADMIN/+student/students-list/students-list.component';
import { SubjectComponent } from './ADMIN/subject/subject.component';
import { ExamComponent } from './ADMIN/exam/exam.component';
import { AssingedSubjectComponent } from './ADMIN/assinged-subject/assinged-subject.component';
import { ExamScheduleComponent } from './ADMIN/exam-schedule/exam-schedule.component';

@NgModule({
  declarations: [
    ErrorMessageDialogComponent,
    AssignSectionDialogComponent,
    AppComponent,
    HeaderComponent,
    ClassComponent,
    SectionComponent,
    CategoryComponent,
    ReligionComponent,
    HouseComponent,
    BusComponent,
    StudentAdmissionComponent,
    StudentsListComponent,
    SubjectComponent,
    ExamComponent,
    AssingedSubjectComponent,
    ExamScheduleComponent,
  ],
  entryComponents: [ErrorMessageDialogComponent, AssignSectionDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
