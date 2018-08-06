export default function() {
  this.namespace = "/api";

  // teams
  this.get("/teams");
  this.post("/teams");
  this.get("/teams/:id");
  this.delete("/teams/:id");
  this.patch("/teams/:id");

  // players
  this.get("/players");
  this.post("/players");
  this.get("/players/:id");
  this.delete("/players/:id");
  this.patch("/players/:id");
}
