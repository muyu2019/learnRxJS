import React from 'react';
import {fromEvent, merge} from 'rxjs';

import {concatMap, takeUntil, map, filter} from 'rxjs/operators';

class DragDiv extends React.PureComponent {

  useRxjs = () => {
    const box = document.getElementById('box');
    const mouseDown$ = fromEvent(box, 'mousedown');
    const mouseUp$ = fromEvent(box, 'mouseup');
    const mouseOut$ = fromEvent(box, 'mouseout');
    const mouseMove$ = fromEvent(box, 'mousemove');
    const drag$ = mouseDown$.pipe(
      concatMap(startEvent => {
        const initLeft = box.offsetLeft;
        const initTop = box.offsetTop;
        const stop$ = merge(mouseUp$, mouseOut$);
        return mouseMove$.pipe(
          takeUntil(stop$),
          map(moveEvent => ({
            x: moveEvent.x - startEvent.x + initLeft,
            y: moveEvent.y - startEvent.y + initTop
          })),
        )
      }),
    );
    drag$.subscribe(data => {
      box.style.left = data.x + 'px';
      box.style.top = data.y + 'px';
    })
  };

  useDom = () => {
    const box = document.getElementById('box');
    let status = false;
    let startX;
    let startY;
    let startLeft;
    let startTop;
    box.onmousedown = function (event) {
      status = true;
      startX = event.clientX;
      startY = event.clientY;
      startLeft = box.offsetLeft;
      startTop = box.offsetTop;
    };
    box.onmousemove = function (event) {
      if (status) {
        box.style.left = event.clientX - startX + startLeft + 'px';
        box.style.top = event.clientY - startY + startTop + 'px';
      }
    };
    box.onmouseup = function () {
      status = false;
    };
    box.onmouseout = function () {
      status = false;
    };
  };

  componentDidMount() {
    // this.useRxjs();
    this.useDom();
  }

  render() {
    return (
      <div id="box" style={{
        width: "200px",
        height: "200px",
        background: "pink",
        position: "absolute",
        cursor: "pointer"
      }}>DIV</div>
    )
  }
}

export default DragDiv;