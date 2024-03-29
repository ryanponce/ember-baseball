import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default Route.extend({
  model() {
    return RSVP.hash({
      player: this.get("store").createRecord("player"),
      teams: this.get("store").findAll("team")
    });
  },

  actions: {
    createPlayer(newPlayer) {
      return newPlayer
        .save()
        .then(() => this.transitionTo("players.player", newPlayer.id));
    }
  }
});
