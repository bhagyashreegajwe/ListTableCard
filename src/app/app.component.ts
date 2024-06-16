import { Component } from '@angular/core';
import { ItableData } from './shared/models/tableData.interface';
import { cardData } from './shared/const/card';
import { IcardData } from './shared/models/cardData.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ListTableCard'

  skillArr: Array<string> = ["Html", "Css", "Javascript", "Angular", "Sass", "Node"]

  tableData: Array<ItableData> = [
    {
      'fname': 'John',
      'lname': 'Doe',
      'contact': '1245678954',
      'email': 'johndoe@gmail.com'
    },
    {
      'fname': 'Joe',
      'lname': 'Root',
      'contact': '4124567895',
      'email': 'joeroot@gmail.com'
    }, 
    {
      'fname': 'May',
      'lname': 'Doe',
      'contact': '5678954124',
      'email': 'maydoe@gmail.com'
    }, 
    {
      'fname': 'June',
      'lname': 'Doe',
      'contact': '7895412456',
      'email': 'junedoe@gmail.com'
    }, 
    {
      'fname': 'October',
      'lname': 'Doe',
      'contact': '8954124567',
      'email': 'octdoe@gmail.com'
    }, 
    {
      'fname': 'Hermaine',
      'lname': 'Doe',
      'contact': '9541245678',
      'email': 'herdoe@gmail.com'
    }
  ];

  cardArr : Array<IcardData> = cardData

}
