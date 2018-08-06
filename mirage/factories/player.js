import { Factory, faker } from "ember-cli-mirage";

const positions = [
  "first base",
  "second base",
  "shortstop",
  "third base",
  "pitcher",
  "catcher",
  "right field",
  "center field",
  "left field"
];

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },

  lastName() {
    return faker.name.lastName();
  },

  avatar() {
    return faker.image.avatar();
  },

  dateOfBirth() {
    return faker.date.between("1980-01-01", "2000-12-31");
  },

  number() {
    return faker.random.number(100);
  },

  position() {
    return faker.random.arrayElement(positions);
  },

  battingAverage() {
    return faker.random.number({ min: 100, max: 750 }) / 1000;
  },

  isFreeAgent() {
    return faker.random.boolean();
  }
});
