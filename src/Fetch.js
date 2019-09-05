import React from 'react';
import {Button} from 'antd';
import {fromEvent, merge, of, from} from 'rxjs';
import {
  concatMap,
  switchMap,
  takeUntil,
  map,
  filter,
  tap,
  debounceTime,
  throttleTime,
  retry,
  retryWhen,
  catchError,
} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

class Fetch extends React.PureComponent {

  componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/posts";
    const button = document.getElementById("button");

    const click$ = fromEvent(button, "click");
    const fetch$ = click$.pipe(
      debounceTime(300),
      // throttleTime(1000),
      switchMap(() => {
        return ajax.getJSON(url).pipe(
          // retry(2),
          // catchError(err => from([1, 2, 3, 4, 5])),
        );
      })
    );

    fetch$.subscribe(v => console.log(v));
  }

  render() {
    return (
      <div>
        <Button id="button">click</Button>
      </div>
    )
  }
}

export default Fetch;