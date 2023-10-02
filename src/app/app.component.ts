import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import * as Editor from 'ckeditor5/build/ckeditor';
import { CkEditorConfigService } from 'service/ckeditor/ck-editor-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sanitizedHtmlContent: SafeHtml | undefined;

  constructor(
    private sanitizer: DomSanitizer,
    public ckeditorConfigService: CkEditorConfigService
  ) {}
  public Editor = Editor;
  title = 'ckeditor-with-angular';

  public onChange({ editor }: ChangeEvent) {
    const data = editor.data.get();
    this.sanitizedHtmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
  }
}
