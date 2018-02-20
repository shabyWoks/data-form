import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadService {

  errors: Array<string> =[];

  constructor() { }

  saveFiles(files, maxFiles, fileExt, maxSize) {
    this.errors = []; 
    // Validate file size and allowed extensions
    if (files.length > 0 && (!this.isValidFiles(files, maxFiles, fileExt, maxSize))) {
      //this.uploadStatus.emit(false);
      // console.log("hello1");
      // console.log(this.errors);
      return this.errors;
    }
    if (files.length > 0) {
      // console.log("hello2");
      // let formData: FormData = new FormData();
      // for (var j = 0; j < files.length; j++) {
      //   formData.append("file[]", files[j], files[j].name);
      // }
      // var parameters = {
      //   projectId: this.projectId,
      //   sectionId: this.sectionId
      // }
      // this.fileService.upload(formData, parameters)
      //     .subscribe(
      //     success => {
      //       this.uploadStatus.emit(true);
      //       console.log(success)
      //     },
      //     error => {
      //         this.uploadStatus.emit(true);
      //         this.errors.push(error.ExceptionMessage);
      //     }) 
    }
  }

  private isValidFiles(files, maxFiles, fileExt, maxSize) {
    // Check Number of files
    if (files.length !== maxFiles) {
      this.errors.push("Error: At a time you can upload only " + maxFiles + " files");
      return;
    }
    this.isValidFileExtension(files, fileExt, maxSize);
    return this.errors.length === 0;
  }

  private isValidFileExtension(files, fileExt, maxSize) {
    // Make array of file extensions
    var extensions = (fileExt.split(','))
      .map(function (x) { return x.toLocaleUpperCase().trim() });
    for (var i = 0; i < files.length; i++) {
      // Get file extension
      var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
      // Check the extension exists
      var exists = extensions.includes(ext);
      if (!exists) {
        this.errors.push("Error (Extension): " + files[i].name);
      }
      // Check file size
      this.isValidFileSize(files[i], maxSize);
    }
  }

  private isValidFileSize(file, maxSize) {
    var fileSizeinMB = file.size / (1024 * 1000);
    var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
    if (size > maxSize)
      this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + maxSize + "MB ( " + size + "MB )");
  }

}
