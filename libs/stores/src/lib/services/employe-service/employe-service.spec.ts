import { EmployeService } from './employe-service';
import * as fs from 'fs';
import { join } from 'path';
import { faker } from '@faker-js/faker';
import { IEmploye } from '../../constants/employe-type/employe-type';

describe('EmployeService', () => {
  it('should be defined', () => {
    fs.writeFileSync(
      join(__dirname, 'employes.json'),
      JSON.stringify(
        Array.from(Array(100).keys()).map((item) => {
          return {
            username: faker.internet.userName(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            birthDate: new Date().toISOString().slice(0, -1),
            basicSalary: faker.commerce.price(100000, 5000000),
            status: faker.helpers.arrayElement(['Admin', 'Member']),
            group: 'group',
            description: faker.lorem.text(),
          } as Partial<IEmploye>;
        })
      )
    );
    expect(EmployeService).toBeDefined();
  });
});
