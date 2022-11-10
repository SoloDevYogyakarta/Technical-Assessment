import { employeValidationDto } from './employe-validation';
import { faker } from '@faker-js/faker';

describe('EmployeValidation', () => {
  it('should be defined', () => {
    expect(employeValidationDto).toBeDefined();
  });

  it('should be valid', () => {
    const username = faker.internet.userName();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const birthDate = new Date().toDateString().slice(0, -1);
    const status = faker.helpers.arrayElement(['Member', 'Admin']);
    const description = faker.lorem.text();
    employeValidationDto.setValue({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthDate: birthDate,
      status: status,
      group: '?',
      description: description,
    });
    expect(employeValidationDto.value).toEqual({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthDate: birthDate,
      status: status,
      group: '?',
      description: description,
    });
    expect(employeValidationDto.status).toEqual('VALID');
  });

  it('should be errors', () => {
    employeValidationDto.setValue({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      status: '',
      group: '',
      description: '',
    });
    expect(employeValidationDto.invalid).toEqual(true);
  });
});
