window.Todos = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true
});

window.Todos.ready = function() {
	console.log('Application initialized.');
};

Todos.ApplicationAdapter = DS.FixtureAdapter.extend();