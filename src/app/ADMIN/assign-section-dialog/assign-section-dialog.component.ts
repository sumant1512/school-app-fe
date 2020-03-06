import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { AssignToClass } from "../assign-section-dialog/assign-dialog.type";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from "../services/admin.service";
import { ErrorMessageDialogComponent } from "src/app/COMMON/error-message-dialog/error-message-dialog.component";

@Component({
  selector: "app-assign-section-dialog",
  templateUrl: "./assign-section-dialog.component.html",
  styleUrls: ["./assign-section-dialog.component.css"]
})
export class AssignSectionDialogComponent implements OnInit {
  assignForm: FormGroup;
  classList: object[];
  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AssignSectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public assign: AssignToClass
  ) {}

  ngOnInit() {
    this.assignForm = new FormGroup({
      
    })
    this.getClass();
  }

  // function to get class list
  getClass() {
    this.adminService.getClass().subscribe(response => {
      if (response["status"] === true) {
        this.classList = response["data"];
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // function to assign section to class
  assignSection() {
    let classDetail = {
      section: this.assign,
      selectedClass: this.assignForm.value.selectedClass
    };
    console.log(classDetail);
    this.adminService.assignSection(classDetail).subscribe(response => {
      if (response["status"] === true) {
        this.dialogRef.close();
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // Error message
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
