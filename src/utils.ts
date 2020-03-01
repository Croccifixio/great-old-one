import { fromEvent } from 'rxjs'
import { debounceTime, shareReplay } from 'rxjs/operators'

const windowResize$ = fromEvent(window, 'resize').pipe(
  debounceTime(300),
  shareReplay()
)

export {
  windowResize$
}
