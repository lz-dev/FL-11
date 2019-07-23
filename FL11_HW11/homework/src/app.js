let limitNotify = document.getElementById('limitNotify');
let newActionText = document.getElementById('newActionText');
let actionList = document.getElementById('actionList');
let addActionBtn = document.getElementById('addActionBtn');
let itemCount = 0;
let lastId = 0;
let dragSource = null;
const maxActionRows = 10;

function allowDrop(ev) {
   ev.preventDefault();
   if (ev.target.className === 'actionRow' || ev.target.parentNode.className === 'actionRow') {
	return true;
      }
   return false;
}

function drag(ev) {
   dragSource = ev.target;
}

function drop(ev) {
   ev.preventDefault();

   let oldElement = dragSource;

   if (oldElement !== null) {
      let target = null;
      if (ev.target.className === 'actionRow') {
         target = ev.target;
      }

      if (ev.target.parentNode.className === 'actionRow') {
         target = ev.target.parentNode;
      }
      if (target !== null) {
         let oldInnerHTML = oldElement.innerHTML;
         oldElement.innerHTML = target.innerHTML;
         target.innerHTML = oldInnerHTML;
      }
    }
}

function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
}

function makeActionElement(actionText) {
  let actionHtml ='<div class="actionRow" draggable="true" ondrop="drop(event)"'
    + ' ondragstart="drag(event)" ondragover="allowDrop(event)">'
    +'<input type="checkbox" class="actionDone" onclick="confirmAction(this)">'
    +'<label class="actionLabel">' + actionText + '</label>' 
    +'<input type="text" class="actionText" disabled value="' + actionText + ' " style="display:none">' 
    +'<button onclick="saveAction(this)" class="saveButton" style="display:none">'
    +'<i class="material-icons save">save</i></button>' 
    +'<button onclick="editAction(this)" class="editButton"><i class="material-icons edit">edit</i></button>' 
    +'<button onclick="deleteAction(this)" class="deleteButton"><i class="material-icons delete">delete</i></button>' 
    +'</div>';

 return htmlToElement(actionHtml);
}

function checkInput(el) {
    if (el.value.trim() === '') {
    addActionBtn.disabled = true;
  } else {
    addActionBtn.disabled = false;
   }
}

function checkLimit() {
  if (actionList.children.length >= maxActionRows) {
    limitNotify.style = '';
    addActionBtn.disabled = true;
    newActionText.disabled = true;
  } else {
    limitNotify.style = 'display:none';
    checkInput(newActionText);
    newActionText.disabled = false;
  } 
}

function addAction() {

  if (actionList.children.length >= maxActionRows) {
     return;
  }

  let actionElement = makeActionElement(newActionText.value);
  actionList.append(actionElement);
  checkLimit();
}

function editAction(el) {
  let row = el.parentNode;
  let editButton = row.querySelector('.editButton');
  let saveButton = row.querySelector('.saveButton');
  let deleteButton = row.querySelector('.deleteButton');
  let actionText = row.querySelector('.actionText');
  let actionDone = row.querySelector('.actionDone');
  let actionLabel = row.querySelector('.actionLabel');
  actionText.disabled = false;
  actionText.style = '';
  actionDone.style = 'display:none';
  editButton.style = 'display:none';
  deleteButton.style = 'display:none';
  actionLabel.style = 'display:none';
  saveButton.style = '';
}

function saveAction(el) {
  let row = el.parentNode;
  let editButton = row.querySelector('.editButton');
  let saveButton = row.querySelector('.saveButton');
  let deleteButton = row.querySelector('.deleteButton');
  let actionText = row.querySelector('.actionText');
  let actionDone = row.querySelector('.actionDone');
  let actionLabel = row.querySelector('.actionLabel');
  actionText.disabled = true;
  actionText.style= 'display:none';
  actionDone.style = '';
  saveButton.style = 'display:none';
  deleteButton.style = '';
  actionLabel.style = '';
  actionLabel.innerHTML = actionText.value;
  editButton.style = '';
}

function deleteAction(el) {
  actionList.removeChild(el.parentNode);
  checkLimit(); 
}

function confirmAction(el) {
  el.checked = true;
  el.disabled = true;
}

function fillDefault() {                                         
  newActionText.value = '';
  checkInput(newActionText);
  actionList.append(makeActionElement('Find the cat'));
  actionList.append(makeActionElement('Prepare cat\'s carry'));
  actionList.append(makeActionElement('Bathe the cat'));
  actionList.append(makeActionElement('Feed the cat'));
  actionList.append(makeActionElement('Find the cat\'s medical card'));
  actionList.append(makeActionElement('Put the cat in the cat\'s box'));
  actionList.append(makeActionElement('Call the taxi'));
  actionList.append(makeActionElement('Get to the hospital'));
  actionList.append(makeActionElement('Say Hello to the doctor'));
}

fillDefault();

