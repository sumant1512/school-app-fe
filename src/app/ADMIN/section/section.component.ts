import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AdminService } from "../services/admin.service";
import { MatDialog } from "@angular/material";
import { ErrorMessageDialogComponent } from "src/app/COMMON/error-message-dialog/error-message-dialog.component";
import { AssignSectionDialogComponent } from "../assign-section-dialog/assign-section-dialog.component";
export interface MessageDialog {
  message: string;
}

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.css"]
})
export class SectionComponent implements OnInit {
  addSectionForm: FormGroup;
  allSections: object[];
  spinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private dialog: MatDialog
  ) {
    this.addSectionForm = this.fb.group({
      sectionName: ["", Validators.required]
    });
  }

  ngOnInit() {
    this.getSections(); // to get section list on page load
  }

  // function to add section
  addSection() {
    var sectionDetail = this.addSectionForm.value;
    this.adminService.addSection(sectionDetail).subscribe(response => {
      if (response["status"] === true) {
        this.allSections = response["data"];
        this.openDialog(response["message"]);
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // function to get section list
  getSections() {
    this.adminService.getSection().subscribe(response => {
      if (response["status"] === true) {
        this.allSections = response["data"];
        this.spinner = true;
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // function to delete section
  deleteSection(sectionId) {
    var sectionDetail = {
      sectionId: sectionId
    };
    this.adminService.deleteSection(sectionDetail).subscribe(response => {
      if (response["status"] === true) {
        this.allSections = response["data"];
        this.openDialog(response["message"]);
      } else {
        this.openDialog(response["message"]);
      }
    });
  }

  // function to assign section to class
  assignSection(sectionId, sectionName) {
    const dialogRef = this.dialog.open(AssignSectionDialogComponent, {
      width: "500px",
      data: {
        section_id: sectionId,
        section_name: sectionName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Assign section closed");
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
