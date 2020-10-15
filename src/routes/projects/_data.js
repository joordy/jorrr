import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export let projects = [
  {
    id: 1,
    title: 'NPD — New Product Development',
    slug: 'npd-new-product-dev',
    intro:
      'Travel planner for all your holiday activities. The application supports the user from the beginning to the end of the holiday. It keeps track of your bookings in one overview.',
    detailsOne: lorem.generateParagraphs(3),
    detailsTwo: lorem.generateParagraphs(2),
  },
  {
    id: 2,
    title: 'VID — Visual Interface Design',
    slug: 'vid-visual-interface-design',
    intro: lorem.generateParagraphs(1),
    detailsOne: lorem.generateParagraphs(3),
    detailsTwo: lorem.generateParagraphs(2),
  },
  {
    id: 3,
    title: 'Frontend Development 2',
    slug: 'frontend-dev-2',
    intro: lorem.generateParagraphs(1),
    detailsOne: lorem.generateParagraphs(3),
    detailsTwo: lorem.generateParagraphs(2),
  },
];
