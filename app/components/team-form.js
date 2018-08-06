import Component from "@ember/component";

export default Component.extend({
  actions: {
    saveTeam() {
      this.get("onSaveTeam")();
    }
  }
});
