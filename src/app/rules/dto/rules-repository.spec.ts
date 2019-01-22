import { RulesRepository } from './rules-repository';
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RuleEntry } from '../model/rule-entry';

describe('RulesRepository', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    // let repository: RulesRepository;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ]
        });

        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        // repository = new RulesRepository(httpClient);
    });

    it('#getRule should return rule', () => {
        // expect(repository.getRule('')).toBeTruthy();
    });
});
