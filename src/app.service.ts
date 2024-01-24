import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHomesData(): any[] {
    const homesData = [];

    for (let i = 1; i <= 30; i++) {
      const startDate = new Date('01/01/2024');
      const endDate = new Date();

      const timeDifference = endDate.getTime() - startDate.getTime();
      const randomTimeOffset = Math.random() * timeDifference;
      const randomStartDate = new Date(startDate.getTime() + randomTimeOffset);
      const remainingTimeDifference =
        endDate.getTime() - randomStartDate.getTime();
      const randomEndTimeOffset = Math.random() * remainingTimeDifference;
      const randomEndDate = new Date(
        randomStartDate.getTime() + randomEndTimeOffset,
      );

      const home = {
        title: faker.lorem.words(3),
        review: (Math.random() * 5).toFixed(1),
        reviewCount: Math.floor(Math.random() * 500),
        perNightCost: (Math.random() * 200 + 100).toFixed(2),
        img: faker.image.image(),
        details: [
          `${Math.floor(Math.random() * 5) + 1} guests`,
          `${Math.floor(Math.random() * 3) + 1} bedrooms`,
          `${Math.floor(Math.random() * 2) + 1} bath`,
          'Wifi',
          'Kitchen',
          'Free parking',
          'Washer',
        ],
        dateRange: {
          startDate: randomStartDate.toISOString(),
          endDate: randomEndDate.toISOString(),
        },
      };

      homesData.push(home);
    }

    return homesData;
  }
}
