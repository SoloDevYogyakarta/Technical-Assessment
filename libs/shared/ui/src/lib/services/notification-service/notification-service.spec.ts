import { NotificationService } from './notification-service';
// import * as fs from 'fs';
// import * as path from 'path';
// import { faker } from '@faker-js/faker';
// import { IEmploye } from '@nov9-technical-assessment/stores';

describe('NotificationService', () => {
  it('should be defined', () => {
    // fs.writeFileSync(
    //   path.join(__dirname, 'employes.json'),
    //   JSON.stringify(
    //     Array.from(Array(100).keys()).map((item) => {
    //       return {
    //         public_id: faker.datatype.uuid(),
    //         username: faker.internet.userName(),
    //         firstName: faker.name.firstName(),
    //         lastName: faker.name.lastName(),
    //         email: faker.internet.email(),
    //         birthDate: new Date().toISOString().slice(0, -1),
    //         status: faker.helpers.arrayElement(['Member', 'Admin']),
    //         group: 'group',
    //         description: faker.lorem.text(),
    //       } as Partial<IEmploye>;
    //     })
    //   )
    // );
    expect(NotificationService).toBeDefined();
  });
});
