const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const audio = document.querySelector('#audio')
const audior = document.querySelector('#audio1')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
)
right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
)
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
)

right.addEventListener('mouseenter', () => {
  audior.play()
})
right.addEventListener('mouseleave', () => {
  audior.pause()
})

left.addEventListener('mouseenter', () => {
  audio.play()
})
left.addEventListener('mouseleave', () => {
  audio.pause()
})
