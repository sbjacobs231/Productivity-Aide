function addBullet() {
	//create checkbox and list item
	var checkbox = document.createElement('input')
	var li = document.createElement('li')
	//checkbox details
	checkbox.setAttribute('type', 'checkbox')
	checkbox.id = 'check'
	checkbox.className = 'box'
	li.className = 'txt'
	//retrieve, package, display
	var userInput = document.getElementById('userInput').value
	var node = document.createTextNode(userInput)
	var listItem = document.getElementById('listItem')
	li.appendChild(checkbox)
	li.appendChild(node)
	listItem.appendChild(li)
}
//remove function
function removeBullet() {
	var boxes = document.getElementsByClassName('box')
	var txts = document.getElementsByClassName('txt')
	for (i = 0; i<boxes.length; i++) {
		var box = boxes[i]
		var txt = txts[i]
		if (box.checked) {
			txt.parentNode.removeChild(txt)
		}
	}
}