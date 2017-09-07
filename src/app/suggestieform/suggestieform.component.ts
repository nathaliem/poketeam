import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-suggestieform',
  templateUrl: './suggestieform.component.html',
  styleUrls: ['./suggestieform.component.css']
})
export class SuggestieformComponent implements OnInit {
   @Output() submitted = new EventEmitter<{name: string, suggestion: string}>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
      console.log('submitted');
      // In theory I can call the function from the SuggestiesService here
      // But I'll call an EventEmitter just because :)
      this.submitted.emit({
          name: form.value.nameField,
          suggestion: form.value.suggestionField
      })
      form.resetForm();
  }

}
