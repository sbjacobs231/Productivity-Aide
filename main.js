function addBullet() {
	//added checkboxes
	var checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.className = 'square'
	var bullet = document.createTextNode(checkbox)
	var list = document.getElementById('list')
	list.appendChild(bullet)
	//original
	var li = document.createElement('li')
	var userInput = document.getElementById('userInput').value
	var node = document.createTextNode(userInput)
	li.appendChild(node)
	var listItem = document.getElementById('listItem')
	listItem.appendChild(li)
}