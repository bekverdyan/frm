import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { RulesRepository } from './rules-repository';
import { RuleEntry } from '../model/rule-entry';

describe('RulesRepository', () => {
  let rulesRepository: RulesRepository;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RulesRepository],
    });

    rulesRepository = TestBed.get(RulesRepository);
    // httpMock = TestBed.get(HttpTestingController);
  });

  it('should retrieve rules', () => {
    console.log('vzgulik');
    rulesRepository.retrieveRules().subscribe(ruleEntries => {
      expect('jjjj').toBe('d');
      console.log('vazgen');
      console.log(ruleEntries);
      expect(ruleEntries.length).toBe(1);
    });
    console.log('gagik');
  });
});


// import { RulesRepository } from './rules-repository';
// // Http testing module and mocking controller
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// // Other imports
// import { TestBed } from '@angular/core/testing';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { RuleEntry } from '../model/rule-entry';
// import { MessageService } from '../message-dialog/message.service';
// import { CommonErrorHandler } from 'src/app/core/error/common-error-handler';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Observable } from 'rxjs';

// describe('RulesRepository', () => {

//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   let messageService: MessageService;
//   let errorHandler: CommonErrorHandler;
//   let repository: RulesRepository;

//   beforeEach(() => {

//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule]
//     });

//     httpClient = TestBed.get(HttpClient);
//     httpTestingController = TestBed.get(HttpTestingController);

//     messageService = new MessageService(NgbModal.prototype);
//     errorHandler = new CommonErrorHandler(messageService);

//     repository = new RulesRepository(httpClient, messageService, errorHandler);
//   });

//   it('#retrieveRules should return at least one valid rule', () => {
//     console.log('gago');
//     // expect(repository.retrieveRules()).toBeTruthy();
//     repository.retrieveRules().subscribe((entries: RuleEntry[]) => {
//       console.log(entries.length + 'gago');
//       expect(entries.length).toBeGreaterThanOrEqual(1);
//     });
//   });

// });
