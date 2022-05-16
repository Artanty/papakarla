document.addEventListener("DOMContentLoaded", function(event) { 
  const wrapper = document.getElementById('eventsWrapper')

  const topRow = document.createElement('div')
  topRow.classList.add('row', 'line', 'line1', 'hidden-xs')

  const div1 = document.createElement('div')
  div1.classList.add('col-md-3', 'col-sm-3')
  div1.innerHTML = 'Дата'
  const div2 = document.createElement('div')
  div2.classList.add('col-md-3', 'col-sm-3')
  div2.innerHTML = 'Место'
  const div3 = document.createElement('div')
  div3.classList.add('col-md-3', 'col-sm-3')
  div3.innerHTML = 'Событие'
  const div4 = document.createElement('div')
  div4.classList.add('col-md-3', 'col-sm-3')
  div4.innerHTML = 'Билеты'

  topRow.append(div1, div2, div3, div4)
  wrapper.appendChild(topRow)

  for (let i = 0; i < concerts.length; i++) {
    const eventRow = document.createElement('div')
    eventRow.classList.add('row', 'line', 'line-event')

    const eventDateDiv = document.createElement('div')
    eventDateDiv.classList.add('col-md-3', 'col-sm-3')
    eventDateDiv.innerHTML = concerts[i].eventDate
    
    const eventNameDiv = document.createElement('div')
    eventNameDiv.classList.add('col-md-3', 'col-sm-3')
    eventNameDiv.innerHTML = concerts[i].eventPlaceName
    eventDateDiv.title = concerts[i].eventPlaceAddress
    
    const eventLinkDiv = document.createElement('div')
    eventLinkDiv.classList.add('col-md-3', 'col-sm-3')
    const eventLink = document.createElement('a')
    eventLink.classList.add('event-link')
    const eventLinkText = document.createTextNode(concerts[i].eventPlaceName)
    eventLink.appendChild(eventLinkText)
    eventLink.href = concerts[i].eventLink
    eventLinkDiv.appendChild(eventLink)
    
    const eventTicketLinkDiv = document.createElement('div')
    eventTicketLinkDiv.classList.add('col-md-3', 'col-sm-3')
    const eventTicketLink = document.createElement('a')
    eventTicketLink.classList.add('btn', 'btn_buy_ticket')
    const eventTicketLinkText = document.createTextNode('Купить билеты')
    eventTicketLink.appendChild(eventTicketLinkText)
    eventTicketLink.href = concerts[i].buyTicketsLink
    eventTicketLinkDiv.appendChild(eventTicketLink)

    eventRow.append(eventDateDiv, eventNameDiv, eventLinkDiv, eventTicketLinkDiv)

    wrapper.appendChild(eventRow)
  }
});