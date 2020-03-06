import { Component, OnInit } from "@angular/core";
import { ErrorMessageDialogComponent } from "src/app/COMMON/error-message-dialog/error-message-dialog.component";
import { AdminService } from "../services/admin.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-exam-schedule",
  templateUrl: "./exam-schedule.component.html",
  styleUrls: ["./exam-schedule.component.css"]
})
export class ExamScheduleComponent implements OnInit {
  classList: object[];
  spinner: boolean = false;
  classWithExam: object[];
  message: string;
  examList: object[];
  constructor(private adminService: AdminService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getClass();
    this.getClassWithExam();
  }

  // function to get class list
  getClass() {
    this.adminService.getClass().subscribe(response => {
      if (response["status"] === true) {
        this.classList = response["data"];
        this.spinner = true;
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // function to get all exam
  getExam() {
    this.adminService.getExam().subscribe(response => {
      if (response["status"] === true) {
        this.examList = response["data"];
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // function to get class with exam
  getClassWithExam() {
    this.adminService.getClassWithExam().subscribe(response => {
      if (response["status"] === true) {
        this.classWithExam = response["data"];
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // function to remove exam from class
  removeExam(classId, examId) {
    let examDetail = {
      classId: classId,
      examId: examId
    };
    this.adminService.removeExam(examDetail).subscribe(response => {
      if (response["status"] === true) {
        this.getClass();
        this.getClassWithExam();
        this.openDialog(response["message"]);
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // Error message dialog
  openDialog(errorMessage: string) {
    const dialogRef = this.dialog.open(ErrorMessageDialogComponent, {
      width: "750px",
      data: { message: errorMessage }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Class Added");
    });
  }
}
