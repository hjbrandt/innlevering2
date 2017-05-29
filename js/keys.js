$(function () {
  'use strict'

  console.log('now we are ready')

  function playKey (e) {
	  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`) // select audio element based on data-key
	  const key = document.querySelector(`.key[data-key='${e.keyCode}']`) // select key based on key class and data-key
    const video = document.querySelector(`video[data-key='${e.keyCode}']`)

	  if (!video || !audio) return // stop the function from running if no sound or video
	  audio.currentTime = 0 // rewind sound before playing
    video.currentTime = 0
    $(key).addClass('playing') // add 'playing' to class TODO skriv om til jquery - key.addClass('playing')
	  audio.play() // play sound
    video.play()

    audio.onended = function () {
      $(key).removeClass('playing')
    }
  }

  function removeKey (e) {
	  if (e.propertyName !== 'transform') return
  }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeKey))

  window.addEventListener('keydown', playKey)
})
