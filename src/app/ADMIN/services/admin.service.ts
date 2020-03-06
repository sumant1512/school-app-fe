import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  constructor(private http: HttpClient) {}

  // service for adding class
  addClass(classDetail) {
    return this.http.post("http://localhost:8080/addClass", classDetail);
  }

  // service for getting class
  getClass() {
    return this.http.get("http://localhost:8080/getClass");
  }

  // service for deleting class
  deleteClass(classDetail) {
    return this.http.post("http://localhost:8080/deleteClass", classDetail);
  }

  // service for adding exam
  addExam(examDetail) {
    return this.http.post("http://localhost:8080/addExam", examDetail);
  }

  // service for adding exam
  updateExam(examDetail) {
    return this.http.post("http://localhost:8080/updateExam", examDetail);
  }

  // service for getting exam
  getExam() {
    return this.http.get("http://localhost:8080/getExam");
  }

  // service for deleting exam
  deleteExam(examDetail) {
    return this.http.post("http://localhost:8080/deleteExam", examDetail);
  }

  // service for getting class with exam
  getClassWithExam() {
    return this.http.get("http://localhost:8080/getClassWithExam");
  }

  // service for assigning exam to class
  assignExam(examDetails) {
    return this.http.post("http://localhost:8080/assignExam", examDetails);
  }

  // service for removing exam from class
  removeExam(examDetails) {
    return this.http.post("http://localhost:8080/removeExam", examDetails);
  }

  // service for adding section
  addSection(sectionDetail) {
    return this.http.post("http://localhost:8080/addSection", sectionDetail);
  }

  // service for getting section list
  getSection() {
    return this.http.get("http://localhost:8080/getSection");
  }

  // service for deleting section
  deleteSection(sectionDetail) {
    return this.http.post("http://localhost:8080/deleteSection", sectionDetail);
  }

  // service for getting class with section
  getClassWithSection() {
    return this.http.get("http://localhost:8080/getClassWithSection");
  }

  // service for assigning section to class
  assignSection(classDetails) {
    return this.http.post("http://localhost:8080/assignSection", classDetails);
  }

  // service for removing section to class
  removeSection(sectionDetails) {
    return this.http.post(
      "http://localhost:8080/removeSection",
      sectionDetails
    );
  }

  // service to get section on the basis of selected class
  getSectionForClass(classDetail) {
    return this.http.post(
      "http://localhost:8080/getSectionForClass",
      classDetail
    );
  }

  // service for adding subject
  addSubject(subjectDetail) {
    return this.http.post("http://localhost:8080/addSubject", subjectDetail);
  }

  // service for getting subject list
  getSubject() {
    return this.http.get("http://localhost:8080/getSubject");
  }

  // service for deleting subject
  deleteSubject(subjectDetail) {
    return this.http.post("http://localhost:8080/deleteSubject", subjectDetail);
  }

  // service for adding exam
  updateSubject(subjectDetail) {
    return this.http.post("http://localhost:8080/updateSubject", subjectDetail);
  }

  // service for getting class with subject
  getClassWithSubject() {
    return this.http.get("http://localhost:8080/getClassWithSubject");
  }

  // service for assigning subject to class
  assignSubject(classDetails) {
    return this.http.post("http://localhost:8080/assignSubject", classDetails);
  }

  // service for removing subject to class
  removeSubject(subjectDetails) {
    return this.http.post(
      "http://localhost:8080/removeSubject",
      subjectDetails
    );
  }

  // service to get subject on the basis of selected class
  getSubjectForClass(classDetail) {
    return this.http.post(
      "http://localhost:8080/getSubjectForClass",
      classDetail
    );
  }

  // service for adding category
  addCategory(categoryDetail) {
    return this.http.post("http://localhost:8080/addCategory", categoryDetail);
  }

  // service for getting category list
  getCategory() {
    return this.http.get("http://localhost:8080/getCategory");
  }

  // service for deleting category
  deleteCategory(categoryDetail) {
    return this.http.post(
      "http://localhost:8080/deleteCategory",
      categoryDetail
    );
  }

  // service for adding religion
  addReligion(religionDetail) {
    return this.http.post("http://localhost:8080/addReligion", religionDetail);
  }

  // service for getting religion list
  getReligion() {
    return this.http.get("http://localhost:8080/getReligion");
  }

  // service for deleting religion
  deleteReligion(religionDetail) {
    return this.http.post(
      "http://localhost:8080/deleteReligion",
      religionDetail
    );
  }

  // service for adding house
  addHouse(houseDetail) {
    return this.http.post("http://localhost:8080/addHouse", houseDetail);
  }

  // service for getting House list
  getHouse() {
    return this.http.get("http://localhost:8080/getHouse");
  }

  // service for deleting House
  deleteHouse(houseDetail) {
    return this.http.post("http://localhost:8080/deleteHouse", houseDetail);
  }

  // service for adding Bus
  addBus(busDetail) {
    return this.http.post("http://localhost:8080/addBus", busDetail);
  }

  // service for getting Bus list
  getBus() {
    return this.http.get("http://localhost:8080/getBus");
  }

  // service for deleting Bus
  deleteBus(busDetail) {
    return this.http.post("http://localhost:8080/deleteBus", busDetail);
  }
}
