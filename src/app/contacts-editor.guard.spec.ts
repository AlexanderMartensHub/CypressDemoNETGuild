import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateContactsEditorGuard } from './contacts-editor.guard';

describe('CanDeactivateContactsEditoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateContactsEditorGuard]
    });
  });

  xit('should ...', inject([CanDeactivateContactsEditorGuard], (guard: CanDeactivateContactsEditorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
