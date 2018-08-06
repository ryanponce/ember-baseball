import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.get("store").createRecord("team");
  },

  actions: {
    willTransition() {
      // Remove newly created record if user transitions from route
      const model = this.controller.get("model");

      return model.rollbackAttributes();
    }
  }
});
