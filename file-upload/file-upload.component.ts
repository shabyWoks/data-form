import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input('input') obj;

  errors: Array<string> = [];
  @Input() projectId: number = 0;
  @Input() sectionId: number = 0;
  @Input('allowable-extensions') fileExt: string;
  @Input('max-files') maxFiles: number;
  @Input('max-file-size') maxSize: number; // 5MB
  @Output() uploadStatus = new EventEmitter();
  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  onFileUpload(event) {
    this.errors = [];
    this.errors = this.fileUploadService.saveFiles(event, this.maxFiles, this.fileExt, this.maxSize, this.uploadStatus);
  }
}
