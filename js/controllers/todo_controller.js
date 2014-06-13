Todos.TodoController = Ember.ObjectController.extend({

	isEditing: false,

	actions: {

		editTodo: function() {
			this.set('isEditing', true);
		},

		acceptChanges: function() {
			this.set('isEditing', false);
			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save()
			}
		},

		removeTodo: function() {
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}

	},

	isCompleted: function(key, value) {
		var model = this.get('model');
		if (value == undefined) {
			// Property is used as a getter.
			return model.get('isCompleted');
		} else {
			// Property is a setter.
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')

});