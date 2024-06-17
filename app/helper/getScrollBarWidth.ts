const getScrollBarWidth = () => {
  const div: HTMLElement = document.createElement('div')
  div.style.overflow = 'scroll'
  document.body.appendChild(div)

  const offsetWidth: number = div.offsetWidth
  const clientWidth: number = div.clientWidth

  document.body.removeChild(div)
  const res: number = +offsetWidth - +clientWidth
  const value = res + 'px'

  document.documentElement.style.setProperty('--scroll-bar-width', value)
}

export default getScrollBarWidth
