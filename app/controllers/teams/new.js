import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    saveTeam() {
      const team = this.get("model");

      return team
        .save()
        .then(() => this.transitionToRoute("teams.team", team.id));
    }
  }
});
