FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('mainLayout', {content: 'hello'});
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action() {
		BlazeLayout.render('mainLayout', {content: 'about'});
	}
});