import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contact = {mail:'a', subject:'b', content:'c'};
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private ingredientService: IngredientService,
    private router: Router  
    ){
    this.contactForm = fb.group({
      mail: fb.control(this.contact.mail, Validators.required),
      subject: fb.control(this.contact.subject, Validators.required),
      content: fb.control(this.contact.content, [Validators.required, Validators.minLength(15)])
    });
  }

  save() {
    this.contact = this.contactForm.value;
    console.log(this.contactForm);
    console.log(this.contact);
    //this.contactService.create(this.contact).subscribe(
    //  contact => this.router.navigate(['/pizzas'])
    //  )
  }

  ngOnInit() {
  }

}
