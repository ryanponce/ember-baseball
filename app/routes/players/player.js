import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.get("store").findRecord("player", params.player_id);
  },

  actions: {
    deletePlayer(player) {
      return player.destroyRecord().then(() => this.transitionTo("players"));
    }
  }
});
