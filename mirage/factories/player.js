import { Factory, faker } from "ember-cli-mirage";

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

  battingAverage() {
    return faker.random.number({ min: 100, max: 750 }) / 1000;
  },

  isFreeAgent() {
    return faker.random.boolean();
  },

  afterCreate(player, server) {
    if (server.schema.players.where({ isFreeAgent: true }).models.length >= 3) {
      player.update({ isFreeAgent: false });
    }
  }
});
