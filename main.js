function addBullet() {
	//create checkbox and list item
	var checkbox = document.createElement('input')
	var li = document.createElement('li')
	//checkbox details
	checkbox.setAttribute('type', 'checkbox')
	checkbox.id = 'check'
	//retrieve, package, display
	var userInput = document.getElementById('userInput').value
	var node = document.createTextNode(userInput)
	var listItem = document.getElementById('listItem')
	li.appendChild(checkbox)
	li.appendChild(node)
	listItem.appendChild(li)
}