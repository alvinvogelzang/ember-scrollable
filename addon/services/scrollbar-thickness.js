import { computed } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  thickness: computed(() => {
    let tempEl = document.createElement('div');
    tempEl.setAttribute('style', 'width: 50px; position: "absolute"; left: -100px;');
    tempEl.classList.add('scrollbar-width-tester')
    tempEl.innerHTML = `<div style="overflow: scroll;"><div class="scrollbar-width-tester__inner"></div></div>`;
    document.body.appendChild(tempEl);
    let width = tempEl.offsetWidth
    let widthMinusScrollbars = tempEl.querySelector('.scrollbar-width-tester__inner').offsetWidth;

    return (width - widthMinusScrollbars);
  })
});
