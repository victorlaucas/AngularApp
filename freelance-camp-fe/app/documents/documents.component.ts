import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "Content",
      file_url: 'http://google.com',
      updated_at: '10/18/17',
      image_url: 'http://google.com'
    },
    {
      title: "My Second Doc",
      description: "Content",
      file_url: 'http://google.com',
      updated_at: '10/18/17',
      image_url: 'http://google.com'
    },    
    {
      title: "My Last Doc",
      description: "Content",
      file_url: 'http://google.com',
      updated_at: '10/18/17',
      image_url: 'http://google.com'
    }
  ]
}