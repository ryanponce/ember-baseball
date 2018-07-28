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

  isFreeAgent() {
    return faker.random.boolean();
  },

  afterCreate(player, server) {
    if (server.schema.players.where({ isFreeAgent: true }).models.length >= 3) {
      player.update({ isFreeAgent: false });
    }
  }
});
