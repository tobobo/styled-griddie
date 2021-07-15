import { parseGridProperties } from './parser'
import { StylisPlugin } from 'styled-components'

const _griddie: StylisPlugin = function griddie(context, content) {
  if (context === 1 || context === 2) {
    return Array.isArray(content)
      ? content.forEach(item => parseGridProperties(item))
      : parseGridProperties(content)
  }
}

export default _griddie
