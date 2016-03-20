'use strict';

describe('Service: LoggedUserService', function () {

  // load the service's module
  beforeEach(module('orzoApp'));

  // instantiate service
  var LoggedUserService;
  beforeEach(inject(function (_LoggedUserService_) {
    LoggedUserService = _LoggedUserService_;
  }));

  it('should do something', function () {
    expect(!!LoggedUserService).toBe(true);
  });

});
