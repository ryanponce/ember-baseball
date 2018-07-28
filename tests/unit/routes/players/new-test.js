import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | players/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:players/new');
    assert.ok(route);
  });
});
