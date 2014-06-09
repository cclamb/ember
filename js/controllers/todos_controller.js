Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			// Get the title of the new todo object
			var title = this.get('newTitle');

			// Validate that the title has text
			if (!title.trim()) return; 

			// Create the new data object
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			// Clear the new todo text field
			this.set('newTitle', '');

			// Save the data object
			todo.save();
		}
	}
});