import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

export let projects = [
  {
    id: 1,
    title: 'Dat.io — Dating Application',
    slug: 'datio-dating-application',
    intro: 'Datingapplication for all IT students.',
    backgroundImage:
      'https://user-images.githubusercontent.com/48051912/96302594-60308d00-0ff9-11eb-858b-f7b4c97afa7d.png',
    detailsOne: lorem.generateParagraphs(1),
    detailsTwo: lorem.generateParagraphs(1),
  },
  {
    id: 2,
    title: 'VID — Visual Interface Design',
    slug: 'vid-visual-interface-design',
    intro: lorem.generateParagraphs(1),
    detailsOne: lorem.generateParagraphs(1),
    detailsTwo: lorem.generateParagraphs(1),
  },
  {
    id: 3,
    title: 'Frontend Development 2',
    slug: 'frontend-dev-2',
    intro: lorem.generateParagraphs(1),
    detailsOne: lorem.generateParagraphs(1),
    detailsTwo: lorem.generateParagraphs(1),
  },
];
