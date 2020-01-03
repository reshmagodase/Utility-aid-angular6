import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-footer1",
  templateUrl: "./footer1.component.html",
  styleUrls: ["./footer1.component.css"]
})
export class Footer1Component implements OnInit {
  questionForm: FormGroup;
  constructor(private question: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.questionForm = this.question.group({
      askname: [""],
      askphone: [""],
      askemail: [""],
      askquestions: [""]
    });
  }
  onsubmit() {
    console.log("form value", this.questionForm.value);
  }
}
