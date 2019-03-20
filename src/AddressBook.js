function Addresbook() {
	this.contacts = [];
	this.initialsComplete = false;
} 

AddressBook.prototype.getInitalContacts = function(cb) {
	var self = this;
	
	setTimeout(function() {
		self.initalComplete = true;
		if (cb) {
			return cb();
		}
	}, 3);
}

AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
	return this.contacts[index];
}