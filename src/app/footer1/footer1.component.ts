import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceCallsService } from '../service-calls.service';
declare var $: any;
@Component({
  selector: "app-footer1",
  templateUrl: "./footer1.component.html",
  styleUrls: ["./footer1.component.css"]
})
export class Footer1Component implements OnInit {
  questionForm: FormGroup;
  show: boolean = false;
  constructor(private question: FormBuilder, private service_api: ServiceCallsService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.questionForm = this.question.group({
      name: ["", Validators.required],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      questions: ["", [Validators.required]]
    });
  }
  onsubmit() {
    console.log("form value", this.questionForm.value);
    // this.questionForm.reset(); 




    // $("#myModal").modal("hide");
    if (this.questionForm.valid) {
      console.log("form value", this.questionForm.value);
      this.service_api.postServer("sendQuestionMail", this.questionForm.value).subscribe((data: any) => {
        console.log(data);
        this.show = true;
        this.questionForm.reset();
      })
    } else {
      console.log("---->", Object.keys(this.questionForm.controls))
      let lng = Object.keys(this.questionForm.controls)
      for (let i = 0; i < lng.length; i++) {

        if (this.questionForm.controls[lng[i]].status == 'INVALID') {
          this.questionForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }
  }
  modalClose() {
    this.show = false;
    this.questionForm.reset();
    $("#myModal").modal("hide");
  }

}
